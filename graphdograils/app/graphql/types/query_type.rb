module Types
  class QueryType < Types::BaseObject

    field :users, [Types::UserType], null: false,
      description: "Returns Users"
    def users
      User.all
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
