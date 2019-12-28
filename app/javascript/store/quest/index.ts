import { Module, VuexModule, Action, Mutation } from "vuex-module-decorators";
import * as MUTATION from "store/quest/mutation-types";
import questApi from "api/quest";
import { QuestListItem } from "models/quest/QuestListItem";
import { QuestListItemProperty } from "models/quest/QuestListItemProperty";

@Module({ name: "quest", namespaced: true })
export default class QuestStore extends VuexModule {
  questList: QuestListItemProperty[] = [];

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

  @Mutation
  [MUTATION.SET_QUEST_LIST_ITEM](payload: any) {
    console.log(this.questList);
    this.questList = payload;
  }
}
