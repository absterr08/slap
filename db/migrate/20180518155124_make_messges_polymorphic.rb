class MakeMessgesPolymorphic < ActiveRecord::Migration[5.1]
  def change
    rename_column(:messages, :channel_id, :messageable_id)
    add_column(:messages, :messageable_type, :string)
  end
end
