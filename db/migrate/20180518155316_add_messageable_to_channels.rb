class AddMessageableToChannels < ActiveRecord::Migration[5.1]
  def change
    add_reference :channels, :messageable, polymorphic: true
    add_reference :dms, :messageable, polymorphic: true
  end
end
