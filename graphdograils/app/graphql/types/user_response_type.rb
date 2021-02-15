module Types
    class UserResponseType < Types::BaseObject
        field :user, Types::UserType, null: true
        field :errors, [Types::FieldErrorType], null: true
    end
end