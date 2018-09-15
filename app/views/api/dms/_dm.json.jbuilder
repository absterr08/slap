json.id dm.id
json.channelType 'Dm'

json.users do
  json.array! dm.users.ids
end

json.messages do
  json.array! dm.messages.ids
end
