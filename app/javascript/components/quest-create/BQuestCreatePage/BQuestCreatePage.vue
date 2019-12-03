<template>
  <div>
    <b-top-bar pageName="新規作成" />
    <b-quest-create />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";
import BQuestCreate from "@/components/quest-create/BQuestCreate";
import BTopBar from "@/components/common/BTopBar";
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
}
</script>
<style lang="scss" scoped>
</style>