class CreateUserFoods < ActiveRecord::Migration[6.1]
  def change
    create_table :user_foods do |t|
      t.integer :user_id
      t.integer :food_id
      t.float :user_price
      t.integer :user_days_until_expiration
      t.integer :quantity
      t.string :notes

      t.timestamps
    end
  end
end
