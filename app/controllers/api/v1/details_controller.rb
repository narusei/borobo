class Api::V1::DetailsController < ApplicationController
    def show
        @detail = Detail.find_by(id:params[:id])
        json_response(@detail)
    end

    def update
        @detail = Detail.find_by(user_id:params[:user_id])
        @detail.update(detail_params)
        json_response(@detail)
    end
    
    def create
        @detail = Detail.create!(user_id:params[:user_id],user_name:params[:user_name],profile:params[:profile])
        json_response(@detail)
    end

    def review
        @detail = Detail.find_by(user_id:params[:user_id])
        @detail.update( ok: params[:ok], good: params[:good], bad: params[:bad] )
        json_response(@detail)
    end

    private

    def detail_params
        params.permit(:user_name,:profile,:user_id)
    end

end
