Rails.application.routes.draw do

  resources :habits

  resources :profiles, only: [:index, :show, :create, :update]
  
  resources :users, only: [:index, :update]

  post "/signup", to: "users#create"

  get "/me", to: "users#show"

  patch "/me", to: "users#update" 

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
