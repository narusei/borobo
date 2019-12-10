<template>
  <div>
    <b-user-edit-top-bar pageName="マイページ編集" />
    <b-user-edit-contents />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";
import BUserEditTopBar from "@/components/user-edit/BUserEditTopBar";
import BUserEditContents from "@/components/user-edit/BUserEditContents";

@Component({
  components: {
    BUserEditTopBar,
    BUserEditContents
  }
})
export default class BUserEditPage extends Vue {
  // 1.@Prop
  // 2.property
  // 3.getter
  // 4.@Watch
  // 5.method
}
</script>
<style lang="scss" scoped>
</style>