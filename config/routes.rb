Rails.application.routes.draw do

  root to: 'static_pages#root'


  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy, :show]
    resources :messages, only: [:create, :edit, :show, :index]
  end

  get 'api/get_last_message_id', to: 'api/messages#get_last_message_id'

  mount ActionCable.server => '/cable'

end
