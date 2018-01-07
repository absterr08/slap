Rails.application.routes.draw do

  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show, :index]
    resource :session, only: [:create, :destroy, :show]
    resources :messages, only: [:create, :edit, :show, :index]
    resources :channels, only: [:create, :show, :index]
  end

  post 'api/create_guest_user', to: 'api/users#create_guest_user'
  get 'api/find_channel_by_name/:name', to: 'api/channels#find_channel_by_name', defaults: {format: :json}

  mount ActionCable.server => '/cable'

end
