import { Module, VuexModule, Action, Mutation } from "vuex-module-decorators";
import * as MUTATION from "store/auth/mutation-types";
import authApi from "api/auth";
import { QuestItem } from "models/quest/QuestItem";

@Module({ name: "auth", namespaced: true })
export default class AuthStore extends VuexModule {
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
