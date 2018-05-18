Rails.application.routes.draw do

  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show, :index, :update] do
      member do
        get :channels_and_dms
      end
    end
    resource :session, only: [:create, :destroy, :show]
    resources :messages, only: [:create, :edit, :show, :index]
    resources :channels, only: [:create, :show, :index, :destroy]
    resources :dms, except: [:update]
    resources :channel_subscriptions, only: [:create, :destroy]
  end

  post 'api/create_guest_user', to: 'api/users#create_guest_user'

  mount ActionCable.server => '/cable'

end
