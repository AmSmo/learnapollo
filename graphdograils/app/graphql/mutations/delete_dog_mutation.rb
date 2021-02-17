module Mutations    
    class DeleteDogMutation < GraphQL::Schema::Mutation
        argument :id, Integer, required: true
        
        payload_type Boolean
        
        
        def resolve(id:)
            current_dog = Doggo.find_by(id: id)
            if current_dog
                current_dog.destroy
                return true
            else
                return false
            end
        end
    end
end