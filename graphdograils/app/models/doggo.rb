class Doggo < ApplicationRecord
  belongs_to :owner, class_name: "User", foreign_key: :user_id
  has_many :morsels, dependent: :destroy

  def created_date
    self.created_at
  end
  def updated_date
    self.updated_at
  end

  def owner_id
    self.user_id
  end
end
