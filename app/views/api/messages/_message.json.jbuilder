json.extract! message, :id, :body, :author_id, :channel_id, :created_at
json.author do
  json.username message.user.username
end
