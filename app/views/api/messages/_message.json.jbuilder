json.extract! message, :id, :body, :author_id, :messageable_id, :messageable_type, :created_at
json.author do
  json.username message.user.username
  json.img_url message.user.img_url
end
