class CreateColumnValueMorsel < ActiveRecord::Migration[6.1]
  def change
    add_column :morsels, :value, :integer
    
  end
end
