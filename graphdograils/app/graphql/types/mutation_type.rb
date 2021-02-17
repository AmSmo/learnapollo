module Types
  class MutationType < Types::BaseObject
    field :login, mutation: Mutations::LoginMutation
    field :register, mutation: Mutations::RegisterMutation
    field :create_dog, mutation: Mutations::CreateDogMutation
    field :logout, mutation: Mutations::LogoutMutation
    field :feed, mutation: Mutations::FeedMutation
    field :update_dog, mutation: Mutations::UpdateDogMutation
    field :delete_dog, mutation: Mutations::DeleteDogMutation
  end
end
