class CreateDoggos < ActiveRecord::Migration[6.1]
  def change
    create_table :doggos do |t|
      t.string :name
      t.string :story
      t.belongs_to :user, null: false, foreign_key: true
      t.integer :treats

      t.timestamps
    end
  end
end
