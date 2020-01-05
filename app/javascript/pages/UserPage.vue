<template>
  <div>
    <b-user-page
      :userItem="userItem"
      @applyVoted="applyVoted($event)"
      @userSignOut="userSignOut($event)"
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
import VueRouter from "vue-router";

@Component({
  components: {
    BUserPage
  }
})
export default class UserPage extends Vue {
  private userStore = getModule(UserStore, this.$store);
  private authStore = getModule(AuthStore, this.$store);
  // 1.@Prop
  @Prop({})
  userId: number;
  // 2.property
  // 3.getter
  // 4.@Watch
  // 5.method
  get userItem() {
    return this.userStore.userItem;
  }

  get myPage() {
    //マイページであるかの判定
    if (this.authStore.authItem.id == this.userId) {
      return true;
    } else {
      return false;
    }
    return false;
  }

  created() {
    this.userStore.getUserItem("", Number(this.$route.params.userId));
  }

  applyVoted(param: any) {
    console.log(param);
    this.userStore.applyVoted(param, this.userItem);
  }

  userSignOut() {
    try {
      this.authStore.userSignOut();
      this.$router.push({ name: "TopPage" });
    } catch {
      console.log("sign out faild");
    }
  }
}
</script>
<style lang="scss" scoped></style>
