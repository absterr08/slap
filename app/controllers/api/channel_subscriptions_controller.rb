class Api::ChannelSubscriptionsController < ApplicationController

  def destroy
    channel_sub = current_user.channel_subscriptions.find_by(channel_id:  params[:id])
    channel_sub.destroy
  end

  def create
    ChannelSubscription.create(user_id: current_user.id, channel_id: params[:channel_id])
  end

end
