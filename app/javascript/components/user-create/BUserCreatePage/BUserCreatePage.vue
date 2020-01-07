<template>
  <div>
    <top-bar pageName="ユーザ情報登録" />
    <b-user-edit-contents @editUser="createUser($event)" />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch, Emit } from "vue-property-decorator";
import TopBar from "@/components/common/BTopBar";
import BUserEditContents from "@/components/user-edit/BUserEditContents";
import { UserItem } from "@/models/user/UserItem";
import { UserInfo } from "@/models/user/UserInfo";

@Component({
  components: {
    TopBar,
    BUserEditContents
  }
})
export default class BUserCreatePage extends Vue {
  // 1.@Prop
  // 2.property
  // 3.getter
  // 4.@Watch
  // 5.method
  @Emit("createUser")
  createUser(param: UserInfo) {
    return param;
  }
}
</script>
