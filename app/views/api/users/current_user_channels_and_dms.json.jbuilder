json.channels do
  @channels.each do |channel|
    json.set! channel.id do
      json.partial! 'api/channels/channel', channel: channel
    end
  end
end

json.dms do
  @dms.each do |dm|
    json.set! dm.id do
      json.partial! 'api/dms/dm', dm: dm
    end
  end
end
