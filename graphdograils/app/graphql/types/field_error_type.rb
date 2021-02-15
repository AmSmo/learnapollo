module Types
  class FieldErrorType < Types::BaseObject
    field :field, String, null: true
    field :message, String, null: true
  end
end
