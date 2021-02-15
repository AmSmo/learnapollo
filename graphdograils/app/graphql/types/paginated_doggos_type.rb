module Types
  class PaginatedDoggosType < Types::BaseObject
    field :doggos, [Types::DoggoSnippetType], null: false
    field :has_more, Boolean, null: false
  end
end
