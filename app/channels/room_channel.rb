  # Be sure to restart your server when you modify this file. Action Cable runs in an EventMachine loop that does not support auto reloading.
class RoomChannel < ApplicationCable::Channel
  def subscribed
    stream_from "room_channel:#{params[:room]}"
  end

  # def unsubscribed
  #   # Any cleanup needed when channel is unsubscribed
  # end

  def speak(data)
    Message.create(body: data['message']['body'], author_id: data['message']['author_id'], messageable_id: data['message']['messageable_id'], messageable_type: data['message']['messageable_type']);
  end
end
