<template>
  <b-quest-search-page
    @postSearchQuestList="postSearchQuestList($event)"
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

  postSearchQuestList(param: any) {
    console.log(param);
    this.questSearchStore.postSearchQuestList(param);
  }
}
</script>
