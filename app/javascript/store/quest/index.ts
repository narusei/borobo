import { Module, VuexModule, Action, Mutation } from "vuex-module-decorators";
import * as MUTATION from "store/quest/mutation-types";
import questApi from "api/quest";
import { QuestItem } from "models/quest/QuestItem";
import { UserItem } from "models/quest/UserItem";

@Module({ name: "quest", namespaced: true })
export default class QuestStore extends VuexModule {
  userItem: UserItem = {};

  //   @Action
  //   async getNoticeBoardList() {
  //   }
  @Action({ rawError: true })
  async getUserItem(param: any, userId: string) {
    await questApi
      .getUserItem(param, userId)
      .then(response => {
        this.context.commit(MUTATION.SET_USER_ITEM, response.data);
      })
      .catch(response => console.log(response));
  }

  @Action({ rawError: true })
  async applyVoted(param: any, userId: string) {
    questApi
      .applyVoted(param, userId)
      .then(response => {
        this.context.commit(MUTATION.APPLY_VOTE_ITEM, response.data);
      })
      .catch(response => console.log(response));
  }
  //   @Action({ rawError: true })
  //   async addNoticeBoardItem(param: AddNoticeBoardArticleParameter) {
  //   }
  @Mutation
  [MUTATION.SET_USER_ITEM](payload: UserItem) {
    this.userItem = payload;
  }

  //   @Mutation
  //   [MUTATION.SET_NOTICE_LISTS](payload: QueryableResponse<NoticeBoardArticleItem>) {
  //     this.items = payload;
  //   }
}
