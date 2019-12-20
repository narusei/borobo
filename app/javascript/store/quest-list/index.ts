import { Module, VuexModule, Action, Mutation } from "vuex-module-decorators";
import * as MUTATION from "@/store/quest-list/mutation-types.ts";
import questApi from "@/api/quest-list/index.ts";
import { QuestItem } from "@/models/quest-list/QuestItem.ts";

@Module({ name: "quest-list", namespaced: true})
export default class QuestListStore extends VuexModule {
    questList: string;

    //   @Action
    //   async getNoticeBoardList() {
    //   }

    @Action({ rawError: true })
    async getQuestList(){
        await questApi.getQuestList().then((response) => {
            this.context.commit(MUTATION.SET_QUEST_LIST_ITEM, response.data);
        }).catch(response => console.log(response));
    }

    //   @Action({ rawError: true })
    //   async addNoticeBoardItem(param: AddNoticeBoardArticleParameter) {
    //   }

    //   @Mutation
    //   [MUTATION.SET_NOTICE_LISTS](payload: QueryableResponse<NoticeBoardArticleItem>) {
    //     this.items = payload;
    //   }

    @Mutation
    [MUTATION.SET_QUEST_LIST_ITEM](payload: any){
        this.questList = payload;
        console.log(this.questList)
    }
}