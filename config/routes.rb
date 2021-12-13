Rails.application.routes.draw do
  get "/hello", to: "application#hello_world"
  resources :foods, only: [:index, :show]

  get '*path', to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
