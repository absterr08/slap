json.user do
  json.extract! user, :id, :username, :email
  json.imgUrl "3"
end

json.channels do
  json.array! user.channels, :id
end
