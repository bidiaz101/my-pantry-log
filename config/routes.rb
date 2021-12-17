Rails.application.routes.draw do
  get '/hello', to: 'application#hello_world'

  post '/signup', to: 'users#create'
  get '/me', to: 'users#show'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  resources 'foods', only: [:index]
  resources 'user_foods', only: [:index, :create, :update]

  get '*path', to: 'fallback#index', constraints: ->(req) { !req.xhr? && req.format.html? }
end
