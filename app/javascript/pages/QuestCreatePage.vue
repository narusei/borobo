<template>
  <b-quest-create-page @questCreate="questCreate($event)"></b-quest-create-page>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from "vue-property-decorator";
import { getModule } from "vuex-module-decorators";
import BQuestCreatePage from "@/components/quest-create/BQuestCreatePage";
import QuestStore from "@/store/quest/index.ts";
import { QuestInfo } from "@/models/quest/QuestInfo.ts";

@Component({
  components: {
    BQuestCreatePage
  }
})
export default class QuestCreatePage extends Vue {
  private questStore = getModule(QuestStore, this.$store);
  //@Prop()
  //通常プロパティ
  //get
  //@Watch()
  //通常メソッド
  async questCreate(param: QuestInfo) {
    try {
      await this.questStore.questCreate(param);
      this.$router.push({
        name: "QuestDetailPage",
        params: { questId: String(this.questStore.questItem.id) }
      });
    } catch {
      console.log("POST Error!");
    }
  }
}
</script>
