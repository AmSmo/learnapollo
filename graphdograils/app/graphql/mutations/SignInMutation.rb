module Mutations    
    class SignInMutation < Mutations::BaseMutation
        argument :username, String, required: true
        argument :password, String, required: true

        field :token, String, null: true
        field :user, Types::UserType, null: true
        field :errors, Types::ErrorType, null: true
        def resolve(username:, password:)
            user = User.find_by!(username: username)
            puts "somewhere: #{user.username}"
            if user && user.authenticate(password)
                
                # token = Base64.encode64("Userid: #{user.id}")
                
                {user: user, errors: nil}
            else
                {errors: {message: "Incorrect Password"}, user: nil}
            end
        end
    end
end