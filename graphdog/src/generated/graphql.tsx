import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  doggos: PaginatedDoggos;
  dog?: Maybe<Doggo>;
  users: Array<User>;
  me?: Maybe<User>;
};


export type QueryDoggosArgs = {
  cursor?: Maybe<Scalars['String']>;
  limit: Scalars['Int'];
};


export type QueryDogArgs = {
  id: Scalars['Int'];
};

export type PaginatedDoggos = {
  __typename?: 'PaginatedDoggos';
  doggos: Array<Doggo>;
  hasMore: Scalars['Boolean'];
};

export type Doggo = {
  __typename?: 'Doggo';
  id: Scalars['Int'];
  createdDate: Scalars['String'];
  updatedDate: Scalars['String'];
  name: Scalars['String'];
  ownerId: Scalars['Int'];
  owner: User;
  story: Scalars['String'];
  treats: Scalars['Float'];
  treatStatus?: Maybe<Scalars['Float']>;
  textSnippet: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['Int'];
  createdDate: Scalars['String'];
  updatedDate: Scalars['String'];
  username: Scalars['String'];
  email: Scalars['String'];
  doggos: Array<Doggo>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createDog?: Maybe<Doggo>;
  updateDog?: Maybe<Doggo>;
  feed: Scalars['Boolean'];
  deleteDog?: Maybe<Scalars['Boolean']>;
  forgotPassword: Scalars['Boolean'];
  changePassword: UserResponse;
  register: UserResponse;
  login: UserResponse;
  logout: Scalars['Boolean'];
};


export type MutationCreateDogArgs = {
  options: DoggoInput;
};


export type MutationUpdateDogArgs = {
  story: Scalars['String'];
  name: Scalars['String'];
  id: Scalars['Int'];
};


export type MutationFeedArgs = {
  value: Scalars['Int'];
  doggoId: Scalars['Int'];
};


export type MutationDeleteDogArgs = {
  id: Scalars['Int'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationChangePasswordArgs = {
  newPassword: Scalars['String'];
  token: Scalars['String'];
};


export type MutationRegisterArgs = {
  options: SignUpInput;
};


export type MutationLoginArgs = {
  options: UsernamePasswordInput;
};

export type DoggoInput = {
  name: Scalars['String'];
  story: Scalars['String'];
};

export type UserResponse = {
  __typename?: 'UserResponse';
  errors?: Maybe<Array<FieldError>>;
  user?: Maybe<User>;
};

export type FieldError = {
  __typename?: 'FieldError';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type SignUpInput = {
  username: Scalars['String'];
  password: Scalars['String'];
  email: Scalars['String'];
};

export type UsernamePasswordInput = {
  username: Scalars['String'];
  password: Scalars['String'];
};

export type BaseUserInfoFragment = (
  { __typename?: 'User' }
  & Pick<User, 'id' | 'username' | 'email'>
);

export type DoggoSnippetFragment = (
  { __typename?: 'Doggo' }
  & Pick<Doggo, 'id' | 'name' | 'ownerId' | 'createdDate' | 'updatedDate' | 'textSnippet' | 'treats' | 'treatStatus' | 'story'>
  & { owner: (
    { __typename?: 'User' }
    & Pick<User, 'id' | 'username'>
  ) }
);

export type RegularErrorFragment = (
  { __typename?: 'FieldError' }
  & Pick<FieldError, 'field' | 'message'>
);

export type RegularUserResponseFragment = (
  { __typename?: 'UserResponse' }
  & { errors?: Maybe<Array<(
    { __typename?: 'FieldError' }
    & RegularErrorFragment
  )>>, user?: Maybe<(
    { __typename?: 'User' }
    & BaseUserInfoFragment
  )> }
);

export type ChangePasswordMutationVariables = Exact<{
  newPassword: Scalars['String'];
  token: Scalars['String'];
}>;


export type ChangePasswordMutation = (
  { __typename?: 'Mutation' }
  & { changePassword: (
    { __typename?: 'UserResponse' }
    & RegularUserResponseFragment
  ) }
);

export type CreateDogMutationVariables = Exact<{
  options: DoggoInput;
}>;


export type CreateDogMutation = (
  { __typename?: 'Mutation' }
  & { createDog?: Maybe<(
    { __typename?: 'Doggo' }
    & Pick<Doggo, 'id' | 'name' | 'story' | 'ownerId' | 'createdDate' | 'updatedDate'>
  )> }
);

export type DeleteDogMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteDogMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deleteDog'>
);

export type FeedMutationVariables = Exact<{
  value: Scalars['Int'];
  doggoId: Scalars['Int'];
}>;


export type FeedMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'feed'>
);

export type ForgotPasswordMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type ForgotPasswordMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'forgotPassword'>
);

