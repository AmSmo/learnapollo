module Types
  class DoggoType < Types::BaseObject
    field :id, Integer, null: false
    field :name, String, null: false
    field :story, String, null: false
    field :user_id, Integer, null: false
    field :treat_sctatus, Integer, null: true
    field :created_date, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_date, GraphQL::Types::ISO8601DateTime, null: false
    field :owner, Types::UserType, null: false
    field :treats, Integer, null: true
    field :owner_id, Integer, null: true
    field :text_snippet, String, null: false

    def treat_status
      status = Morsel.find_by(doggo_id: object.id, user: context[:current_user])
      if status
        puts ("#{status.doggo.name}, #{status.value}")
        return status.value
      else
        return nil
      end
    end
  end

end

