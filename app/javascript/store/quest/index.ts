import { Module, VuexModule, Action, Mutation } from "vuex-module-decorators";
import * as MUTATION from "store/quest/mutation-types";
import questApi from "@/api/quest";
import { QuestItem } from "@/models/quest-list/QuestItem.ts";

@Module({ name: "default" })
export default class DefaultStore extends VuexModule {
  questItem: QuestItem = {};

  @Action({ rawError: true })
  async questCreate(param: QuestItem) {
    await questApi
      .createQuest(param)
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
