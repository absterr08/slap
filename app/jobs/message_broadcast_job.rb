class MessageBroadcastJob < ApplicationJob
  queue_as :default

  def perform(message)
    ActionCable.server.broadcast "room_channel:#{message[:messageable_id]}", message: render_message(message)
  end

  private
    def render_message(message)
      # R5: being able to render partials outside of scope of controller
      ApplicationController.renderer.render(partial: 'api/messages/message', locals: { message: message })
    end
end
