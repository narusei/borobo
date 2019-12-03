<template>
  <div class="card" v-on:click="toQuestDetail">
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <b-icon icon="account-circle" size="is-large"></b-icon>
        </div>
        <div class="media-content">
          <p class="user-name">{{userName}}</p>
          <div class="quest-title">{{questTitle}}</div>
          <div class="quest-period">
            <b-icon icon="calendar" class="clock"></b-icon>
            {{questPeriod}}
          </div>
          <div class="quest-reword">
            <b-icon icon="gift" class="reword"></b-icon>
            {{questReword}}
          </div>
        </div>
      </div>
    </div>
    <hr class="quest-border" />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from "vue-property-decorator";

@Component
export default class BQuest extends Vue {
  @Prop({ default: "トニーあああああああ" })
  userName!: string;

  @Prop({ default: "関数電卓を貸してああああああああああああああああ" })
  questTitle!: string;

  @Prop({ default: "10/04 16:43 ~ 10/05 15:00" })
  questPeriod!: string;

  @Prop({ default: "たけのこの里" })
  questReword!: string;

  toQuestDetail(): void {}
}
</script>

<style lang="scss" scoped>
.card-content {
  padding-left: 13px;
  padding-top: 9px;
  padding-bottom: 5px;
}
.user-icon {
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
}

.quest-title {
  margin-bottom: 10px;
  font-size: 30px;
  line-height: 35px;
  color: #333333;
}

.clock {
  margin-right: 20px;
  margin-bottom: 10px;
  height: 22px;
  width: 22px;
}
.reword {
  margin-right: 20px;
  margin-bottom: 10px;
  height: 22px;
  width: 22px;
}

.quest-period {
  display: flex;
}

.quest-reword {
  display: flex;
}

.quest-border {
  background: #51e898;
  margin: 0px;
}
</style>