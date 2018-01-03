class Message < ApplicationRecord

  validates :body, presence: true

  belongs_to :user,
    foreign_key: "author_id"
end
