@channels.each do |channel|
  json.set! 'channels' do
    json.set! channel.id do
      # json.extract! channel, :id, :name
      channel.users.each do |user|
        , :id, :username
    end
  end
end
@privateChannels.each do |channel|
  json.set! 'privateChannels' do
    json.set! channel.id do
      # json.extract! channel, :id, :name
      json.array! channel.users, :id, :username
    end
  end
end
@dms.each do |dm|
  json.set! 'dms' do
    json.set! dm.id do
      # json.extract! dm, :id, :name
      json.array! dm.users, :id, :username
    end
  end
end
