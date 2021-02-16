class ChangeDoggoTreatTableZero < ActiveRecord::Migration[6.1]
  def change
    change_column :doggos, :treats, :integer, default: 0
  end
end
