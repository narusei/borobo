<template>
  <div class="card">
    <div class="card-content">
      <router-link :to="{ name: 'QuestDetailPage', params: { id: questId } }">
        <div class="media">
          <div class="media-left">
            <b-icon
              class="user-icon"
              icon="account-circle"
              size="is-large"
            ></b-icon>
          </div>
          <div class="media-content">
            <p class="user-name">{{ userName }}</p>
            <div class="quest-title">{{ questTitle }}</div>
            <div class="quest-period">
              <b-icon icon="calendar" class="clock"></b-icon>
              {{ questFormatedDate }}
            </div>
            <div class="quest-reward">
              <b-icon icon="gift" class="reward"></b-icon>
              {{ questReward }}
            </div>
          </div>
        </div>
      </router-link>
    </div>
    <hr class="border" />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from "vue-property-decorator";
import { format, parseISO, parse } from "date-fns";

@Component
export default class BQuest extends Vue {
  @Prop({})
  questId!: number;

  @Prop({ default: "トニーあああああああ" })
  userName!: string;

  @Prop({ default: "関数電卓を貸してああああああああああああああああ" })
  questTitle!: string;

  @Prop({ default: "Fri Jan 03 2020 11:52:18 GMT+0900 (日本標準時)" })
  questStartDate!: string;

  @Prop({ default: "Fri Jan 03 2020 11:52:18 GMT+0900 (日本標準時)" })
  questDueDate!: string;

  @Prop({ default: "たけのこの里" })
  questReward!: string;

  get questFormatedDate(): string {
    const startDate = String(
      format(new Date("2004-04-01T00:00:01+09:00"), "MM/dd hh:mm")
    );
    const dueDate = String(
      format(new Date("2004-04-01T00:00:01+09:00"), "MM/dd hh:mm")
    );
    return startDate + "~" + dueDate;
  }
}
</script>

<style lang="scss" scoped>
.card-content {
  padding-left: 13px;
  padding-top: 9px;
  padding-bottom: 0px;
}
.user-icon {
  color: rgb(87, 87, 87);
  border-radius: 50%; /* 角丸半径を50%にする(=円形にする) */
  width: 42px; /* ※縦横を同値に */
  height: 42px; /* ※縦横を同値に */
}
.card {
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 5px #ccc;
}
.user-name {
  padding-top: 3px;
  padding-bottom: 3px;
  font-size: 24px;
  color: #333333;
}

.quest-title {
  margin-bottom: 10px;
  font-size: 30px;
  line-height: 35px;
  color: #333333;
}

.clock {
  margin-right: 5px;
  margin-bottom: 10px;
  height: 22px;
  width: 22px;
  color: rgb(87, 87, 87);
}
.reward {
  margin-right: 5px;
  margin-bottom: 10px;
  height: 22px;
  width: 22px;
  color: rgb(87, 87, 87);
}

.quest-period {
  display: flex;
  color: #333333;
}

.quest-reward {
  display: flex;
  margin-bottom: 6px;
  color: #333333;
}

.border {
  background: #51e898;
  margin: 0px;
}
</style>
