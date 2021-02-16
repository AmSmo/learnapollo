class CreateMorsels < ActiveRecord::Migration[6.1]
  def change
    create_table :morsels do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :doggo, null: false, foreign_key: true

      t.timestamps
    end
  end
end