json.extract! message, :id, :body, :author_id, :channel_id, :created_at
json.author do
  json.username message.user.username
  json.img_url message.user.img_url
  json.avatar_url message.user.avatar.url
end
