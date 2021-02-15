module Types
  class DoggoSnippetType < Types::BaseObject
    field :id, ID, null: false
    field :name, String, null: false
    field :story, String, null: false
    field :owner_id, Integer, null: false
    field :treats, Integer, null: true
    field :created_date, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_date, GraphQL::Types::ISO8601DateTime, null: false
    field :owner, Types::UserType, null: false
  end
  
end
