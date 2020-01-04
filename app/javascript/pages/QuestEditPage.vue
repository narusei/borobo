<template>
  <b-quest-edit-page @questEdit="questEdit($event)"></b-quest-edit-page>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";
import { getModule } from "vuex-module-decorators";
import QuestStore from "@/store/quest/index.ts";
import BQuestEditPage from "@/components/quest-edit/BQuestEditPage";
import { QuestInfo } from "@/models/quest/QuestInfo.ts";
@Component({
  components: {
    BQuestEditPage
  }
})
export default class QuestEditPage extends Vue {
  private questStore = getModule(QuestStore, this.$store);
  // 1.@Prop
  // 2.property
  // 3.getter
  // 4.@Watch
  // 5.method
  questEdit(param: QuestInfo) {
    try {
      this.questStore.questEdit(param);
      this.$router.push({
        name: "QuestDetailPage",
        params: { questId: String(this.questStore.questItem.id) }
      });
    } catch {
      console.log("PUT Error!");
    }
  }
}
</script>
