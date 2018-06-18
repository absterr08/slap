json.extract! user, :id, :username, :img_url
json.default_channel Channel.first.id
