module Types
  class QueryType < Types::BaseObject

    field :users, [Types::UserType], null: false,
      description: "Returns Users"
    def users
      User.all.includes(:morsels)
    end

    field :doggos, Types::PaginatedDoggosType, null: false,
      description: "Returns Doggos" do 
        argument :limit, Integer, required: false
        argument :cursor, String, required: false
      end
    field :has_more, Boolean, null: false,
      description: "Any more"
    def doggos(limit: 10, cursor: nil)
      realLimit = [50,limit].min
      realLimitPlusOne = realLimit + 1
      if cursor
        
        last_date = cursor
        doggos = Doggo.includes(:morsels).includes(:owner).where("created_at > ?", cursor.to_datetime ).order(:created_at).limit(realLimitPlusOne)
        return {doggos: doggos.slice(0, realLimit), has_more: doggos.length == realLimitPlusOne}
      else
        doggos = Doggo.includes(:morsels).includes(:owner).order(:created_at).limit(realLimitPlusOne)
        return {doggos: doggos.slice(0, realLimit) , has_more: doggos.length == realLimitPlusOne}
      end
    end

    field :doggo, Types::DoggoType, null: true,
      description: "Returns Doggo" do 
        argument :id, Integer, required: false
      end
    def doggo(id:)
     dog = Doggo.find_by(id: id)
     if dog
      dog
     else
      nil
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