export type LoginMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'UserResponse' }
    & RegularUserResponseFragment
  ) }
);

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'logout'>
);

export type RegisterMutationVariables = Exact<{
  options: SignUpInput;
}>;


export type RegisterMutation = (
  { __typename?: 'Mutation' }
  & { register: (
    { __typename?: 'UserResponse' }
    & RegularUserResponseFragment
  ) }
);

export type UpdateDogMutationVariables = Exact<{
  id: Scalars['Int'];
  story: Scalars['String'];
  name: Scalars['String'];
}>;


export type UpdateDogMutation = (
  { __typename?: 'Mutation' }
  & { updateDog?: Maybe<(
    { __typename?: 'Doggo' }
    & Pick<Doggo, 'id' | 'name' | 'story' | 'textSnippet'>
  )> }
);

export type DoggoQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DoggoQuery = (
  { __typename?: 'Query' }
  & { dog?: Maybe<(
    { __typename?: 'Doggo' }
    & Pick<Doggo, 'id' | 'name' | 'ownerId' | 'createdDate' | 'updatedDate' | 'textSnippet' | 'treats' | 'treatStatus' | 'story'>
    & { owner: (
      { __typename?: 'User' }
      & Pick<User, 'id' | 'username'>
    ) }
  )> }
);

export type DoggosQueryVariables = Exact<{
  limit: Scalars['Int'];
  cursor?: Maybe<Scalars['String']>;
}>;


export type DoggosQuery = (
  { __typename?: 'Query' }
  & { doggos: (
    { __typename?: 'PaginatedDoggos' }
    & Pick<PaginatedDoggos, 'hasMore'>
    & { doggos: Array<(
      { __typename?: 'Doggo' }
      & DoggoSnippetFragment
    )> }
  ) }
);

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'User' }
    & BaseUserInfoFragment
  )> }
);

export const DoggoSnippetFragmentDoc = gql`
    fragment DoggoSnippet on Doggo {
  id
  name
  ownerId
  createdDate
  updatedDate
  textSnippet
  treats
  treatStatus
  story
  owner {
    id
    username
  }
}
    `;
export const RegularErrorFragmentDoc = gql`
    fragment RegularError on FieldError {
  field
  message
}
    `;
export const BaseUserInfoFragmentDoc = gql`
    fragment BaseUserInfo on User {
  id
  username
  email
}
    `;
export const RegularUserResponseFragmentDoc = gql`
    fragment RegularUserResponse on UserResponse {
  errors {
    ...RegularError
  }
  user {
    ...BaseUserInfo
  }
}
    ${RegularErrorFragmentDoc}
${BaseUserInfoFragmentDoc}`;
export const ChangePasswordDocument = gql`
    mutation ChangePassword($newPassword: String!, $token: String!) {
  changePassword(newPassword: $newPassword, token: $token) {
    ...RegularUserResponse
  }
}
    ${RegularUserResponseFragmentDoc}`;
export type ChangePasswordMutationFn = Apollo.MutationFunction<ChangePasswordMutation, ChangePasswordMutationVariables>;

/**
 * __useChangePasswordMutation__
 *
 * To run a mutation, you first call `useChangePasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangePasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changePasswordMutation, { data, loading, error }] = useChangePasswordMutation({
 *   variables: {
 *      newPassword: // value for 'newPassword'
 *      token: // value for 'token'
 *   },
 * });
 */
export function useChangePasswordMutation(baseOptions?: Apollo.MutationHookOptions<ChangePasswordMutation, ChangePasswordMutationVariables>) {
        return Apollo.useMutation<ChangePasswordMutation, ChangePasswordMutationVariables>(ChangePasswordDocument, baseOptions);
      }
export type ChangePasswordMutationHookResult = ReturnType<typeof useChangePasswordMutation>;
export type ChangePasswordMutationResult = Apollo.MutationResult<ChangePasswordMutation>;
export type ChangePasswordMutationOptions = Apollo.BaseMutationOptions<ChangePasswordMutation, ChangePasswordMutationVariables>;
export const CreateDogDocument = gql`
    mutation CreateDog($options: DoggoInput!) {
  createDog(options: $options) {
    id
    name
    story
    ownerId
    createdDate
    updatedDate
  }
}
    `;
