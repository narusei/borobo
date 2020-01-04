class Api::V1::QuestsController < ApplicationController
    protect_from_forgery
    # before_action :set_quest
    # GET /Quests
    def index
        exec_query = 'Quest'
        exec_query += 'where("title = ?", params[:category])' if params[:category].present?
        exec_query += 'where("user_name = ?", params[:search_uname])' if params[:seach_uname].present?
        exec_query += 'where("tags = ?", params[:search_tags])' if params[:search_tags].present?
        exec_query += 'where("category = ?", params[:category])' if params[:category].present?
        exec_query += 'where("reward = ?", params[:reward])' if params[:reward].present?    
        @books = eval(exec_query)
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
        @quest= Quest.update(quest_params)
        json_response(@quest)
    end
    # DELETE /Quests/:id
    def destroy
        @quest = Quest.destroy(params[:id])
        json_response(@quest)
    end

    private

    def quest_params
        params.permit(:category, :detail, :from_to, :status, :tag, :author, :title,:reward)
    end
end