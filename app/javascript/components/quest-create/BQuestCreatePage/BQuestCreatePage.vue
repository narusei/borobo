<template>
  <div>
    <TopBar />
    <BQuestCreate />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";
import BQuestCreate from "@/components/quest-create/BQuestCreate/BQuestCreate.vue";
import TopBar from "@/components/quest-create/BQuestCreateTopBar/BQuestCreateTopBar.vue";
@Component({
  components: {
    TopBar,
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