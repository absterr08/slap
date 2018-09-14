class Api::ChannelsController < ApplicationController
  def index
    @channels = current_user.channels
  end

  def search
    @channels = Channel.search(params[:query])
    render :index
  end

  def show
    @channel = Channel.find(params[:id]).includes(:users, :messages)
  end

  def create
    @channel = Channel.new(channel_params)
    @channel.users = [current_user]
    if @channel.save
      render :show
    else
      render json: @channel.errors.full_messages.join(', ')
    end
  end

  def destroy
    @channel = Channel.find(params[:id])
    if @channel
      if current_user.is_admin?
        @channel.destroy
        render :show
      else
        render json: "can't do dat", status: 501 # unauthorized?
      end
    else
      render json: "channel does not exist!", status: 404
    end
  end

  private
  def channel_params
    params.require(:channel).permit(:name, :description, :users)
  end
end
