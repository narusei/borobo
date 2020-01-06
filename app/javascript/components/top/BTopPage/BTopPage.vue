<template>
  <div>
    <b-top-header />
    <div class="what-borobo-title">What is Borobo?</div>
    <div class="columns is-gapless">
      <div class="column">
        <img src="@/components/top/img/woman.jpg" />
      </div>
      <div class="column">
        <div class="what-borobo-detail">
          Boroboは必要なモノやスキルを貸してくれる友達を探す事ができる
          <br />マッチング&シェアリングサービス。
          <br />boroboであなたの大学生活をより豊かに
        </div>
      </div>
    </div>
    <div class="columns is-gapless">
      <div class="column">
        <div class="borobo-image">
          <img class="quest-img" src="@/components/top/img/quest.jpg" />
        </div>
      </div>
      <div class="column">
        <b-post-it
          class="post-it-1"
          BTitle="貸して！"
          BDetail1="クエストを作って貸してくれる人を探そう！"
          BDetail2="「クエスト」に貸してほしいモノ、スキルを投稿することで、簡単に貸してくれる人を見つけられる！"
        />
      </div>
    </div>
    <div class="columns is-gapless">
      <div class="column">
        <img class="people-img" src="@/components/top/img/group-of-people.jpg" />
      </div>
      <div class="column">
        <b-post-it
          class="post-it-2"
          BTitle="貸そう！"
          BDetail1="キミの持っているモノやスキルで困っている人を助けると報酬を得ることができる！"
          BDetail2="貸せるモノ・スキルや日時、報酬など都合のいいクエストを選んで報酬をゲットしよう！"
        />
      </div>
    </div>
    <div class="start-button">
      <router-link to="/sign-up">
        <button class="button is-large is-rounded">さあ、はじめよう！</button>
      </router-link>
    </div>
    <footer class="b-footer">
      <div class="team-name">2019 TDUから学生を守る党</div>
    </footer>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";
import BTopHeader from "@/components/top/BTopHeader";
import BPostIt from "@/components/top/BPostIt";

@Component({
  components: {
    BTopHeader,
    BPostIt
  }
})
export default class BTopPage extends Vue {
  // 1.@Prop
  // 2.property
  // 3.getter
  // 4.@Watch
  // 5.method
}
</script>
<style lang="scss" scoped>
.what-borobo-title {
  margin: 40px auto;
  text-align: center;
  font-size: 30px;
  width: 250px;
  border-bottom: solid 1px gray;
}

.what-borobo-detail {
  margin: 30px;
}

.borobo-image {
  margin-top: 50px;
  text-align: center;
  .quest-img {
    width: 310px;
    height: auto;
    border-left: solid 1px #51e585;
    border-right: solid 1px #51e585;
    border-radius: 5px;
  }
}

.post-it-1 {
  transform: rotate(-2deg);
}
.post-it-2 {
  transform: rotate(2deg);
  margin-top: 50px;
}

.people-img {
  filter: contrast(80%);
}

.start-button {
  margin: 50px 0;
  text-align: center;
  .button {
    background-color: rgb(0, 102, 255);
    color: white;
  }
}

.b-footer {
  background-color: #51e585;
  height: 60px;
  .team-name {
    padding-left: 8px;
    padding-top: 35px;
    font-size: 14px;
  }
}
</style>