<template>
  <b-quest-search-page
    @postSearchQuestList="postSearchQuestList($event)"
    @getQuestList="getQuestList($event)"
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
  created() {
    try {
      this.questSearchStore.getQuestList("ヒト");
    } catch {
      console.log("fails");
    }
  }
  get questList() {
    return this.questSearchStore.questList;
  }
  getQuestList(param: any) {
    this.questSearchStore.getQuestList(param);
  }

  postSearchQuestList(param: any) {
    this.questSearchStore.postSearchQuestList(param);
  }
}
</script>
