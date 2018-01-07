  # Be sure to restart your server when you modify this file. Action Cable runs in an EventMachine loop that does not support auto reloading.
class RoomChannel < ApplicationCable::Channel
  def subscribed
    stream_from "room_channel"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  def speak(data)
    Message.create body: data['message']['body'], author_id: data['message']['author_id'], channel_id: 1 #channel_id: data['message']['channel_id']
  end
end
