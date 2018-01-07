json.extract! @channel, :name, :description, :is_dm

json.messages do
  json.array! @channel.messages, partial: 'api/messages/message', as: :message
end