export type CreateDogMutationFn = Apollo.MutationFunction<CreateDogMutation, CreateDogMutationVariables>;

/**
 * __useCreateDogMutation__
 *
 * To run a mutation, you first call `useCreateDogMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateDogMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createDogMutation, { data, loading, error }] = useCreateDogMutation({
 *   variables: {
 *      options: // value for 'options'
 *   },
 * });
 */
export function useCreateDogMutation(baseOptions?: Apollo.MutationHookOptions<CreateDogMutation, CreateDogMutationVariables>) {
        return Apollo.useMutation<CreateDogMutation, CreateDogMutationVariables>(CreateDogDocument, baseOptions);
      }
export type CreateDogMutationHookResult = ReturnType<typeof useCreateDogMutation>;
export type CreateDogMutationResult = Apollo.MutationResult<CreateDogMutation>;
export type CreateDogMutationOptions = Apollo.BaseMutationOptions<CreateDogMutation, CreateDogMutationVariables>;
export const DeleteDogDocument = gql`
    mutation DeleteDog($id: Int!) {
  deleteDog(id: $id)
}
    `;
export type DeleteDogMutationFn = Apollo.MutationFunction<DeleteDogMutation, DeleteDogMutationVariables>;

/**
 * __useDeleteDogMutation__
 *
 * To run a mutation, you first call `useDeleteDogMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteDogMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteDogMutation, { data, loading, error }] = useDeleteDogMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteDogMutation(baseOptions?: Apollo.MutationHookOptions<DeleteDogMutation, DeleteDogMutationVariables>) {
        return Apollo.useMutation<DeleteDogMutation, DeleteDogMutationVariables>(DeleteDogDocument, baseOptions);
      }
export type DeleteDogMutationHookResult = ReturnType<typeof useDeleteDogMutation>;
export type DeleteDogMutationResult = Apollo.MutationResult<DeleteDogMutation>;
export type DeleteDogMutationOptions = Apollo.BaseMutationOptions<DeleteDogMutation, DeleteDogMutationVariables>;
export const FeedDocument = gql`
    mutation Feed($value: Int!, $doggoId: Int!) {
  feed(value: $value, doggoId: $doggoId)
}
    `;
export type FeedMutationFn = Apollo.MutationFunction<FeedMutation, FeedMutationVariables>;

/**
 * __useFeedMutation__
 *
 * To run a mutation, you first call `useFeedMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useFeedMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [feedMutation, { data, loading, error }] = useFeedMutation({
 *   variables: {
 *      value: // value for 'value'
 *      doggoId: // value for 'doggoId'
 *   },
 * });
 */
export function useFeedMutation(baseOptions?: Apollo.MutationHookOptions<FeedMutation, FeedMutationVariables>) {
        return Apollo.useMutation<FeedMutation, FeedMutationVariables>(FeedDocument, baseOptions);
      }
export type FeedMutationHookResult = ReturnType<typeof useFeedMutation>;
export type FeedMutationResult = Apollo.MutationResult<FeedMutation>;
export type FeedMutationOptions = Apollo.BaseMutationOptions<FeedMutation, FeedMutationVariables>;
export const ForgotPasswordDocument = gql`
    mutation ForgotPassword($email: String!) {
  forgotPassword(email: $email)
}
    `;
export type ForgotPasswordMutationFn = Apollo.MutationFunction<ForgotPasswordMutation, ForgotPasswordMutationVariables>;

