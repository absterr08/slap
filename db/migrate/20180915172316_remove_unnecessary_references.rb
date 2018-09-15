class RemoveUnnecessaryReferences < ActiveRecord::Migration[5.1]
  def change
    remove_column :dms, :messageable_type
    remove_column :dms, :messageable_id
    remove_column :channels, :messageable_type
    remove_column :channels, :messageable_id
  end
end
