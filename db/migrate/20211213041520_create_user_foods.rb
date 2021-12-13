class CreateUserFoods < ActiveRecord::Migration[6.1]
  def change
    create_table :user_foods do |t|
      t.string :user_id
      t.string :food_id
      t.float :user_price
      t.integer :user_days_until_expiration

      t.timestamps
    end
  end
end
