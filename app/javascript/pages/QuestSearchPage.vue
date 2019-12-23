<template>
  <b-quest-search-page @postQuestSearch="postQuestSearch($event)" :questList="getQuestList"></b-quest-search-page>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from "vue-property-decorator";
import { getModule } from "vuex-module-decorators";
import BQuestSearchPage from "@/components/quest-search/BQuestSearchPage";
import QuestSearchStore from "@/store/quest-search";
@Component({
  components: {
    BQuestSearchPage
  }
})
export default class QuestSearchPage extends Vue {
  private questSearchStore = getModule(QuestSearchStore,this.$store);
  //@Prop()
  //通常プロパティ
  //get
  //@Watch()
  //通常メソッド

  get getQuestList(){
    return this.questSearchStore.QuestListItem;
  }

  postQuestSearch(param:any){
    this.questSearchStore.postQuestSearch(param);
  }
}
</script>