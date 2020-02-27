class Api::DmsController < ApplicationController
  def index
    @dms = current_user.channels
  end

  def show
    # @dm = Dm.find(params[:id]).includes(:users, :messages)
    @dm = Dm.find(params[:id])
  end

  def create
    # todo: find_by first?
    # debugger
    @dm = Dm.new(user_ids: params[:dm][:users].map(&:to_i))
    if @dm.save
      render :show
    elsif @dm = Dm.find_by(identifier: @dm.identifier)
      @dm.activate!(current_user.id)
      render :show
    else
      render json: @dm.errors.full_messages.join(', '), status: 422
    end
  end

  def destroy
    Dm.deactivate!(params[:id], current_user.id)
    render json: {defaultChannel: current_user.channels.first.id}, status: 200
  end

  def dm_params
    params.require(:dm).permit(:name, :users)
  end
end