/**
 * __useForgotPasswordMutation__
 *
 * To run a mutation, you first call `useForgotPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useForgotPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [forgotPasswordMutation, { data, loading, error }] = useForgotPasswordMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useForgotPasswordMutation(baseOptions?: Apollo.MutationHookOptions<ForgotPasswordMutation, ForgotPasswordMutationVariables>) {
        return Apollo.useMutation<ForgotPasswordMutation, ForgotPasswordMutationVariables>(ForgotPasswordDocument, baseOptions);
      }
export type ForgotPasswordMutationHookResult = ReturnType<typeof useForgotPasswordMutation>;
export type ForgotPasswordMutationResult = Apollo.MutationResult<ForgotPasswordMutation>;
export type ForgotPasswordMutationOptions = Apollo.BaseMutationOptions<ForgotPasswordMutation, ForgotPasswordMutationVariables>;
export const LoginDocument = gql`
    mutation Login($username: String!, $password: String!) {
  login(options: {username: $username, password: $password}) {
    ...RegularUserResponse
  }
}
    ${RegularUserResponseFragmentDoc}`;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      username: // value for 'username'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, baseOptions);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, baseOptions);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const RegisterDocument = gql`
    mutation Register($options: SignUpInput!) {
  register(options: $options) {
    ...RegularUserResponse
  }
}
    ${RegularUserResponseFragmentDoc}`;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      options: // value for 'options'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, baseOptions);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const UpdateDogDocument = gql`
    mutation UpdateDog($id: Int!, $story: String!, $name: String!) {
  updateDog(id: $id, story: $story, name: $name) {
    id
    name
    story
    textSnippet
  }
}
    `;
export type UpdateDogMutationFn = Apollo.MutationFunction<UpdateDogMutation, UpdateDogMutationVariables>;

/**
 * __useUpdateDogMutation__
 *
 * To run a mutation, you first call `useUpdateDogMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateDogMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateDogMutation, { data, loading, error }] = useUpdateDogMutation({
 *   variables: {
 *      id: // value for 'id'
 *      story: // value for 'story'
 *      name: // value for 'name'
 *   },
 * });
 */
export function useUpdateDogMutation(baseOptions?: Apollo.MutationHookOptions<UpdateDogMutation, UpdateDogMutationVariables>) {
        return Apollo.useMutation<UpdateDogMutation, UpdateDogMutationVariables>(UpdateDogDocument, baseOptions);
      }
export type UpdateDogMutationHookResult = ReturnType<typeof useUpdateDogMutation>;
export type UpdateDogMutationResult = Apollo.MutationResult<UpdateDogMutation>;
export type UpdateDogMutationOptions = Apollo.BaseMutationOptions<UpdateDogMutation, UpdateDogMutationVariables>;
export const DoggoDocument = gql`
    query Doggo($id: Int!) {
  dog(id: $id) {
    id
    name
    ownerId
    createdDate
    updatedDate
    textSnippet
    treats
    treatStatus
    story
    owner {
      id
      username
    }
  }
}
    `;

/**
 * __useDoggoQuery__
 *
 * To run a query within a React component, call `useDoggoQuery` and pass it any options that fit your needs.
 * When your component renders, `useDoggoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDoggoQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDoggoQuery(baseOptions: Apollo.QueryHookOptions<DoggoQuery, DoggoQueryVariables>) {
        return Apollo.useQuery<DoggoQuery, DoggoQueryVariables>(DoggoDocument, baseOptions);
      }
export function useDoggoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<DoggoQuery, DoggoQueryVariables>) {
          return Apollo.useLazyQuery<DoggoQuery, DoggoQueryVariables>(DoggoDocument, baseOptions);
        }
export type DoggoQueryHookResult = ReturnType<typeof useDoggoQuery>;
export type DoggoLazyQueryHookResult = ReturnType<typeof useDoggoLazyQuery>;
export type DoggoQueryResult = Apollo.QueryResult<DoggoQuery, DoggoQueryVariables>;
export const DoggosDocument = gql`
    query Doggos($limit: Int!, $cursor: String) {
  doggos(cursor: $cursor, limit: $limit) {
    hasMore
    doggos {
      ...DoggoSnippet
    }
  }
}
    ${DoggoSnippetFragmentDoc}`;

/**
 * __useDoggosQuery__
 *
 * To run a query within a React component, call `useDoggosQuery` and pass it any options that fit your needs.
 * When your component renders, `useDoggosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDoggosQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      cursor: // value for 'cursor'
 *   },
 * });
 */
export function useDoggosQuery(baseOptions: Apollo.QueryHookOptions<DoggosQuery, DoggosQueryVariables>) {
        return Apollo.useQuery<DoggosQuery, DoggosQueryVariables>(DoggosDocument, baseOptions);
      }
export function useDoggosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<DoggosQuery, DoggosQueryVariables>) {
          return Apollo.useLazyQuery<DoggosQuery, DoggosQueryVariables>(DoggosDocument, baseOptions);
        }
export type DoggosQueryHookResult = ReturnType<typeof useDoggosQuery>;
export type DoggosLazyQueryHookResult = ReturnType<typeof useDoggosLazyQuery>;
export type DoggosQueryResult = Apollo.QueryResult<DoggosQuery, DoggosQueryVariables>;
export const MeDocument = gql`
    query Me {
  me {
    ...BaseUserInfo
  }
}
    ${BaseUserInfoFragmentDoc}`;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;