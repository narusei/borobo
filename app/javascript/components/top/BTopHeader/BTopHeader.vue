<template>
  <div class="top-bar">
    <div class="borobo-logo">
      Borobo
      <a class="auth-bottun" href>Sign up</a>
      <a class="auth-bottun" href>Log in</a>
    </div>
    <div class="top-about-borobo">
      <div class="borobo-theme">貸すよ！が<br>見つかる</div>
    </div>
    <div class="borobo-image">
      <img class="quest-img" src="@/components/top/img/quest.jpg" />
    </div>
    <div>
      <b-right-chat class="b-right-chat" chatText="関数電卓貸すよ！！！" />
      <b-left-chat class="b-left-chat" chatText="ありがとう！" />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";
import BLeftChat from "@/components/top/BLeftChat";
import BRightChat from "@/components/top/BRightChat";
@Component({
  components: {
    BLeftChat,
    BRightChat
  }
})
export default class BTopHeader extends Vue {
  // 1.@Prop
  // 2.property
  // 3.getter
  // 4.@Watch
  // 5.method
}
</script>
<style lang="scss" scoped>
.top-bar {
  width: 100%;
  height: 700px;
  background-color: #51e585;

  .borobo-logo {
    color: white;
    margin-left: 10px;
    font-size: 27px;
    .auth-bottun {
      color: white;
      margin-left: 10px;
      font-size: 17px;
      border-bottom: solid 1px white;
    }
  }
}

.top-about-borobo {
  margin-top: 70px;
  text-align: center;
  .borobo-theme {
    font-size: 50px;
    color: white;
    text-shadow: 0px 0px 2px #fff, 4px 4px 2px rgba(0, 0, 0, 0.3);
    text-shadow: 0px 3px 0px #aaa, 0px 10px 10px rgba(0, 0, 0, 0.2),
      0px 20x 2px rgba(0, 0, 0, 0.1), 0px 24px 20px rgba(0, 0, 0, 0.05);
  }
}

.quest-img {
  width: 310px;
  height: auto;
  margin-top: 50px;
  margin-left: 10px;
  border-radius: 10px;
}

.b-right-chat {
  margin-top: 30px;
}

.b-left-chat {
  margin-top: 0px;
}
</style>