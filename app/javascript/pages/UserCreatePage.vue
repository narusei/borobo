<template>
  <b-user-create-page @createUser="createUser($event)" />
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from "vue-property-decorator";
import { getModule } from "vuex-module-decorators";
import QuestStore from "@/store/quest";
import BUserCreatePage from "@/components/user-create/BUserCreatePage";
import { UserInfo } from "@/models/user/UserInfo";

@Component({
  components: {
    BUserCreatePage
  }
})
export default class UserCreatePage extends Vue {
  private questStore = getModule(QuestStore, this.$store);
  //@Prop()
  //通常プロパティ
  //get
  //@Watch()
  //通常メソッド
  createUser(param: UserInfo) {
    try {
      this.questStore.createUser(param);
    } catch {
      console.log("Create User faild!");
    }
  }
}
</script>
