@channels.each do |channel|
  json.set! channel.id do
    json.extract! channel, :name, :is_dm
  end
end
