class AddColumnToUsers < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :money_saved, :float
  end
end
