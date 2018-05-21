class DmSubscription < ApplicationRecord
  belongs_to :user
  belongs_to :dm

  def self.active_user_subscriptions(user_id)
    self.where(user_id: user_id).where(active: true).includes(:dm)
  end

  def deactivate!
    self.active = false
    self.save!
  end

  def activate!
    self.active = true
    self.save!
  end
end
