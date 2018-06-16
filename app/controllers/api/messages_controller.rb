class Api::MessagesController < ApplicationController
  def index
    if channel_id = params[:channel_id]
      @messages = Channel.find(channel_id).messages.includes(:user)
    elsif dm_id = params[:dm_id]
      @messages = Dm.find(dm_id).messages.includes(:user)
    else
      @messages = Message.all.includes(:user)
    end
  end

  def show
    @message = Message.find(params[:id]).includes(:user)
  end

  def create
    message = Message.new(message_params)
    if message.save
      render :index
    else
      render json: 'please enter a valid message'
    end
  end

  def update
    message = Message.find(params[:id])
    if message && message.save
      render :index
    else
      render json: 'please enter a valid message'
    end
  end

  def message_params
    params.require(:message).permit(:body, :author_id, :messageable_id, :parent_message_id)
  end
end
