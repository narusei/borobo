<template>
  <div>
    <b-user-top-bar
      class="top-bar"
      :userName="userItem.name"
      :myPage="myPage"
    />
    <b-user-profile
      :userItem="userItem"
      :userName="userItem.name"
      :userDetail="userItem.detail"
      @applyVoted="applyVoted($event)"
    />
    <b-user-quest-list :questList="userItem.quest" />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch, Emit } from "vue-property-decorator";
import BUserTopBar from "@/components/user/BUserTopBar";
import BUserProfile from "@/components/user/BUserProfile";
import BUserQuestList from "@/components/user/BUserQuestList";
import { UserItem } from "models/quest/UserItem";

@Component({
  components: {
    BUserTopBar,
    BUserProfile,
    BUserQuestList
  }
})
export default class BUserPage extends Vue {
  // 1.@Prop
  @Prop({})
  myPage: boolean;
  @Prop({})
  userItem: UserItem;
  // 2.property
  @Emit("applyVoted")
  applyVoted(param: any) {
    return param;
  }
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
