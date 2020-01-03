<template>
  <div>
    <b-user-page
      :userItem="userItem"
      @applyVoted="applyVoted($event)"
      :myPage="myPage"
    />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";
import BUserPage from "@/components/user/BUserPage";
import { getModule } from "vuex-module-decorators";
import UserStore from "@/store/quest";
import AuthStore from "@/store/auth";
import { UserItem } from "@/models/user/UserItem";

@Component({
  components: {
    BUserPage
  }
})
export default class UserPage extends Vue {
  private userStore = getModule(UserStore, this.$store);
  private authStore = getModule(AuthStore, this.$store);
  // 1.@Prop
  // 2.property
  // 3.getter
  // 4.@Watch
  // 5.method
  get userItem() {
    return this.userStore.userItem;
  }

  get myPage() {
    //マイページであるかの判定
    if (
      this.authStore.authInfo.account_Id ==
      this.userStore.userItem[0].account_id
    ) {
      return true;
    }
    return true;
  }

  created() {
    this.userStore.getUserItem("", this.$route.params.accountId);
  }

  applyVoted(param: any) {
    console.log("aaaaakkkkkkkk");
    this.userStore.applyVoted(param, String(this.userItem.account_id));
  }
}
</script>
<style lang="scss" scoped></style>
