class Channel < ApplicationRecord

  validates :name, presence: true

  has_many :messages
  has_many :channel_subscriptions
  has_many :users,
   through: :channel_subscriptions

   def self.group_chat_exists?(user_ids)
     #optimize?
     Channel.where(is_dm: true).find do
       |channel| channel.user_ids.sort == user_ids.sort
     end
   end

end
