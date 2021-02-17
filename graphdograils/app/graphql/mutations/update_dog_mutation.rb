module Mutations    
    class UpdateDogMutation < GraphQL::Schema::Mutation
        argument :id, Integer, required: true
        argument :name, String, required: true
        argument :story, String, required: true
        

        
       payload_type Types::DoggoType
        def resolve(id:, name:, story:)
            current_dog = Doggo.find_by(id: id)
            
            if current_dog
                current_dog.update(name: name, story: story)
            else
                return nil
            end
        end
    end
end