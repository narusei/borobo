import { Module, VuexModule, Action, Mutation } from "vuex-module-decorators";
import * as MUTATION from "@/store/quest-list/mutation-types.ts";
import noticeBoardApi from "api/quest";
import { QuestItem } from "@/models/quest-list/QuestItem.ts";

@Module({ name: "default" })
export default class DefaultStore extends VuexModule {
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
