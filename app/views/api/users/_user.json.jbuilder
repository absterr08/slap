json.user do
  json.extract! user, :id, :username, :email
  json.imgUrl asset_path('slap-logo.png')
end

json.channels do
  json.array! user.channels, :id
end
