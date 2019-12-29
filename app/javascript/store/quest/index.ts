import { Module, VuexModule, Action, Mutation } from "vuex-module-decorators";
import * as MUTATION from "store/quest/mutation-types";
import questApi from "api/quest";
import { QuestProperty } from "models/quest/QuestProperty";

@Module({ name: "quest", namespaced: true })
export default class QuestStore extends VuexModule {
  questList: QuestProperty[] = [];

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

  @Mutation
  [MUTATION.SET_QUEST_LIST_ITEM](payload: any) {
    console.log("mutation");
    this.questList = payload;
  }
}
