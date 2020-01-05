<template>
  <div>
    <b-quest-list-page
      @getQuestList="getQuestList($event)"
      :questList="questList"
      :userId="MyId"
    />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from "vue-property-decorator";
import { getModule } from "vuex-module-decorators";
import BQuestListPage from "@/components/quest-list/BQuestListPage";
import QuestListStore from "@/store/quest";
import AuthStore from "store/auth/index";

@Component({
  components: {
    BQuestListPage
  }
})
export default class QuestListPage extends Vue {
  private questListStore = getModule(QuestListStore, this.$store);
  private authStore = getModule(AuthStore, this.$store);
  //@Prop()
  //通常プロパティ
  //get
  //@Watch()
  //通常メソッド
  created() {
    try {
      this.questListStore.getQuestList("ヒト");
    } catch {
      console.log("fails");
    }
  }

  get questList() {
    return this.questListStore.questList;
  }

  get MyId() {
    return this.authStore.authItem.id;
  }

  getQuestList(param: any) {
    this.questListStore.getQuestList(param);
  }
}
</script>
