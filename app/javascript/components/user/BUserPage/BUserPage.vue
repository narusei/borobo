<template>
  <div>
    <b-user-top-bar class="top-bar" />
    <b-user-profile />
    <b-user-quest-list />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";
import BUserTopBar from "@/components/user/BUserTopBar";
import BUserProfile from "@/components/user/BUserProfile";
import BUserQuestList from "@/components/user/BUserQuestList"

@Component({
  components: {
    BUserTopBar,
    BUserProfile,
    BUserQuestList,
  }
})
export default class BUserPage extends Vue {
  // 1.@Prop
  // 2.property
  // 3.getter
  // 4.@Watch
  // 5.method
}
</script>
<style lang="scss" scoped>
.top-bar {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 100;
}
</style>