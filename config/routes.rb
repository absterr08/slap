Rails.application.routes.draw do

  namespace :api do
    get 'messages/index'
  end

  root to: 'static_pages#root'


  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy, :show]
    resources :messages, only: [:create, :edit, :show, :index]
  end


  mount ActionCable.server => '/cable'

end
