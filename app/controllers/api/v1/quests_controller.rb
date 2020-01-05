class Api::V1::QuestsController < ApplicationController
    protect_from_forgery
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
        @quest = Quest.find(params[:id])
        @quest.update(quest_params)
        json_response(@quest)
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