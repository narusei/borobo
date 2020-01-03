import { Module, VuexModule, Action, Mutation } from "vuex-module-decorators";
import * as MUTATION from "store/quest/mutation-types";
import questApi from "@/api/quest";
import { QuestProperty } from "@/models/quest/QuestProperty";
import { QuestItem } from "@/models/quest/QuestItem";
import { QuestInfo } from "@/models/quest/QuestInfo";
import { UserItem } from "@/models/user/UserItem";
import { UserInfo } from "@/models/user/UserInfo";

@Module({ name: "quest", namespaced: true })
export default class QuestStore extends VuexModule {
  questList: QuestProperty[] = [];
  questItem: QuestItem = {};
  userItem: UserItem = {};

  @Action({ rawError: true })
  async questEdit(param: QuestInfo) {
    await questApi
      .editQuest(param, this.questItem.id)
      .then(response => {
        this.context.commit(MUTATION.SET_QUEST_ITEM, response.data);
      })
      .catch(response => console.log(response));
  }

  @Action({ rawError: true })
  async getUserItem(param: any, userId: number) {
    await questApi
      .getUserItem(param, userId)
      .then(response => {
        this.context.commit(MUTATION.SET_USER_ITEM, response.data);
      })
      .catch(response => console.log(response));
  }

  @Action({ rawError: true })
  async getQuestList(param: any) {
    await questApi
      .getQuestList(param)
      .then(response => {
        this.context.commit(
          MUTATION.SET_QUEST_LIST_ITEM,
          response.data.each_quest
        );
      })
      .catch(response => console.log(response));
  }

  @Action({ rawError: true })
  async applyVoted(param: any, userId: number) {
    questApi
      .applyVoted(param, userId)
      .then(response => {
        this.context.commit(MUTATION.APPLY_VOTE_ITEM, response.data);
      })
      .catch(response => console.log(response));
  }

  @Action({ rawError: true })
  async searchQuestList(param: any) {
    await questApi
      .searchQuestList(param)
      .then(response => {
        this.context.commit(
          MUTATION.SET_QUEST_LIST_ITEM,
          response.data.each_quest
        );
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
  async getQuest(param: any, questId: number) {
    await questApi
      .getQuest(param, questId)
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
      .updateUser(param, this.userItem.user_id)
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

  @Mutation
  [MUTATION.SET_QUEST_LIST_ITEM](payload: any) {
    this.questList = payload;
  }
}
