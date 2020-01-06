<template>
  <b-user-edit-page @editUser="editUser($event)" :userItem="userItem" />
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from "vue-property-decorator";
import { getModule } from "vuex-module-decorators";
import QuestStore from "@/store/quest";
import BUserEditPage from "@/components/user-edit/BUserEditPage";
import { UserInfo } from "@/models/user/UserInfo";

@Component({
  components: {
    BUserEditPage
  }
})
export default class UserEditPage extends Vue {
  private questStore = getModule(QuestStore, this.$store);
  //@Prop()
  @Prop({})
  userId: number;
  //通常プロパティ
  //get
  get userItem() {
    return this.questStore.userItem;
  }
  //@Watch()
  //通常メソッド
  editUser(param: UserInfo) {
    try {
      this.questStore.updateUser(param);
    } catch {
      console.log("Update User faild!");
    }
  }

  created() {
    try {
      this.questStore.getUserItem(this.userId);
    } catch {
      console.log("error!");
    }
  }
}
</script>
