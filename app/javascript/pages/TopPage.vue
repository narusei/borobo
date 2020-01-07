<template>
  <b-top-page />
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";
import BTopPage from "@/components/top/BTopPage";
@Component({
  components: { BTopPage }
})
export default class TopPage extends Vue {
  // 1.@Prop
  // 2.property
  // 3.getter
  // 4.@Watch
  // 5.method
}
</script>
<style lang="scss" scoped>
</style>