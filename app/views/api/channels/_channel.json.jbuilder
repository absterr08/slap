json.channel do
  json.extract! channel, :id, :name, :description, :is_dm
end


json.users do
  json.array! channel.users.map {|user| user.id}
end

json.usernames do
  json.array! channel.users.map {|user| user.username}
end

json.messages do
  json.array! channel.messages.map {|message| message.id}
end
