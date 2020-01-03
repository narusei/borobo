module Api
    module V1
      module Auth
        class RegistrationsController < DeviseTokenAuth::RegistrationsController
          private
          def sign_up_params
            params.permit(:nickname, :email, :password, :password_confirmation)
          end
  
          def account_update_params

            params.permit(:nickname, :email)
          end
        end
      end
    end
end