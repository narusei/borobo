<template>
  <div>
    <top-bar pageName="編集" />
    <b-quest-create :questInfo="questInfo" @questCreate="questEdit($event)" />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch, Emit } from "vue-property-decorator";
import { getModule } from "vuex-module-decorators";
import BQuestCreate from "@/components/quest-create/BQuestCreate";
import TopBar from "@/components/common/BTopBar";
import QuestStore from "@/store/quest/index.ts";
import { QuestInfo } from "@/models/quest/QuestInfo";

@Component({
  components: {
    TopBar,
    BQuestCreate
  }
})
export default class BQuestEditPage extends Vue {
  private questStore = getModule(QuestStore, this.$store);
  // 1.@Prop
  // 2.property
  // 3.getter
  get questInfo() {
    return {
      category: this.questStore.questItem.category,
      stance: "demand",
      title: this.questStore.questItem.title,
      detail: this.questStore.questItem.detail,
      tags: this.questStore.questItem.tags,
      start_date: this.questStore.questItem.start_date,
      due_date: this.questStore.questItem.due_date,
      reward: this.questStore.questItem.reward
    };
  }
  // 4.@Watch
  // 5.method
  @Emit("questEdit")
  questEdit(param: QuestInfo) {
    return param;
  }
}
</script>
<style lang="scss" scoped></style>
