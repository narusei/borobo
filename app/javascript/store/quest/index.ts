import { Module, VuexModule, Action, Mutation } from "vuex-module-decorators";
import * as MUTATION from "store/quest/mutation-types";
import questApi from "@/api/quest";
import { QuestItem } from "@/models/quest-list/QuestItem.ts";
import { QuestInfo } from "@/models/quest-list/QuestInfo.ts";
import { UserItem } from "@/models/user/UserItem";
import { UserInfo } from "@/models/user/UserInfo";

@Module({ name: "quest", namespaced: true })
export default class QuestStore extends VuexModule {
  questItem: QuestItem = {};
  userItem: UserItem;

  @Action({ rawError: true })
  async questEdit(param: QuestInfo) {
    await questApi
      .editQuest(param, this.questItem.quest_id)
      .then(response => {
        this.context.commit(MUTATION.SET_QUEST_ITEM, response.data);
      })
      .catch(response => console.log(response));
  }

  @Action({ rawError: true })
  async questCreate(param: QuestInfo) {
    await questApi
      .createQuest(param)
      .then(response => {
        this.context.commit(MUTATION.SET_QUEST_ITEM, response.data);
      })
      .catch(response => console.log(response));
  }

  @Action({ rawError: true })
  async createUser(param: UserInfo) {
    questApi
      .createUser(param)
      .then(response => {
        this.context.commit(MUTATION.SET_USER_ITEM, response.data);
      })
      .catch(response => console.log(response));
  }

  @Action({ rawError: true })
  async updateUser(param: UserInfo) {
    questApi
      .updateUser(param, this.userItem.account_id)
      .then(response => {
        this.context.commit(MUTATION.SET_USER_ITEM, response.data);
      })
      .catch(response => console.log(response));
  }

  @Mutation
  [MUTATION.SET_USER_ITEM](payload: UserItem) {
    this.userItem = payload;
  }

  @Mutation
  [MUTATION.SET_QUEST_ITEM](payload: any) {
    this.questItem = payload;
  }
}
