class CreateFoods < ActiveRecord::Migration[6.1]
  def change
    create_table :foods do |t|
      t.string :name
      t.integer :days_until_expiration
      t.string :type
      t.string :signs_of_spoilage
      t.float :price
      t.text :description

      t.timestamps
    end
  end
end
