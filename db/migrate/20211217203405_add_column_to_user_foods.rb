class AddColumnToUserFoods < ActiveRecord::Migration[6.1]
  def change
    add_column :user_foods, :unit, :string
  end
end
