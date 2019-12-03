<template>
  <div>
    <b-collapse class="card" aria-id="contentIdForA11y3">
      <footer class="card-footer">
        <a class="card-footer-item" @click="happyNumPlus">
          <b-icon class="happy" icon="emoticon-happy" size="is-large"></b-icon>
          <div class="happy-num">{{ happyNum }}</div>
        </a>
        <a class="card-footer-item" @click="neutralNumPlus">
          <b-icon class="neutral" icon="emoticon-neutral" size="is-large"></b-icon>
          <div class="neutral-num">{{ neutralNum }}</div>
        </a>
        <a class="card-footer-item" @click="sadNumPlus">
          <b-icon class="sad" icon="emoticon-sad" size="is-large"></b-icon>
          <div class="sad-num">{{ sadNum }}</div>
        </a>
      </footer>
    </b-collapse>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";

@Component({
  components: {}
})
export default class BUserRate extends Vue {
  // 1.@Prop
  // 2.property
  // 3.getter
  // 4.@Watch
  // 5.method
  @Prop({ default: 0 })
  propHappyNum: number;

  @Prop({ default: 0 })
  propNeutralNum: number;

  @Prop({ default: 0 })
  propSadNum: number;

  happyNum: number = 0;
  neutralNum: number = 0;
  sadNum: number = 0;
  voteFlag: boolean = true;
  voted: string = "";

  created() {
    this.happyNum = this.propHappyNum;
    this.neutralNum = this.propNeutralNum;
    this.sadNum = this.propSadNum;
  }
  happyNumPlus() {
    if (this.voteFlag == false) {
      if (this.voted === "happy") {
        return;
      }
      if (this.voted === "neutral") {
        this.neutralNum--;
      }
      if (this.voted === "sad") {
        this.sadNum--;
      }
    }
    this.voted = "happy";
    this.happyNum++;
    this.voteFlag = false;
  }
  neutralNumPlus() {
    if (this.voteFlag == false) {
      if (this.voted == "happy") {
        this.happyNum--;
      }
      if (this.voted == "neutral") {
        return;
      }
      if (this.voted == "sad") {
        this.sadNum--;
      }
    }
    this.voted = "neutral";
    this.neutralNum++;
    this.voteFlag = false;
  }
  sadNumPlus() {
    if (this.voteFlag == false) {
      if (this.voted == "happy") {
        this.happyNum--;
      }
      if (this.voted == "neutral") {
        this.neutralNum--;
      }
      if (this.voted == "sad") {
        return;
      }
    }
    this.voted = "sad";
    this.sadNum++;
    this.voteFlag = false;
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