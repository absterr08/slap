class Api::ChannelsController < ApplicationController
  def index
    # @channels = Channel.where(is_dm: false)
    # # maybe add a private_channel column?
    # @privateChannels = current_user.channels
    # @dms = current_user.channels.where(is_dm: true)
    @channels = current_user.channels
  end

  def show
    @channel = Channel.find(params[:id])
  end

  def create
    if params[:channel][:is_dm] === "true"
      create_dm
      return
    end
    @channel = Channel.new(channel_params)
    @channel.users = User.all
    if @channel.save
      render :show
    else
      render json: @channel.errors.full_messages.join(', ')
    end
  end

  def create_dm
    userIds = params[:channel][:users].map {|id| id.to_i}
    @channel = Channel.new
    @channel.is_dm = true
    @channel.name = "room#{Channel.last.id + 1}"
    if @channel.save
      userIds.each do |id|
        ChannelSubscription.create(user_id: id, channel_id: @channel.id)
      end
      render :show
    else
      render json: @channel.errors.full_messages.join(', ')
    end
  end

  def channel_params
    params.require(:channel).permit(:name, :description, :is_dm, :users)
  end
end
