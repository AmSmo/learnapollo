module Types
  class MutationType < Types::BaseObject
    field :login, mutation: Mutations::LoginMutation
    field :register, mutation: Mutations::RegisterMutation
    field :create_dog, mutation: Mutations::CreateDogMutation
  end
end
