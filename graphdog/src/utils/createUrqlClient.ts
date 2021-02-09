import { cacheExchange, FieldInfo, Resolver } from "@urql/exchange-graphcache";
import gql from "graphql-tag";
import Router from "next/router";

import {
  dedupExchange,
  Exchange,
  fetchExchange,
  stringifyVariables,
} from "urql";
import { pipe, tap } from "wonka";
import {
  DoggosQuery,
  FeedMutation,
  FeedMutationVariables,
  LoginMutation,
  LogoutMutation,
  MeDocument,
  MeQuery,
  PaginatedDoggos,
  RegisterMutation,
} from "../generated/graphql";
import { betterUpdateQuery } from "./betterUpdate";
import { isServer } from "./isServer";

export const cursorPagination = (): Resolver => {
  return (_parent, fieldArgs, cache, info) => {
    const { parentKey: entityKey, fieldName } = info;

    const allFields = cache.inspectFields(entityKey);
    const fieldInfos = allFields.filter(
      (info: FieldInfo) => info.fieldName === fieldName
    );
    const size = fieldInfos.length;
    if (size === 0) {
      return undefined;
    }
    const fieldKey = `${fieldName}(${stringifyVariables(fieldArgs)})`;
    const isItInTheCache = cache.resolve(
      cache.resolve(entityKey, fieldKey) as string,
      "doggos"
    );
    info.partial = !isItInTheCache;
    let hasMore = true;
    const results: string[] = [];
    fieldInfos.forEach((fi: FieldInfo) => {
      const key = cache.resolveFieldByKey(entityKey, fi.fieldKey) as string;

      const data = cache.resolve(key, "doggos") as string[];
      const _hasMore = cache.resolve(key, "hasMore");
      if (!_hasMore) {
        hasMore = _hasMore as boolean;
      }

      results.push(...data);
    });

    return { __typename: "PaginatedDoggos", doggos: results, hasMore };
  };
};

const errorExchange: Exchange = ({ forward }) => (ops$) => {
  return pipe(
    forward(ops$),
    tap(({ error }) => {
      if (error) {
        if (error.message?.includes("not authenticated")) {
          Router.replace("/login");
        }
      }
    })
  );
};

export const createUrqlClient = (ssrExchange: any, ctx: any) => {
  let cookie = "";
  if (isServer()) {
    cookie = ctx?.req.headers.cookie;
  }
  return {
    url: "http://localhost:5000/graphql",
    fetchOptions: {
      credentials: "include" as const,
      headers: cookie
        ? {
            cookie,
          }
        : undefined,
    },
    exchanges: [
      dedupExchange,
      cacheExchange({
        keys: { PaginatedDoggos: () => null },
        resolvers: { Query: { doggos: cursorPagination() } },
        updates: {
          Mutation: {
            feed: (_result, args, cache, info) => {
              const { doggoId, value } = args as FeedMutationVariables;
              const data = cache.readFragment(
                gql`
                  fragment _ on Doggo {
                    id
                    treats
                    treatStatus
                  }
                `,
                { id: doggoId } as any
              );
              if (data) {
                const newPoints =
                  (data.treats as number) + (!data.treatStatus ? 1 : 2) * value;
                if (data.treatStatus === value) {
                  return;
                }
                cache.writeFragment(
                  gql`
                    fragment __ on Doggo {
                      treats
                      treatStatus
                    }
                  `,
                  { id: doggoId, treats: newPoints, treatStatus: value } as any
                );
              }
            },
            createDog: (result, args, cache, info) => {
              const allFields = cache.inspectFields("Query");
              const fieldInfos = allFields.filter(
                (info) => info.fieldName == "doggos"
              );
              fieldInfos.forEach((fi) => {
                cache.invalidate("Query", "doggos", fi.arguments || {});
              });
            },
            logout: (result, args, cache, info) => {
              betterUpdateQuery<LogoutMutation, MeQuery>(
                cache,
                { query: MeDocument },
                result,
                () => ({ me: null })
              );
            },
            login: (result, args, cache, info) => {
              betterUpdateQuery<LoginMutation, MeQuery>(
                cache,
                { query: MeDocument },
                result,
                (result, query) => {
                  if (result.login.errors) {
                    return query;
                  } else {
                    return {
                      me: result.login.user,
                    };
                  }
                }
              );
            },
            register: (_result, args, cache, info) => {
              betterUpdateQuery<RegisterMutation, MeQuery>(
                cache,
                { query: MeDocument },
                _result,
                (result, query) => {
                  if (result.register.errors) {
                    return query;
                  } else {
                    return {
                      me: result.register.user,
                    };
                  }
                }
              );
            },
          },
        },
      }),
      ssrExchange,
      fetchExchange,
    ],
  };
};
