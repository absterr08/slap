class Api::ChannelsController < ApplicationController
  def index
    @channels = Channel.all
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

  def find_channel_by_name
    @channel = Channel.find_by_name(params[:name])
    render :show
  end

  def channel_params
    params.require(:channel).permit(:name, :description, :is_dm)
  end
end
