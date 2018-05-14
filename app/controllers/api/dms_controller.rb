class Api::DmsController < ApplicationController
  def index
    @dms = current_user.channels
  end

  def show
    # @dm = Dm.find(params[:id]).includes(:users, :messages)
    @dm = Dm.find(params[:id])
  end

  def create
    debugger
    @dm = Dm.new
    if @dm.save
      render :show
    else
      render json: @dm.errors.full_messages.join(', '), status: 422
    end
  end

  def destroy
    DmSubscription.deactivate!(params[:id], current_user.id)
  end

  def dm_params
    params.require(:dm).permit(:name, :users)
  end
end
