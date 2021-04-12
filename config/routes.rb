Rails.application.routes.draw do
  # get 'posts', to: 'posts#index'
  # get 'posts/new', to: 'posts#new'↓変更
  root to: 'posts#index'
  post 'posts', to: 'posts#create'
end
