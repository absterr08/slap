class Channel < ApplicationRecord
  validates :name, presence: true

  has_many :messages, as: :messageable
  # has_and_belongs_to_many :users
  has_many :channel_subscriptions
  has_many :users,
    through: :channel_subscriptions


  # define this in ApplicationRecord!
  def self.search(query)
    generalized_string = "#{query}%"
    Channel.where("name like ?", generalized_string)
  end
end
