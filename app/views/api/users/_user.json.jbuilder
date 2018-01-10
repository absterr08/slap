json.user do
  json.extract! user, :id, :username, :email
end

json.channels do
  json.array! user.channels, :id
end
