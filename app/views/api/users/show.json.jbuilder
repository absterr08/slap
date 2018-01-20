# json.partial! 'api/users/user', user: @user
json.extract! @user, :id, :username, :email, :img_url


json.channels do
  json.array! @user.channels.map { |channel| channel.id }
end

json.defaultChannel Channel.first
