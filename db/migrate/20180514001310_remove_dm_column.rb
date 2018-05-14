class RemoveDmColumn < ActiveRecord::Migration[5.1]
  def change
    remove_column :channels, :is_dm
    add_column :channels, :is_private, :boolean
  end
end
