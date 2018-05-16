json.extract! user, :id, :username, :email
json.avatar_url user.avatar.url
json.default_channel Channel.first.id
