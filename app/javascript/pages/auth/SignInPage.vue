<template>
  <b-sign-in-page @postSignInInfo="postSignInInfo($event)"></b-sign-in-page>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch, Emit } from "vue-property-decorator";
import { getModule } from "vuex-module-decorators";
import BSignInPage from "@/components/auth/BSignInPage";
import AuthStore from "@/store/auth";
@Component({
  components: {
    BSignInPage
  }
})
export default class SignInPage extends Vue {
  private authStore = getModule(AuthStore, this.$store);
  // 1.@Prop
  // 2.property
  // 3.getter
  // 4.@Watch
  // 5.method
  postSignInInfo(param: any) {
    try {
      this.authStore.postSignInInfo(param);
      this.$router.push({ name: "QuestListPage" });
    } catch {
      console.log("Sign in faild!");
    }
  }
}
</script>
