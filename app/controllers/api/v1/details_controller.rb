class Api::V1::DetailsController < ApplicationController
    def show
        @details = Detail.find_by(user_id:params[user_id])
        json_response(@details)
    end

    def update
        @details = Detail.find_by(user_id:params[:id])
        @details = @details.update(detail_params)
        json_response(@details)
    end
    
    def create
        @detail = Detail.create!(detail_params)
        json_response(@details)
    end

    def review
        @details = Detail.find_by(user_id:params[:id])
        @details = Detail.update(ok:params[:ok],good:params[:good],bad:[:bad])
        json_response(@details)
    end

    private

    def detail_params
        params.permit(:user_name,:profile,user_id:params[:user_id])
    end

end
