<template>
  <div>
    <div class="b-contents-user-name">
      <div>
        <b-icon icon="account-circle" size="is-large"></b-icon>
      </div>
      <div class="my-user-name">
        <div class="cp-iptxt">
          <label class="ef">
            <input type="text" placeholder="ユーザーネーム" v-model="editedMyUserName" required />
          </label>
        </div>
      </div>
    </div>
    <div class="b-contents-profile-detail">
      <form class="profile-detail">
        <textarea
          name="テキストエリア"
          rows="14"
          wrap="hard"
          placeholder="プロフィール"
          v-model="editedMyUserProfile"
        ></textarea>
      </form>
    </div>
    <div>
      <section>
        <b-button @click="edit" class="edit-button">適用</b-button>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";
@Component({
  components: {}
})
export default class BUserEditContents extends Vue {
  // 1.@Prop
  // 2.property
  // 3.getter
  // 4.@Watch
  // 5.method
  @Prop({ default: "" })
  myUserName!: string;

  editedMyUserName: string = "";

  @Prop({ default: "" })
  myUserProfile!: string;

  editedMyUserProfile: string = "";

  created() {
    this.editedMyUserName = this.myUserName;
    this.editedMyUserProfile = this.myUserProfile;
  }

  edit() {}
}
</script>

<style lang="scss" scoped>
.b-contents-user-name {
  height: 100%;
  padding: 40px 10%;
  display: flex;
  .my-user-name {
    width: 100%;
  }
}

.b-contents-profile-detail {
  padding: 0px 10%;
  bottom: 30%;
  //height: 100%;
  .profile-detail {
    textarea {
      width: 100%;
      color: #000000;
      border: 1px solid #bbbbbb;
      border-radius: 4px;
      font-size: 18px;
      padding: 8px 8px 8px 8px;
    }
  }
}

.ef {
  width: 100%;
}
.cp-iptxt input[type="text"] {
  margin-top: 4px;
  padding: 8px 8px 8px 8px;
  box-sizing: border-box;
  width: 100%;
  transition: 0.3s;
  letter-spacing: 1px;
  color: #000000;
  border: 1px solid #bbbbbb;
  border-radius: 4px;
  font-size: 18px;
}

.edit-button {
  float: right;
  margin-right: 10%;
  margin-top: 15px;
  margin-bottom: 10px;
  font-size: 18px;
  border: 1px solid #51e898;
  box-shadow: 1px 1px 1px 1px #bbbbbb;
}
</style>