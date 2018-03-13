json.extract! channel, :id, :name, :description, :is_dm

json.users do
  json.array! channel.users.ids
end

json.messages do
  json.array! channel.messages.ids
end
