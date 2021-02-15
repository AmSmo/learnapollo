module Types
    class SignUpInput < Types::BaseInputObject
        description "Attributes for Registering"
        argument :username, String, "Username", required: true
        argument :password, String, "Password", required: true
        argument :email, String, "Email", required: true
        
    end

end