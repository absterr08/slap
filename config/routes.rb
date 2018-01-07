Rails.application.routes.draw do

  root to: 'static_pages#root'


  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show, :index]
    resource :session, only: [:create, :destroy, :show]
    resources :messages, only: [:create, :edit, :show, :index]
  end

  get 'api/get_last_message_id', to: 'api/messages#get_last_message_id'
  post 'api/create_guest_user', to: 'api/users#create_guest_user'

  mount ActionCable.server => '/cable'

end
