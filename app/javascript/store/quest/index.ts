import { Module, VuexModule, Action, Mutation } from "vuex-module-decorators";
import * as MUTATION from "store/quest/mutation-types";
import questApi from "api/quest";
import { QuestItem } from "@/models/quest-list/QuestItem.ts";

@Module({ name: "quest", namespaced: true})
export default class QuestListStore extends VuexModule {
    questList: []=[];

    //   @Action
    //   async getNoticeBoardList() {
    //   }

    @Action({ rawError: true })
    async getQuestList(param:any) {
      const result = await questApi.getQuestList(param);
      this.context.commit(MUTATION.SET_QUEST_LIST_ITEM, result);
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
        console.log("mutation start");
        this.questList = payload;
        console.log("mutation end");
    }
}
