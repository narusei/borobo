import { Module, VuexModule, Action, Mutation } from "vuex-module-decorators";
import * as MUTATION from "store/quest/mutation-types";
import questApi from "api/quest";
import { QuestItem } from "models/quest/QuestItem";

@Module({ name: "quest", namespaced: true })
export default class QuestListStore extends VuexModule {
  questList: QuestItem[] = [];

  @Action({ rawError: true })
  async getQuestList(param: any) {
    await questApi
      .getQuestList(param)
      .then(response => {
        this.context.commit(MUTATION.SET_QUEST_LIST_ITEM, response.data);
      })
      .catch(response => console.log(response));
  }

  @Mutation
  [MUTATION.SET_QUEST_LIST_ITEM](payload: any) {
    this.questList = payload;
  }
}
