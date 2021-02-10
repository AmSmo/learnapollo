import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
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

export function useChangePasswordMutation() {
  return Urql.useMutation<ChangePasswordMutation, ChangePasswordMutationVariables>(ChangePasswordDocument);
};
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

export function useCreateDogMutation() {
  return Urql.useMutation<CreateDogMutation, CreateDogMutationVariables>(CreateDogDocument);
};
export const DeleteDogDocument = gql`
    mutation DeleteDog($id: Int!) {
  deleteDog(id: $id)
}
    `;

export function useDeleteDogMutation() {
  return Urql.useMutation<DeleteDogMutation, DeleteDogMutationVariables>(DeleteDogDocument);
};
export const FeedDocument = gql`
    mutation Feed($value: Int!, $doggoId: Int!) {
  feed(value: $value, doggoId: $doggoId)
}
    `;

export function useFeedMutation() {
  return Urql.useMutation<FeedMutation, FeedMutationVariables>(FeedDocument);
};
export const ForgotPasswordDocument = gql`
    mutation ForgotPassword($email: String!) {
  forgotPassword(email: $email)
}
    `;

export function useForgotPasswordMutation() {
  return Urql.useMutation<ForgotPasswordMutation, ForgotPasswordMutationVariables>(ForgotPasswordDocument);
};
export const LoginDocument = gql`
    mutation Login($username: String!, $password: String!) {
  login(options: {username: $username, password: $password}) {
    ...RegularUserResponse
  }
}
    ${RegularUserResponseFragmentDoc}`;

export function useLoginMutation() {
  return Urql.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument);
};
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;

export function useLogoutMutation() {
  return Urql.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument);
};
export const RegisterDocument = gql`
    mutation Register($options: SignUpInput!) {
  register(options: $options) {
    ...RegularUserResponse
  }
}
    ${RegularUserResponseFragmentDoc}`;

export function useRegisterMutation() {
  return Urql.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument);
};
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

export function useDoggoQuery(options: Omit<Urql.UseQueryArgs<DoggoQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<DoggoQuery>({ query: DoggoDocument, ...options });
};
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

export function useDoggosQuery(options: Omit<Urql.UseQueryArgs<DoggosQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<DoggosQuery>({ query: DoggosDocument, ...options });
};
export const MeDocument = gql`
    query Me {
  me {
    ...BaseUserInfo
  }
}
    ${BaseUserInfoFragmentDoc}`;

export function useMeQuery(options: Omit<Urql.UseQueryArgs<MeQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<MeQuery>({ query: MeDocument, ...options });
};