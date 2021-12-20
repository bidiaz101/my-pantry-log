class AddLastLoginToUsers < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :last_login, :date
  end
end
