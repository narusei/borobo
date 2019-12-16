<template>
  <div>
    <b-user-page />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";
import BUserPage from "@/components/user/BUserPage";

@Component({
  components: {
      BUserPage
  }
})
export default class UserPage extends Vue {
  // 1.@Prop
  // 2.property
  // 3.getter
  // 4.@Watch
  // 5.method
}
</script>
<style lang="scss" scoped>
</style>