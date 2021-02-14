class User < ApplicationRecord
    has_many :doggos
    has_many :morsels, dependent: :destroy
    has_secure_password
end
