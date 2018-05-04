class Api::ChannelsController < ApplicationController
  def index
    # @channels = Channel.where(is_dm: false)
    # # maybe add a private_channel column?
    # @privateChannels = current_user.channels
    # @dms = current_user.channels.where(is_dm: true)
    @channels = current_user.channels
  end

  def show
    @channel = Channel.find(params[:id]).includes(:users, :messages)
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
    user_ids = params[:channel][:users].map(&:to_i)
    @channel = Channel.new
    @channel.is_dm = true
    @channel.name = "room#{Channel.last.id + 1}"
    if @channel.save
      @channel.user_ids = user_ids
      render :show
    else
      render json: @channel.errors.full_messages.join(', ')
    end
  end

  def create_dm
    user_ids = params[:channel][:users].map(&:to_i)
    @channel = Channel.group_chat_exists?(user_ids)
    if @channel
      ChannelSubscription.create(user_id: current_user.id, channel_id: @channel.id)
    else
      @channel = Channel.new(is_dm: true, name: "room#{Channel.last.id + 1}")
      unless @channel.save
        render json: @channel.errors.full_messages.join(', ')
        return
      end
      @channel.user_ids = user_ids
    end
    render :show
  end

  def destroy
    @channel = Channel.find(params[:id])
    if @channel.is_dm?
      ChannelSubscription.find_by(user_id: current_user.id, channel_id: params[:id]).destroy
    elsif current_user.is_admin?
       @channel.destroy
    else
      render json: "channel does not exist!"
      return
    end
    render :show
  end

  def channel_params
    params.require(:channel).permit(:name, :description, :is_dm, :users)
  end
end
