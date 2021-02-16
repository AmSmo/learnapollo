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
     return {doggos: Doggo.all.limit(limit), has_more: false}
    end

    field :dog, Types::DoggoType, null: true,
      description: "Returns Doggo" do 
        argument :id, Integer, required: false
      end
    def dog(id:)
     dog = Doggo.find_by(id: id)
     if dog
      {doggo: dog}
     else
      {doggo: nil}
     end
    end

    field :me, Types::UserType, null: true, 
      description: "checked logged in"
    def me
      if context[:current_user]
        context[:current_user]
      else
        nil
      end
    end

  end
end
