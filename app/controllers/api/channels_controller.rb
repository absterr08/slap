class Api::ChannelsController < ApplicationController
  def index
    @channels = Channel.where(is_dm: false)
    # maybe add a private_channel column?
    @privateChannels = current_user.channels
    @dms = Channel.where(is_dm:true)
    # @channels = current_user.channels
  end

  def show
    @channel = Channel.find(params[:id])
  end

  def create
    debugger
    @channel = Channel.new(channel_params)
    @channel.users = User.all
    if @channel.save
      render :show
    else
      render json: @channel.errors.full_messages.join(', ')
    end
  end

  def channel_params
    params.require(:channel).permit(:name, :description, :is_dm)
  end
end
