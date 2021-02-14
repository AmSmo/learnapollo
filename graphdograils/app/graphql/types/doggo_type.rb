module Types
  class DoggoType < Types::BaseObject
    field :id, ID, null: false
    field :name, String, null: false
    field :story, String, null: false
    field :user_id, Integer, null: false
    field :treats, Integer, null: true
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
    field :owner, Types::UserType, null: false
  end
end
