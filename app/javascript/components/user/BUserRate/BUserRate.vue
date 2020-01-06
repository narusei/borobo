<template>
  <div>
    <b-collapse class="card" aria-id="contentIdForA11y3">
      <footer class="card-footer">
        <a class="card-footer-item" @click="goodNumPlus">
          <b-icon class="happy" icon="emoticon-happy" size="is-large"></b-icon>
          <div class="happy-num">{{ goodNum }}</div>
        </a>
        <a class="card-footer-item" @click="okNumPlus">
          <b-icon
            class="neutral"
            icon="emoticon-neutral"
            size="is-large"
          ></b-icon>
          <div class="neutral-num">{{ okNum }}</div>
        </a>
        <a class="card-footer-item" @click="badNumPlus">
          <b-icon class="sad" icon="emoticon-sad" size="is-large"></b-icon>
          <div class="sad-num">{{ badNum }}</div>
        </a>
      </footer>
    </b-collapse>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch, Emit } from "vue-property-decorator";
import VueRouter from "vue-router";
import { UserReviewInfo } from "models/user/UserReviewInfo";

Component.registerHooks(["beforeRouteEnter"]);

@Component({})
export default class BUserRate extends Vue {
  // 1.@Prop
  // 2.property
  // 3.getter
  // 4.@Watch
  // 5.method
  @Prop({ default: "0" })
  userId: string;
  @Prop({ default: 0 })
  propGoodNum: number;

  @Prop({ default: 0 })
  propOkNum: number;

  @Prop({ default: 0 })
  propBadNum: number;

  @Prop({ default: false })
  myPage: boolean;

  @Emit("applyVoted")
  applyVoted(): any {
    console.log("apply");
    return this.votedCount;
  }

  goodNum: number = 0;
  okNum: number = 0;
  badNum: number = 0;
  voteFlag: boolean = true;
  voted: string = "";

  get votedCount(): UserReviewInfo {
    return {
      ok: Number(this.okNum),
      good: Number(this.goodNum),
      bad: Number(this.badNum)
    };
  }

  @Watch("propGoodNum")
  setRateNumber() {
    this.goodNum = this.propGoodNum;
    this.okNum = this.propOkNum;
    this.badNum = this.propBadNum;
  }

  goodNumPlus() {
    if (!this.myPage) {
      const answer = window.confirm("評価しますか？");
      if (answer) {
        if (this.voteFlag == false) {
          if (this.voted === "good") {
            return;
          }
          if (this.voted === "ok") {
            this.okNum--;
          }
          if (this.voted === "bad") {
            this.badNum--;
          }
        }
        this.voted = "good";
        this.goodNum++;
        this.voteFlag = false;
        this.applyVoted();
      } else {
        return;
      }
    } else {
      return;
    }
  }
  okNumPlus() {
    if (!this.myPage) {
      const answer = window.confirm("評価しますか？");
      if (answer) {
        if (this.voteFlag == false) {
          if (this.voted == "good") {
            this.goodNum--;
          }
          if (this.voted == "ok") {
            return;
          }
          if (this.voted == "bad") {
            this.badNum--;
          }
        }
        this.voted = "ok";
        this.okNum++;
        this.voteFlag = false;
        this.applyVoted();
      } else {
        return;
      }
    } else {
      return;
    }
  }
  badNumPlus() {
    if (!this.myPage) {
      const answer = window.confirm("評価しますか？");
      if (answer) {
        if (this.voteFlag == false) {
          if (this.voted == "good") {
            this.goodNum--;
          }
          if (this.voted == "ok") {
            this.okNum--;
          }
          if (this.voted == "bad") {
            return;
          }
        }
        this.voted = "bad";
        this.badNum++;
        this.voteFlag = false;
        this.applyVoted();
      } else {
        return;
      }
    } else {
      return;
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  border-radius: 5px;
  margin-top: 20px;
  margin-bottom: 10px;
  .card-footer-item {
    position: relative;
    .happy {
      color: rgb(0, 255, 55);
      margin-bottom: 10px;
    }
    .happy-num {
      color: black;
      position: absolute;
      top: 70%;
    }
    .neutral {
      color: rgb(255, 179, 14);
      margin-bottom: 10px;
    }
    .neutral-num {
      color: black;
      position: absolute;
      top: 70%;
    }
    .sad {
      color: red;
      margin-bottom: 10px;
    }
    .sad-num {
      color: black;
      position: absolute;
      top: 70%;
    }
  }
}
</style>
