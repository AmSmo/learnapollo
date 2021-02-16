module Mutations    
    class FeedMutation < GraphQL::Schema::Mutation
        argument :doggoId, Integer, required: true
        argument :value, Integer, required: true
        
        payload_type Boolean

        def resolve(value:, doggoId:)
            
            is_treat = value != -1
            real_value = is_treat ? 1 : -1
            current_user = context[:current_user]
            doggo = Doggo.find_by(id: doggoId)
            already_fed = Morsel.find_by(user: current_user, doggo: doggo)
            if already_fed && already_fed.value != real_value
                Morsel.update(value: real_value)
                new_treat_value = doggo.treats + (real_value *2)
                doggo.update(treats: new_treat_value)
                return true
            elsif already_fed
                return true
            else
                Morsel.create(user: current_user, doggo: doggo, value: real_value)
                doggo.update(treats: doggo.treats + real_value)
                return true
            end
            return true
        end
    end
end