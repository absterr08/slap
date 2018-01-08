class Api::ChannelsController < ApplicationController
  def index
    debugger
    @channels = current_user.channels
  end

  def show
    @channel = Channel.find(params[:id])
  end

  def create
    @channel = Channel.new(channel_params)
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
