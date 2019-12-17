class Api::V1::QuestsController < ApplicationController
    protect_from_forgery
    # before_action :set_quest
    # GET /Quests
    def index
        @quests = Quest.all
        json_response(@quests)
    end
    # POST /Quests
    def create
        @quest = Quest.create!(quest_params)
        json_response(@quest, :created)
    end
    # GET /Quests/:id
    def show
        @quest = Quest.find(params[:id])
        json_response(@quest)
    end
    # PUT /Quests/:id
    def update
        @quest.update(quest_params)
        head :no_content
    end
    # DELETE /Quests/:id
    def destroy
        @quest.destroy(params[:id])
        head :no_content
        render json: {code:200}
    end

    private

    def quest_params
        params.permit(:category, :detail, :from_to, :status, :tag, :author, :title,:reward)
    end

    # def set_quest
    #     @quest = Quest.find(params[:id])
    # end
end