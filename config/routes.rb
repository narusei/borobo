Rails.application.routes.draw do
  namespace :api do
    scope :v1 do
      mount_devise_token_auth_for 'User', at: 'auth', controllers: {
        registrations: 'api/v1/auth/registrations'
      }
    end
  end

  put 'api/v1/users/:user_id/details/:id/review' => 'api/v1/details#review'
  
  namespace :api do
    namespace :v1 do
      resources :users do
        resources :details, only: [:index,:show,:new,:create,:update]
      end
    end
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      resources :quests
    end
  end

  root to: "main#index"
end
