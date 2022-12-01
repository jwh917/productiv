Rails.application.routes.draw do

  resources :priorties

  resources :priorty_levels, only: [:index, :show] 

  resources :todos

  resources :todo_categories, only: [:index, :show] 

  resources :habits

  resources :profiles, only: [:index, :show, :create, :update, :destroy]
  
  resources :users, only: [:index, :update, :destroy]

  post "/signup", to: "users#create"

  get "/me", to: "users#show"

  patch "/me", to: "users#update" 

  post "/login", to: "sessions#create"

  delete "/logout", to: "sessions#destroy"

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
