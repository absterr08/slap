
json.extract! channel, :id, :name, :description, :is_dm

json.users do
  json.array! channel.users.map {|user| user.id}
end

json.messages do
  json.array! channel.messages.map {|message| message.id}
end
