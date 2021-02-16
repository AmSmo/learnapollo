module Types
    class DoggoInput < Types::BaseInputObject
        description "Attributes for creating a dog"
        argument :name, String, "Name", required: true
        argument :story, String, "Story", required: false
    end

end