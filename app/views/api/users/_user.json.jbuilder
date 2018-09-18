json.extract! user, :id, :username, :img_url
json.defaultChannel user.channels.first.id
