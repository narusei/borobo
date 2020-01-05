<template>
  <div>
    <b-quest-list-page
      @getQuestList="getQuestList($event)"
      @reload="reload($event)"
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
import { QuestSearchParameter } from "@/models/quest/QuestSearchParameter";

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
  get questList() {
    return this.questListStore.questList;
  }

  get MyId() {
    return this.authStore.authItem.id;
  }

  created() {
    try {
      this.questListStore.getQuestList({
        category: 0,
        stance: "demand",
        top: 8,
        skip: 0
      });
    } catch {
      console.log("fails");
    }
  }

  getQuestList(param: QuestSearchParameter) {
    try {
      this.questListStore.getQuestList(param);
    } catch {
      console.log("Get QuestList faild!");
    }
  }

  reload(param: QuestSearchParameter) {
    try {
      this.questListStore.reloadQuestList(param);
    } catch {
      console.log("Reload faild!");
    }
  }
}
</script>
