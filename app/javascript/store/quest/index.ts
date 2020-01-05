import { Module, VuexModule, Action, Mutation } from "vuex-module-decorators";
import * as MUTATION from "store/quest/mutation-types";
import questApi from "@/api/quest";
import { QuestListItem } from "@/models/quest/QuestListItem";
import { QuestItem } from "@/models/quest/QuestItem";
import { QuestInfo } from "@/models/quest/QuestInfo";
import { QuestSearchParameter } from "@/models/quest/QuestSearchParameter";
import { UserItem } from "@/models/user/UserItem";
import { UserInfo } from "@/models/user/UserInfo";

@Module({ name: "quest", namespaced: true })
export default class QuestStore extends VuexModule {
  questList: QuestListItem[] = [];
  questItem: QuestItem = {};
  userItem: UserItem = {};

  @Action({ rawError: true })
  async getQuestList(param: QuestSearchParameter) {
    await questApi
      .getQuestList(param)
      .then(response => {
        this.context.commit(MUTATION.SET_QUEST_LIST_ITEM, response.data);
      })
      .catch(response => console.log(response));
  }

  @Action({ rawError: true })
  async getQuest(questId: number) {
    await questApi
      .getQuest(questId)
      .then(response => {
        this.context.commit(MUTATION.SET_QUEST_ITEM, response.data);
      })
      .catch(response => console.log(response));
  }

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
  async questCreate(param: QuestInfo) {
    await questApi
      .createQuest(param)
      .then(response => {
        this.context.commit(MUTATION.SET_QUEST_ITEM, response.data);
      })
      .catch(response => console.log(response));
  }

  @Action({ rawError: true })
  async questDelete(questId: number) {
    await questApi
      .deleteQuest(questId)
      .then(response => {
        this.context.commit(MUTATION.CLEAR_QUEST_ITEM, response.data);
      })
      .catch(response => console.log(response));
  }

  @Action({ rawError: true })
  async searchQuestList(param: any) {
    await questApi
      .searchQuestList(param)
      .then(response => {
        this.context.commit(MUTATION.SET_QUEST_LIST_ITEM, response.data);
      })
      .catch(response => console.log(response));
  }

  @Action({ rawError: true })
  async reloadQuestList(param: any) {
    await questApi
      .searchQuestList(param)
      .then(response => {
        this.context.commit(MUTATION.RELOAD_QUEST_LIST_ITEM, response.data);
      })
      .catch(response => console.log(response));
  }

  @Action({ rawError: true })
  async getUserItem(userId: number) {
    await questApi
      .getUserItem(userId)
      .then(response => {
        this.context.commit(MUTATION.SET_USER_ITEM, response.data);
      })
      .catch(response => console.log(response));
  }

  @Action({ rawError: true })
  async createUser(param: UserInfo, userId: number) {
    await questApi
      .createUser(param, userId)
      .then(response => {
        this.context.commit(MUTATION.SET_USER_ITEM, response.data);
      })
      .catch(response => console.log(response));
  }

  @Action({ rawError: true })
  async updateUser(param: UserInfo) {
    await questApi
      .updateUser(param, this.userItem.user_id)
      .then(response => {
        this.context.commit(MUTATION.SET_USER_ITEM, response.data);
      })
      .catch(response => console.log(response));
  }

  @Action({ rawError: true })
  async applyVoted(param: any, idObject: UserItem) {
    await questApi
      .applyVoted(param, idObject.user_id, idObject.id)
      .then(response => {
        this.context.commit(MUTATION.APPLY_VOTE_ITEM, response.data);
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

  @Mutation
  [MUTATION.CLEAR_QUEST_ITEM](payload: any) {
    this.questItem = {};
  }

  @Mutation
  [MUTATION.RELOAD_QUEST_LIST_ITEM](payload: any) {
    this.questList = this.questList.concat(payload);
  }
}
