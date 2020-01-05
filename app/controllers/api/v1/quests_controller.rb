class Api::V1::QuestsController < ApplicationController
    protect_from_forgery
    # before_action :set_quest
    # GET /Quests
    def index
        def index
            latest_qid = params[:latest_qid] if params[:latest_qid].present?
            # tags_exist =  params[:search_tags].present?
            # reward_exist =  params[:search_reward].present?
            # author_exist =  params[:search_uname].present?
            # keyword_exist = params[:search_title].present?
            # category_exist = params[:category].present?
            # quest_tag = params[:search_tags]
            # quest_category = params[:category]
            # quest_reward = params[:search_reward]
            # quest_author = params[:search_uname]
            # quest_keyword = params[:search_title]
            # @quests = Quest.limit(8).offset(0) if params[:latest_qid].present?
            
            if latest_qid == nil then
                @quests = Quest.limit(8).offset(0)
                json_response(@quests)
            else
                    # if tags_exist && reward_exist && category_exist && keyword_exist && author_exist
                    #     @quests = 
                render json: Quest.where([ 
                    { category: params[:category] },
                    { title: params[:search_title] },
                    { tags: params[:search_tags] },
                    { reward: params[:search_reward]},
                    { user_name: params[:search_uname]}
                ].reduce({}) do |pre, cur|
                    cur.values.first.present? ? pre.merge(cur) : pre
                end
                ), status: 200
            end
            # json_response(@quests) 
        end
        
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
        params.permit( :title, :stance, :category, :user_id, :user_name, :detail, :tags, :detail, :start_date, :due_date, :reward)
    end
end