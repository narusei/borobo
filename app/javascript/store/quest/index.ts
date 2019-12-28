import { Module, VuexModule, Action, Mutation } from "vuex-module-decorators";
import * as MUTATION from "store/quest/mutation-types";
import questApi from "api/quest";
import { QuestItem } from "models/quest/QuestItem";

@Module({ name: "quest", namespaced: true })
export default class QuestStore extends VuexModule {
  items: QuestItem = {};

  //   @Action
  //   async getNoticeBoardList() {
  //   }

  //   @Action({ rawError: true })
  //   async addNoticeBoardItem(param: AddNoticeBoardArticleParameter) {
  //   }

  //   @Mutation
  //   [MUTATION.SET_NOTICE_LISTS](payload: QueryableResponse<NoticeBoardArticleItem>) {
  //     this.items = payload;
  //   }
}
