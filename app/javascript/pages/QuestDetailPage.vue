<template>
  <b-quest-detail-page
    :name="questItem.user_name"
    :title="questItem.title"
    :description="questItem.description"
    :startDatetime="questItem.start_date"
    :dueDatetime="questItem.due_date"
    :reward="questItem.reward"
  ></b-quest-detail-page>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from "vue-property-decorator";
import { getModule } from "vuex-module-decorators";
import BQuestDetailPage from "@/components/quest-detail/BQuestDetailPage.vue";
import QuestDetailStore from "@/store/quest";
@Component({
  components: {
    BQuestDetailPage
  }
})
export default class QuestDetailPage extends Vue {
  private questDetailStore = getModule(QuestDetailStore, this.$store);

  //@Prop()
  //通常プロパティ
  //get
  //@Watch()
  //通常メソッド
  created() {
    try {
      this.questDetailStore.getQuest("", this.$route.params.questId);
    } catch {
      console.log("fails");
    }
  }
  get questItem() {
    return this.questDetailStore.questItem;
  }
}
</script>
