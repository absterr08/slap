class DmSubscription < ApplicationRecord
  belongs_to :user
  belongs_to :dm

  def deactivate!
    self.active = false
    self.save!
  end
end
