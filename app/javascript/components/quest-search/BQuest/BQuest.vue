<template>
  <div class="card" v-on:click="to_quest_detail">
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <b-icon
                icon="account-circle"
                size="is-large">
            </b-icon>
          <!-- <img src="@/img/sakura.jpg" class="user_icon" /> -->
        </div>
        <div class="media-content">
          <p class="user_name">{{user_name}}</p>
          <div class="quest_title">{{quest_title}}</div>
          <div class="quest_period">
            <b-icon
                icon="calendar"
                class="clock">
            </b-icon>
            <!-- <img src="@/img/clock.png" class="clock_img" /> -->
            {{quest_period}}
          </div>
          <div class="quest_reword">
            <b-icon
                icon="gift"
                class="reword">
            </b-icon>
            <!-- <img src="@/img/reword_icon.png" class="reword_img" /> -->
            {{quest_reword}}
          </div>
        </div>
      </div>
    </div>
    <hr />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from "vue-property-decorator";

@Component
export default class BQuest extends Vue {

  @Prop({default:"トニーあああああああ"})
  user_name!: string;

  @Prop({default:"関数電卓を貸してああああああああああああああああ"})
  quest_title!:string;

  @Prop({default:"10/04 16:43 ~ 10/05 15:00"})
  quest_period!:string

  @Prop({default:"たけのこの里"})
  quest_reword!:string

  to_quest_detail(): void{
    //move to quest detail
    alert()
  }
}
</script>

<style lang="scss" scoped>
.card-content {
  padding-left: 13px;
  padding-top: 9px;
  padding-bottom: 5px;
}
.user_icon {
  border-radius: 50%; /* 角丸半径を50%にする(=円形にする) */
  width: 42px; /* ※縦横を同値に */
  height: 42px; /* ※縦横を同値に */
}
.card {
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 5px #ccc;
}
.user_name {
  padding-top: 3px;
  padding-bottom: 3px;
  font-size: 24px;
}

.quest_title {
  /* 関数電卓を貸して！ */
  margin-bottom: 10px;
  /* h2/Medium 30px */
  font-size: 30px;
  line-height: 35px;
  /* identical to box height */

  /* #333333 - Dark Grey */
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

.quest_period {
  display: flex;
}

.quest_reword {
  display: flex;
}

hr {
  background: #51e898;
  margin: 0px;
}
</style>