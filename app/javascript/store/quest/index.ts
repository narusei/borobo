import { Module, VuexModule, Action, Mutation } from "vuex-module-decorators";
import * as MUTATION from "store/quest/mutation-types";
import questApi from "api/quest";
import { QuestItem } from "@/models/quest-list/QuestItem.ts";
import { QuestInfo } from "@/models/quest-list/QuestInfo";

@Module({ name: "quest", namespaced: true })
export default class QuestStore extends VuexModule {
  questItem: QuestItem = {};

  @Action({ rawError: true })
  async questEdit(param: QuestInfo) {
    await questApi
      .editQuest(param, this.questItem.quest_id)
      .then(response => {
        this.context.commit(MUTATION.SET_QUEST_ITEM, response.data);
      })
      .catch(response => console.log(response));
  }

  @Mutation
  [MUTATION.SET_QUEST_ITEM](payload: any) {
    this.questItem = payload;
  }
}
