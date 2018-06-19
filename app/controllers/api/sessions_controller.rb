class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_params(
      params[:user][:username],
      params[:user][:password])
    if @user
      login(@user)
      render partial: 'api/users/user', locals: { user: @user }
    else
      render json: 'Incorrect username or password', status: 401
    end
  end

  def show
  end

  def destroy
    if current_user
      logout!
      render json: {}
    else
      #a better error message
      render json: '404 :(', status: 404
    end
  end

end
