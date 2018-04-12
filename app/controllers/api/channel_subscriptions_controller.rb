class ChannelSubscriptionsController < ApplicationController

  def delete
    channel_sub = current_user.channel_subscriptions.find(params[:channel_id])
    channel_sub.destroy
  end

  def create
    ChannelSubscription.create(user_id: current_user.id, channel_id: channel.id)
  end

end
