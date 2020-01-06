class Api::V1::QuestsController < ApplicationController
    protect_from_forgery
    before_action :authenticate_api_user!
    # before_action :set_quest
    # GET /Quests
    def index
        # @quests = Quest.limit(params[:top]).offset(params[:skip])        
        @quests = Quest.where([ 
            { category: params[:category] },
            { title: params[:search_title] },
            { tags: params[:search_tags] },
            { reward: params[:search_reward]},
            { user_name: params[:search_uname]}
        ].reduce({}) do |pre, cur|
            cur.values.first.present? ? pre.merge(cur) : pre
        end
        )
        top = params[:top].to_i
        skip = params[:skip].to_i
        @quests = @quests.limit(top).offset(skip)
        @quests = @quests.select(:id,:title,:stance,:category,:user_name,:user_id,:start_date,:due_date,:reward)
        json_response(@quests)
    end
    # POST /Quests
    def create
        @user = current_api_user
        @quest = Quest.create!(title:params[:title], stance:params[:stance], category:params[:category], tags:params[:tags], detail:params[:detail], start_date:params[:start_date], due_date:params[:due_date], reward:params[:reward], user_id: @user.id, user_name: @user.detail.user_name)
        tag_db = @quest.tags
        tags_array = tag_db.split(',').map { |m| m.delete('[]"\\\\')}
        ques = {
            'id': @quest.id,
            'title': @quest.title,
            'category': @quest.category,
            'user_id': @quest.user_id,
            'user_name': @quest.user_name,
            'tags': tags_array,
            'detail': @quest.detail,
            'start_date': @quest.start_date,
            'due_date': @quest.due_date,
            'reward': @quest.reward,
            'stance': @quest.stance
        }
        json_response(ques)
    end
    # GET /Quests/:id
    def show
        @quest = Quest.find(params[:id])
        tag_db = @quest.tags
        tags_array = tag_db.split(',').map { |m| m.delete('[]"\\\\')}
        ques = {
            'id': @quest.id,
            'title': @quest.title,
            'category': @quest.category,
            'user_id': @quest.user_id,
            'user_name': @quest.user_name,
            'tags': tags_array,
            'detail': @quest.detail,
            'start_date': @quest.start_date,
            'due_date': @quest.due_date,
            'reward': @quest.reward,
            'stance': @quest.stance
        }
        json_response(ques)
    end
    # PUT /Quests/:id
    def update
        @quest = Quest.find(params[:id])
        @quest.update(quest_params)
        tag_db = @quest.tags
        tags_array = tag_db.split(',').map { |m| m.delete('[]"\\\\')}
        ques = {
            'id': @quest.id,
            'title': @quest.title,
            'category': @quest.category,
            'user_id': @quest.user_id,
            'user_name': @quest.user_name,
            'tags': tags_array,
            'detail': @quest.detail,
            'start_date': @quest.start_date,
            'due_date': @quest.due_date,
            'reward': @quest.reward,
            'stance': @quest.stance
        }
        json_response(ques)
    end
    # DELETE /Quests/:id
    def destroy
        @quest = Quest.destroy(params[:id])
        json_response(@quest)
    end

    private

    def quest_params
        params.permit( :title, :stance, :category, :user_id, :user_name, :detail, :tags, :detail, :start_date, :due_date, :reward)
    end
end