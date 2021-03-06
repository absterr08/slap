class Message < ApplicationRecord

  validates :body, presence: true

  belongs_to :user,
    foreign_key: "author_id"
  belongs_to :messageable, polymorphic: true

    after_create_commit { MessageBroadcastJob.perform_later self }
end
