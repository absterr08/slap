Rails.application.routes.draw do

  root to: 'static_pages#root'

  get 'api/users/search', to: 'api/users#search', defaults: { format: :json }
  get 'api/channels/search', to: 'api/channels#search', defaults: { format: :json }
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show, :index, :update] do
      collection do
        get :current_user_channels_and_dms
      end
    end
    resource :session, only: [:create, :destroy, :show]
    resources :messages, only: [:create, :edit, :show, :index]
    resources :channels, only: [:create, :show, :index, :destroy] do
      resources :messages, only: [:index]
    end
    resources :dms, except: [:update] do
      resources :messages, only: [:index]
    end
    resources :channel_subscriptions, only: [:create, :destroy]
  end

  post 'api/create_guest_user', to: 'api/users#create_guest_user'

  mount ActionCable.server => '/cable'

end
