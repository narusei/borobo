import { Module, VuexModule, Action, Mutation } from "vuex-module-decorators";
import * as MUTATION from "@/store/quest/mutation-types.ts";
import questApi from "api/quest";
import { QuestItem } from "models/quest/QuestListItem";

@Module({ name: "quest", namespaced: true })
export default class QuestStore extends VuexModule {
  questItem: QuestItem[] = [];

  //   @Action
  //   async getNoticeBoardList() {
  //   }

  //   @Action({ rawError: true })
  //   async addNoticeBoardItem(param: AddNoticeBoardArticleParameter) {
  //   }

  @Action({ rawError: true })
  async getQuest(param: any) {
    await questApi
      .getQuest(param)
      .then(response => {
        this.context.commit(MUTATION.SET_QUEST_ITEM, response.data);
      })
      .catch(response => console.log(response));
  }

  //   @Mutation
  //   [MUTATION.SET_NOTICE_LISTS](payload: QueryableResponse<NoticeBoardArticleItem>) {
  //     this.items = payload;
  //   }

  @Mutation
  [MUTATION.SET_QUEST_ITEM](payload: any) {
    console.log("mutation");
    this.questItem = payload;
  }
}
