import { Module, VuexModule, Action, Mutation } from "vuex-module-decorators";
import * as MUTATION from "@/store/quest-search/mutation-types.ts";
import search from "@/api/quest-search";
import { QuestItem } from 'models/quest-list/QuestItem';

@Module({ name: "quest-list", namespaced: true})
export default class QuestSearchStore extends VuexModule {
    QuestListItem: string;

       @Action({ rawError: true })
       async postQuestSearch(param:any) {
        await search.postQuestSearch(param).then((response) => {
            this.context.commit(MUTATION.POST_SEARCH_QUEST_LIST_ITEM,response);            
        }).catch((response) => {
            console.log(response)
        });
       }

    //   @Action({ rawError: true })
    //   async addNoticeBoardItem(param: AddNoticeBoardArticleParameter) {
    //   }

       @Mutation
       [MUTATION.POST_SEARCH_QUEST_LIST_ITEM](payload: any) {
         this.QuestListItem = payload;
       }
}