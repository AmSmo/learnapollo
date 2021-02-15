module Mutations    
    class RegisterMutation < GraphQL::Schema::Mutation
        argument :options, Types::SignUpInput, required: true
        payload_type Types::UserResponseType
        
        field :token, String, null: true
        field :user, Types::UserType, null: true
        field :errors, [Types::FieldErrorType], null: true
        
        def resolve(options:)
            
            errors = validate_register(options)
            return errors if errors
            user = User.create(username: options[:username], password: options[:password], email: options[:email])
            if user
                
                token = Base64.encode64("Userid: #{user.id}")
                context[:session][:token] = token
                
                {user: user}
            else
                {errors: errors}
            end
        end

        def validate_register(options)
            if options.username.length <= 3
                return {errors: [field: "username", message: "Username must be 3 or more characters"]}
            elsif options.password.length <= 3
                return {errors: [field: "password", message: "password must be 3 or more characters"]}
            elsif !options.email.match( /\w+[@]\w+\.\w+/)
                return {errors: [field: "email", message: "Email is Invalid"]}
            else
                return nil
            end
        end
        
    end
end