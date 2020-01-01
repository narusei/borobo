<template>
  <div>
    <b-user-edit-top-bar pageName="マイページ編集" />
    <b-user-edit-contents :userInfo="userInfo" @editUser="editUser($event)" />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch, Emit } from "vue-property-decorator";
import BUserEditTopBar from "@/components/user-edit/BUserEditTopBar";
import BUserEditContents from "@/components/user-edit/BUserEditContents";
import { UserItem } from "@/models/user/UserItem";
import { UserInfo } from "@/models/user/UserInfo";

@Component({
  components: {
    BUserEditTopBar,
    BUserEditContents
  }
})
export default class BUserEditPage extends Vue {
  // 1.@Prop
  @Prop()
  userItem!: UserItem;
  // 2.property
  // 3.getter
  get userInfo() {
    return {
      user_name: this.userItem.user_name,
      profile: this.userItem.profile
    };
  }
  // 4.@Watch
  // 5.method
  @Emit("editUser")
  editUser(param: UserInfo) {
    return param;
  }
}
</script>
<style lang="scss" scoped></style>
