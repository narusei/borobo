<template>
  <section class="quest-detail">
    <top-bar :pageName="title" />
    <div class="qd-user-info">
      <div class="qd-user">
        <div>
          <router-link
            :to="{ name: UserPage, params: { accountId: accountId } }"
          >
            <b-icon icon="account-circle" size="is-large"></b-icon>
          </router-link>
          <div>{{ name }}</div>
        </div>
      </div>
      <div class="triangle-ui">
        <div class="triangle"></div>
      </div>
      <div class="qd-title">{{ title }}</div>
    </div>
    <div class="qd-info">
      <div class="qd-description">{{ description }}</div>
      <div class="qd-period">
        <b-icon icon="calendar"></b-icon>
        <div class="period">{{ startDatetime }} ~ {{ dueDatetime }}</div>
      </div>
      <div class="qd-reward">
        <b-icon icon="gift"></b-icon>
        <div class="reward">{{ reward }}</div>
      </div>
    </div>
    <div class="qd-chat">
      <b-button
        type="is-mainColor"
        size="is-large"
        icon-right="comment-text-multiple-outline"
        rounded
      ></b-button>
    </div>
  </section>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";
import { format } from "date-fns";
import router from "@/router/index.ts";
import TopBar from "@/components/common/BTopBar";
@Component({
  components: { TopBar }
})
export default class BQuestDetailPage extends Vue {
  // 1.@Prop
  // 2.property
  // 3.getter
  // 4.@Watch
  // 5.method
  // 仮置き
  @Prop({ default: 0 })
  accountId: number;
  @Prop({ default: "トニー" })
  name: string;
  @Prop({ default: "関数電卓を貸して！" })
  title: string;
  @Prop({
    default:
      "テストで関数電卓が必要になったのでかしてほしいです。使用したい時間はテストの時間のみなので終わったらすぐお返しします。引き渡し場所は2号館3階を希望です。"
  })
  description: string;
  @Prop({ default: format(new Date(), "MM/dd hh:mm:ss") })
  startDatetime: string;

  @Prop({ default: format(new Date(), "MM/dd hh:mm:ss") })
  dueDatetime: string;
  @Prop({ default: "たけのこの里一個" })
  reward: string;

  back() {
    router.go(-1);
  }
}
</script>

<style lang="scss" scoped>
.quest-detail {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.qd-header {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  height: 60px;

  display: flex;
  align-items: center;
  background-color: #51e898;
  .back-button {
    margin-left: 10px;
  }
  .qd-title {
    margin-left: 20px;
  }
}

.qd-user-info {
  display: flex;
  justify-content: center;
  padding: 32px 16px 0 16px;

  .qd-user {
    display: flex;
    align-items: center;
  }

  .triangle-ui {
    margin-left: 30px;
    display: flex;
    align-items: center;
    .triangle {
      height: 20px;
      border-top: 10px solid transparent;
      border-right: 10px solid gainsboro;
      border-bottom: 10px solid transparent;
    }
  }
  .qd-title {
    padding: 16px;
    display: flex;
    align-items: center;
    background-color: gainsboro;
    border-radius: 0.5em;
  }
}

.qd-info {
  margin: 16px;
  border: thin solid #51e898;
  border-radius: 1em;
  .qd-description {
    padding: 16px;
  }
  .qd-period {
    display: flex;
    align-items: center;
    margin: 16px;
    .period {
      margin-left: 16px;
    }
  }
  .qd-reward {
    display: flex;
    align-items: center;
    margin: 16px;
    .reward {
      margin-left: 16px;
    }
  }
}

.qd-chat {
  display: flex;
  justify-content: flex-end;
  margin-top: auto;
  margin-bottom: 32px;
  margin-right: 16px;
}
</style>
