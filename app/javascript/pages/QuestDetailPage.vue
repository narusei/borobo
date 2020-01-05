<template>
  <b-quest-detail-page
    :questItem="questItem"
    :questId="questId"
    @deleteQuest="deleteQuest($event)"
  ></b-quest-detail-page>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from "vue-property-decorator";
import { getModule } from "vuex-module-decorators";
import BQuestDetailPage from "@/components/quest-detail/BQuestDetailPage";
import QuestDetailStore from "@/store/quest";
@Component({
  components: {
    BQuestDetailPage
  }
})
export default class QuestDetailPage extends Vue {
  private questDetailStore = getModule(QuestDetailStore, this.$store);

  //@Prop()
  @Prop()
  questId!: number;
  //通常プロパティ
  //get
  //@Watch()
  //通常メソッド
  created() {
    try {
      this.questDetailStore.getQuest(Number(this.questId));
    } catch {
      console.log("fails");
    }
  }
  get questItem() {
    return this.questDetailStore.questItem;
  }

  deleteQuest(questId: number) {
    try {
      this.questDetailStore.questDelete(questId);
      this.$router.push({ name: "QuestListPage" });
    } catch {
      console.log("delete failed!");
    }
  }
}
</script>
