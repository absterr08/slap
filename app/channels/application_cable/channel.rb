module ApplicationCable
  class Channel < ActionCable::Channel::Base
    # responsibilities similar to controller
    # can have multiple channels inheriting from ActionCable::Channel


    # users subscribe to a channel, and their messages are routed to these channel subscriptions based on an identified sent by cable consumer
    def subscribed

    end
  end
end
