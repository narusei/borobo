class Api::V1::QuestsController < ApplicationController
    protect_from_forgery
    # before_action :set_quest
    # GET /Quests
    def index
        latest_qid = params[:latest_qid] if params[:latest_qid].present?
        tags_exist =  params[:search_tags].present?
        reward_exist =  params[:search_reward].present?
        author_exist =  params[:search_uname].present?
        quest_tag = params[:search_tags]
        quest_reward = params[:search_reward]
        quest_author = params[:search_uname]
        @quests = Quest.limit(8).offset(latest_qid) if params[:latest_qid].present?
        if tags_exist && reward_exist && author_exist
            @quests = Quest.where('tag LIKE ?', "%#{quest_tag}%").where('reward LIKE ?',"%#{quest_reward}%").where(author:params[:search_uname])  
        elsif  tags_exist && reward_exist
            @quests = Quest.where('tag LIKE ?', "%#{quest_tag}%").where('reward LIKE ?',"%#{quest_reward}%")
        elsif  tags_exist && author_exist
            @quests = Quest.where('tag LIKE ?', "%#{quest_tag}%").where(author:params[:search_uname])
        elsif  author_exist && reward_exist
            @quests = Quest.where(author:params[:search_uname]).where('reward LIKE ?',"%#{quest_reward}%")
        elsif tags_exist
            @quests = Quest.where('tag LIKE ?', "%#{quest_tag}%")
        elsif reward_exist
            @quests = Quest.where('reward LIKE ?',"%#{quest_reward}%")
        elsif author_exist
            @quests = Quest.where(author:params[:search_uname])
        else
            @quests = Quest.limit(8).offset(0)
        end
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