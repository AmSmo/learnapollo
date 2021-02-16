module Mutations    
    class LogoutMutation < GraphQL::Schema::Mutation
        
        payload_type Boolean
        
        def resolve
            
            context[:session] = {}
            context[:current_user] = nil
            if 
                true
            else
                false
            end

        end
    end
end