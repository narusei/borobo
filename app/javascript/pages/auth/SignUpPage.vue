<template>
  <sign-up-page></sign-up-page>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";
import SignUpPage from "@/components/auth/SignUpPage";
@Component({
  components: {
    SignUpPage
  }
})
export default class NAME extends Vue {
  // 1.@Prop
  // 2.property
  // 3.getter
  // 4.@Watch
  // 5.method
}
</script>
<style lang="scss" scoped>
</style>