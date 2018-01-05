class CreateChannels < ActiveRecord::Migration[5.1]
  def change
    create_table :channels do |t|
      t.string :name, null: false
      t.text :description
      t.boolean :is_dm, null: false, default: false

      t.timestamps
    end
    add_index :channels, :name
  end
end
