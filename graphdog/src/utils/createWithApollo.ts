import { ApolloClient, InMemoryCache } from "@apollo/client";
import { withApollo as createWithApollo } from "next-apollo";
import { PaginatedDoggos } from "../generated/graphql";
const apolloClient = new ApolloClient({
  uri: "http://localhost:5000/graphql",

  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          doggos: {
            keyArgs: [],
            merge(
              existing: PaginatedDoggos | undefined,
              incoming: PaginatedDoggos
            ): PaginatedDoggos {
              return {
                ...incoming,
                doggos: [...incoming.doggos],
              };
            },
          },
        },
      },
    },
  }),
  credentials: "include",
});
export const withApollo = createWithApollo(apolloClient);
