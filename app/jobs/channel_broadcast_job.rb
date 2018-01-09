class ChannelBroadcastJob < ApplicationJob
  queue_as :default

  def perform(channel)
    # if user is part of the channel
    ActionCable.server.broadcast 'room_channel', channel: render_channel(channel)
  end

  private
    def render_channel(channel)
      # R5: being able to render partials outside of scope of controller
      ApplicationController.renderer.render(partial: 'api/channels/channel', locals: { channel: channel })
    end
end
