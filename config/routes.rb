Rails.application.routes.draw do

  root to: 'static_pages#root'

  get 'api/users/search', to: 'api/users#search', defaults: { format: :json }
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show, :index]
    resource :session, only: [:create, :destroy, :show]
    resources :messages, only: [:create, :edit, :show, :index]
    resources :channels, only: [:create, :show, :index, :destroy]
    # resources :users, only: [] do
    #   member do :search // :(
    #   end
    # end
  end
  #
  post 'api/create_guest_user', to: 'api/users#create_guest_user', defaults: { format: :json }
  get 'api/find_channel_by_name/:name', to: 'api/channels#find_channel_by_name', defaults: {format: :json}

  mount ActionCable.server => '/cable'

end
