<template>
  <b-quest-search-page
    @searchQuestList="searchQuestList($event)"
    @reload="reload($event)"
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

  created() {
    try {
      this.questSearchStore.getQuestList({
        category: 0,
        stance: "demand",
        top: 8,
        skip: 0
      });
    } catch {
      console.log("faild!");
    }
  }

  searchQuestList(param: any) {
    try {
      this.questSearchStore.searchQuestList(param);
    } catch {
      console.log("Search faild!");
    }
  }

  reload(param: any) {
    try {
      this.questSearchStore.reloadQuestList(param);
    } catch {
      console.log("Reload faild!");
    }
  }
}
</script>
