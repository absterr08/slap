json.user do
  json.extract! user, :id, :username, :email, :img_url
end

json.defaultChannel do
  json.array! user.channels, :id
end
