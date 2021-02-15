module Types
  class QueryType < Types::BaseObject

    field :users, [Types::UserType], null: false,
      description: "Returns Users"
    def users
      User.all
    end

    field :doggos, Types::PaginatedDoggosType, null: false,
      description: "Returns Doggos" do 
        argument :limit, Integer, required: false
        argument :cursor, String, required: false
      end
    field :has_more, Boolean, null: false,
      description: "Any more"
    def doggos(limit: 10, cursor: nil)
     {doggos: Doggo.all.limit(limit), has_more: false}
    end

    field :me, String, null: false,
      description: "checked logged in"
    def me
      return "LALALALA, you have a lovely singing voice"
    end
  end
end
