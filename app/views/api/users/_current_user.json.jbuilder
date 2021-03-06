json.user do
  json.extract! user, :id, :username, :email, :img_url
end

json.channels do
  json.array! user.channels.map { |channel| channel.id }
end

json.defaultChannel Channel.first.id
