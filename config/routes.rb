Rails.application.routes.draw do

  resources :priorities, only: [:index, :create, :destroy]

  resources :priority_levels, only: [:index, :create, :destroy] 

  resources :todos, only: [:index, :create, :update, :destroy]

  resources :todo_categories, only: [:index, :create, :destroy] 

  resources :habits, only: [:index, :create, :destroy]

  resources :profiles, only: [:create, :update, :destroy]
  
  post "/signup", to: "users#create"

  get "/me", to: "users#show"

  patch "/me", to: "users#update"

  delete "/me", to: "users#destroy"

  post "/login", to: "sessions#create"

  delete "/logout", to: "sessions#destroy"

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
