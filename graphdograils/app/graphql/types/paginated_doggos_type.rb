module Types
  class PaginatedDoggosType < Types::BaseObject
    field :doggos, [Types::DoggoType], null: false
    field :has_more, Boolean, null: false
  end
end
