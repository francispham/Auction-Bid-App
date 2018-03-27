Rails.application.routes.draw do
  # namespace :api, defaults: {format: :json} do
    resources :auctions do
      resources :bids, shallow: true, only: [:create, :destroy]
    end
    resources :tokens, only: [:create]
    resources :users, only: [:create]
    match "*unmatched_route", to: "application#not_found", via: :all
  # end
end
