class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    @user.channels = Channel.all
    if @user.save
      login(@user)
      render :show
    else
      render json: @user.errors.full_messages.join(", "), status: 401
    end
  end

  def create_guest_user
    @user = User.create_guest
    @user.channels = Channel.all
    login(@user)
    render :show
  end

  def index
    @users = User.all
  end

  def show
    @user = User.find(params[:id])
  end

  def user_params
    params.require(:user).permit(:username, :email, :password)
  end

end
