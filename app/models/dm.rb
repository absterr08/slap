class Dm < ApplicationRecord
  validates :name, presence: true
  validates :identifier, presence: true, uniqueness: true

  # has_many :messages
  # has_and_belongs_to_many :users
  has_many :dm_subscriptions
  has_many :users,
    through: :dm_subscriptions

  has_many :messages, as: :messageable


  # before_save :set_identifier
  after_initialize :set_identifier
  after_initialize :set_name

  def self.deactivate!(dm_id, user_id)
    dm_subscription = find(dm_id).where(user_id: user_id)
    dm_subscription.deactivate!
  end

  def set_identifier
    # i really want this to specifically happen before save, but that callback doesnt actually happen before the intial before_save
    # it's unintuitive to have access to self.uesrs.ids after initialize
    ids = users.map(&:id).sort
    self.identifier = ids.map(&:to_s).join(", ")
  end

  def set_name
    self.name ||= "dm#{Dm.count + 1}"
  end
end
