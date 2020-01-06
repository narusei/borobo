class Api::V1::DetailsController < ApplicationController
    before_action :authenticate_api_user!

    def index
        user = User.find_by(id:params[:user_id])
        detail = user.detail
        json_response(detail)
    end

    def show
        @detail = Detail.find_by(id:params[:id])
        @author = User.find_by(id:params[:user_id])
        quests = Quest.where(user_id: params[:user_id])
        response = {
            'id': @detail.id,
            'user_id': @detail.user_id,
            'user_name': @detail.user_name,
            'profile': @detail.profile,
            'good': @detail.good,
            'ok': @detail.ok,
            'bad': @detail.bad,
            'quests': quests.select(:id,:title,:stance,:category,:user_name,:user_id,:start_date,:due_date,:reward)
        }
        json_response(response)
    end
    # @rentals = Rental.all.includes(:rooms)
    def update
        @detail = Detail.find_by(user_id:params[:user_id])
        @author = User.find_by(id:params[:user_id])
        quests = Quest.where(user_id: params[:user_id])
        @detail.update(detail_params)
        response = {
            'id':@detail.id,
            'user_id': @detail.user_id,
            'user_name': @detail.user_name,
            'profile': @detail.profile,
            'good': @detail.good,
            'ok': @detail.ok,
            'bad': @detail.bad,
            'quests': quests.select(:id,:title,:stance,:category,:user_name,:user_id,:start_date,:due_date,:reward)
        }
        json_response(response)
    end
    
    def create
        @user = current_api_user
        @detail = Detail.create!(user_id:@user.id,user_name:params[:user_name],profile:params[:profile])
        json_response(@detail)
    end

    def review
        @detail = Detail.find_by(user_id:params[:user_id])
        @author = User.find_by(id:params[:user_id])
        quests = Quest.where(user_id: params[:user_id])
        @detail.update( ok: params[:ok], good: params[:good], bad: params[:bad] )
        response = {
            'id':@detail.id,
            'user_id': @detail.user_id,
            'user_name': @detail.user_name,
            'profile': @detail.profile,
            'good': @detail.good,
            'ok': @detail.ok,
            'bad': @detail.bad,
            'quests': quests.select(:id,:title,:stance,:category,:user_name,:user_id,:start_date,:due_date,:reward)
        }
        json_response(response)
    end

    private

    def detail_params
        params.permit(:user_name,:profile,:user_id)
    end

end
