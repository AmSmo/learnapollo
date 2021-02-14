class Doggo < ApplicationRecord
  belongs_to :owner, class_name: "User", foreign_key: :user_id
  has_many :morsels, dependent: :destroy
end
