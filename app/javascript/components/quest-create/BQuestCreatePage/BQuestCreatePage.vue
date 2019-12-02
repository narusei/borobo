<template>
  <div>
    <BTopBar pageName="新規作成"/>
    <BQuestCreate />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";
import BQuestCreate from "@/components/quest-create/BQuestCreate/BQuestCreate.vue";
import BTopBar from "@/components/common/BTopBar/BTopBar.vue";
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