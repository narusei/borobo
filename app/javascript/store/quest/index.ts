import { Module, VuexModule, Action, Mutation } from "vuex-module-decorators";
import * as MUTATION from "@/store/quest/mutation-types.ts";
import questApi from "api/quest";
import { Quest } from "models/quest/Quest";

@Module({ name: "quest", namespaced: true })
export default class QuestStore extends VuexModule {
  quest: Quest[] = [];

  //   @Action
  //   async getNoticeBoardList() {
  //   }

  //   @Action({ rawError: true })
  //   async addNoticeBoardItem(param: AddNoticeBoardArticleParameter) {
  //   }

  @Action({ rawError: true })
  async getQuest(param: any, questId: string) {
    await questApi
      .getQuest(param, questId)
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
    this.quest = payload;
  }
}
