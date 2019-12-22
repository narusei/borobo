<template>
  <div>
    <b-top-bar pageName="新規作成" />
    <b-quest-create @questCreate="questCreate($event)" />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch, Emit } from "vue-property-decorator";
import BQuestCreate from "@/components/quest-create/BQuestCreate";
import BTopBar from "@/components/common/BTopBar";
import { QuestItem } from "@/models/quest-list/QuestItem.ts";
@Component({
  components: {
    BTopBar,
    BQuestCreate
  }
})
export default class BQuestCreatePage extends Vue {
  // 1.@Prop
  // 2.property
  // 3.getter
  // 4.@Watch
  // 5.method
  @Emit("questCreate")
  questCreate(param: QuestItem) {
    return param;
  }
}
</script>
<style lang="scss" scoped></style>
