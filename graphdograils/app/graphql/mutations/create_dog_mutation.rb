module Mutations    
    class CreateDogMutation < GraphQL::Schema::Mutation
        argument :options, Types::DoggoInput, required: true
        payload_type Types::DoggoType

        field :doggo, Types::DoggoType, null: true
        
        def resolve(options:)
            if context[:current_user]
                    Doggo.create(owner: context[:current_user], name: options[:name], story: options[:story])
            else
                raise ("Not Authenticated")
            end
        end
    end
end