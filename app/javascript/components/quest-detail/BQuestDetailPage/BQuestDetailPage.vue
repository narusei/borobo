<template>
  <section class="quest-detail">
    <b-quest-detail-header
      :questTitle="questItem.title"
      :questId="questId"
      @deleteQuest="deleteQuest($event)"
    />
    <div class="qd-user-info">
      <div class="qd-user">
        <div>
          <router-link
            :to="{ name: 'UserPage', params: { userId: questItem.user_id } }"
          >
            <b-icon
              icon="account-circle"
              size="is-large"
              class="account"
            ></b-icon>
          </router-link>
          <div>{{ questItem.name }}</div>
        </div>
      </div>
      <div class="triangle-ui">
        <div class="triangle"></div>
      </div>
      <div class="qd-title">{{ questItem.title }}</div>
    </div>
    <div class="qd-info">
      <div class="qd-description">{{ questItem.detail }}</div>
      <div class="qd-period">
        <b-icon icon="calendar"></b-icon>
        <div class="period">{{ questFormatedDate }}</div>
      </div>
      <div class="qd-reward">
        <b-icon icon="gift"></b-icon>
        <div class="reward">{{ questItem.reward }}</div>
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
import { Vue, Component, Prop, Watch, Emit } from "vue-property-decorator";
import { format } from "date-fns";
import router from "@/router/index.ts";
import BQuestDetailHeader from "@/components/quest-detail/BQuestDetailHeader";
import { QuestItem } from "@/models/quest/QuestItem";
@Component({
  components: { BQuestDetailHeader }
})
export default class BQuestDetailPage extends Vue {
  // 1.@Prop
  @Prop({ default: () => ({}) })
  questItem!: QuestItem;

  @Prop({ default: 0 })
  questId!: number;
  // 2.property
  // 3.getter
  // 4.@Watch
  // 5.method

  get questFormatedDate(): string {
    const startDate = String(
      format(new Date(this.questItem.start_date), "MM/dd hh:mm")
    );
    const dueDate = String(
      format(new Date(this.questItem.due_date), "MM/dd hh:mm")
    );
    return startDate + "~" + dueDate;
  }

  // あとで対応したい
  back() {
    router.go(-1);
  }

  @Emit("deleteQuest")
  deleteQuest(questId: number) {
    return questId;
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
.account {
  color: rgb(87, 87, 87);
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
