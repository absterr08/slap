class Api::UsersController < ApplicationController

  def create
    debugger
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render :show
    else
      render json: @user.errors.full_messages
    end
  end

  def show
    @user = current_user
  end

  def user_params
    params.require(:user).permit(:username, :email, :password)
  end

end
