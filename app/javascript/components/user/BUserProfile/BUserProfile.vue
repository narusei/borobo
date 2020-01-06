<template>
  <section>
    <div class="contents">
      <div class="icon-name">
        <b-icon icon="account-circle" size="is-large"></b-icon>
        <div class="user-name">{{ userName }}</div>
      </div>
      <div class="profile-contents">
        <div class="profile-text">{{ userDetail }}</div>
      </div>
      <b-user-rate
        :userId="userItem.userId"
        :propGoodNum="userItem.good"
        :propOkNum="userItem.ok"
        :propBadNum="userItem.bad"
        :myPage="myPage"
        @applyVoted="applyVoted($event)"
      />
    </div>
  </section>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch, Emit } from "vue-property-decorator";
import BUserRate from "@/components/user/BUserRate";
import { UserItem } from "@/models/user/UserItem";

@Component({
  components: {
    BUserRate
  }
})
export default class BUserProfile extends Vue {
  // 1.@Prop
  // 2.property
  // 3.getter
  // 4.@Watch
  // 5.method
  @Prop({})
  userItem: UserItem;

  @Prop({ default: "" })
  userName: string;

  @Prop({ default: "" })
  userDetail: string;

  @Prop({ default: false })
  myPage: boolean;

  @Emit("applyVoted")
  applyVoted(param: any) {
    return param;
  }
}
</script>

<style lang="scss" scoped>
.contents {
  margin-top: 10px;
  margin-left: 13px;
  margin-right: 13px;
  .icon-name {
    display: flex;
    .user-name {
      font-size: 28px;
      padding-left: 13px;
      margin-top: 3px;
    }
  }
}

.profile-contents {
  margin-top: 10px;
  margin-left: 20px;
  margin-right: 20px;
  .profile-text {
    width: 100%;
    //height: 150px;
  }
}
</style>
