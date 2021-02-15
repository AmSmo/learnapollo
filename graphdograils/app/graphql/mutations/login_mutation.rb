module Mutations    
    class LoginMutation < GraphQL::Schema::Mutation
        argument :options, Types::LoginAttributes, required: true
        payload_type Types::UserResponseType
        
        field :token, String, null: true
        field :user, Types::UserType, null: true
        field :errors, [Types::FieldErrorType], null: true
        
        def resolve(options:)
            
            user = User.find_by(username: options[:username])
            if user 
                if user.authenticate(options[:password])
                    token = Base64.encode64("Userid: #{user.id}")
                    context[:session][:token] = token
                    
                    {user: user}
                else
                    {errors: [{field: "password", message: "check, no such match found"}]}
                end
            else
                {errors: [{field: "username", message: "didn't find a match"}]}
            end
        end
    end
end