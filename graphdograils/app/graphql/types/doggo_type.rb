module Types
  class DoggoType < Types::BaseObject
    field :id, ID, null: false
    field :name, String, null: false
    field :story, String, null: false
    field :user_id, Integer, null: false
    field :treats, Integer, null: true
    field :created_date, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_date, GraphQL::Types::ISO8601DateTime, null: false
    field :owner, Types::UserType, null: false
    field :treats, Integer, null: true
    field :owner_id, Integer, null: true
    field :treat_status, Boolean, null: true
    field :text_snippet, String, null: false
  end
end
