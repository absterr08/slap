json.id dm.id

json.users do
  json.array! dm.users.ids
end

json.messages do
  json.array! dm.messges.ids
end
