class CreateDms < ActiveRecord::Migration[5.1]
  def change
    create_table :dms do |t|
      t.string :name, null: false
      t.string :identifier, null: false
      t.timestamps
    end
    add_index(:dms, :identifier)
  end
end
