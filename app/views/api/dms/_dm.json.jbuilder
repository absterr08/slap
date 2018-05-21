json.id dm.id
json.is_dm true

json.users do
  json.array! dm.users.ids
end

json.messages do
  json.array! dm.messages.ids
end
