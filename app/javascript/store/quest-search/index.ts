import { Module, VuexModule, Action, Mutation } from "vuex-module-decorators";
import * as MUTATION from "@/store/quest-search/mutation-types.ts";
import questApi from "@/api/quest";
import { QuestItem } from "models/quest-list/QuestItem";

@Module({ name: "quest-search", namespaced: true })
export default class QuestSearchStore extends VuexModule {
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
