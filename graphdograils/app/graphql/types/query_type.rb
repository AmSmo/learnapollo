module Types
  class QueryType < Types::BaseObject
    # Add `node(id: ID!) and `nodes(ids: [ID!]!)`
    include GraphQL::Types::Relay::HasNodeField
    include GraphQL::Types::Relay::HasNodesField

    field :users, [Types::UserType], null: false,
      description: "Returns Users"
    def users
      User.all˝
    end

    field :doggos, [Types::DoggoType], null: false,
      description: "Returns Doggos"
    def doggos
      Doggo.all
    end

    field :me, String, null: false,
      description: "checked logged in"
    def me
      
      return "LALALALA, you have a lovely singing voice"
    end
  end
end
