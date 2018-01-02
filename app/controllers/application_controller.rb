class ApplicationController < ActionController::Base
  # protect_from_forgery with: :exception

  helper_method :current_user, :logged_in?

  def current_user
    @current_user ||= User.find_by_session_token(session[:session_token])
  end

  def login(user)
    @current_user = user
    session[:session_token] = current_user.session_token
  end

  def logged_in?
    !!current_user
  end

  def logout!
    current_user.try(:reset_session_token)
    @current_user = nil
    session[:session_token] = nil
  end

  def require_login!
    redirect_to root_url unless logged_in?
  end

end
