json.extract! user, :id, :username, :email, :img_url
json.default_channel Channel.first.id
