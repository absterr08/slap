(Message.limit(20).order("created_at DESC").load.reverse).each do |message|
  json.set! message.id do
    json.partial! 'message', message: message
  end
end
