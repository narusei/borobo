<template>
  <b-quest-detail-page
    :questItem="questItem"
    :questId="this.$route.params.questId"
    :isMyQuest="isMyQuest"
    @deleteQuest="deleteQuest($event)"
  ></b-quest-detail-page>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from "vue-property-decorator";
import { getModule } from "vuex-module-decorators";
import BQuestDetailPage from "@/components/quest-detail/BQuestDetailPage";
import QuestDetailStore from "@/store/quest";
import AuthStore from "@/store/auth";
@Component({
  components: {
    BQuestDetailPage
  }
})
export default class QuestDetailPage extends Vue {
  private questDetailStore = getModule(QuestDetailStore, this.$store);
  private authStore = getModule(AuthStore, this.$store);

  //@Prop()
  //通常プロパティ
  //get
  //@Watch()
  //通常メソッド
  created() {
    try {
      this.questDetailStore.getQuest(Number(this.$route.params.questId));
    } catch {
      console.log("fails");
    }
  }
  get questItem() {
    return this.questDetailStore.questItem;
  }

  get isMyQuest() {
    if (this.questItem.user_id == this.authStore.authItem.id) {
      return true;
    } else {
      return false;
    }
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
