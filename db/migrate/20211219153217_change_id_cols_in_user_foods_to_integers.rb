class ChangeIdColsInUserFoodsToIntegers < ActiveRecord::Migration[6.1]
  def change
    change_column :user_foods, :user_id, :integer
    change_column :user_foods, :food_id, :integer
  end
end
