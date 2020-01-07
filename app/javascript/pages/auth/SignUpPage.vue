<template>
  <b-sign-up-page @postSignUpInfo="postSignUpInfo($event)"></b-sign-up-page>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";
import { getModule } from "vuex-module-decorators";
import BSignUpPage from "@/components/auth/BSignUpPage";
import AuthStore from "@/store/auth";
@Component({
  components: {
    BSignUpPage
  }
})
export default class SignUpPage extends Vue {
  private authStore = getModule(AuthStore, this.$store);
  // 1.@Prop
  // 2.property
  // 3.getter
  // 4.@Watch
  // 5.method
  postSignUpInfo(param: any) {
    try {
      this.authStore.postSignUpInfo(param);
      this.$router.push({ name: "UserCreatePage" });
    } catch {
      console.log("Sign Up faild!");
    }
  }
}
</script>
<style lang="scss" scoped></style>
