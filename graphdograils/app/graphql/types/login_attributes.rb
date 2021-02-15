module Types
    class LoginAttributes < Types::BaseInputObject
        description "Attributes for logging in"
        argument :username, String, "Username", required: true
        argument :password, String, "Password", required: true
    
    end

end