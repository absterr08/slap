json.user do
  json.extract! user, :id, :username, :email, :img_url
end

json.default_channel Channel.first.id
