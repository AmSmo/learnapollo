module Types
  class MutationType < Types::BaseObject
    field :login, mutation: Mutations::LoginMutation
    field :register, mutation: Mutations::RegisterMutation
  end
end
