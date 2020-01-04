<template>
  <b-quest-search-page
    :latestQid="latestQid"
    @searchQuestList="searchQuestList($event)"
    :questList="questList"
  ></b-quest-search-page>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from "vue-property-decorator";
import { getModule } from "vuex-module-decorators";
import BQuestSearchPage from "@/components/quest-search/BQuestSearchPage";
import QuestSearchStore from "@/store/quest";
@Component({
  components: {
    BQuestSearchPage
  }
})
export default class QuestSearchPage extends Vue {
  private questSearchStore = getModule(QuestSearchStore, this.$store);
  //@Prop()
  //通常プロパティ
  //get
  //@Watch()
  //通常メソッド
  get questList() {
    return this.questSearchStore.questList;
  }

  get latestQid() {
    return this.questSearchStore.questList[
      this.questSearchStore.questList.length - 1
    ].id;
  }

  getQuestList(param: any) {
    this.questSearchStore.getQuestList(param);
  }

  searchQuestList(param: any) {
    this.getQuestList("");
    this.questSearchStore.searchQuestList(param);
  }
}
</script>
