json.extract! channel, :id, :name, :description
json.defaultChannel Channel.first.id

json.users do
  json.array! channel.users.ids
end

json.messages do
  json.array! channel.messages.ids
end
