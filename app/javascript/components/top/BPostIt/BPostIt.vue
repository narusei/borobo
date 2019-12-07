<template>
  <div class="b-top-contents">
    <div class="img">
      <img class="pin-img" src="@/components/top/img/gabyou.png" />
    </div>
    <div class="contents-text">
      <div class="b-title">{{ BTitle }}</div>
      <div class="b-detail">
        <p>{{ BDetail1 }}</p>
        <p>{{ BDetail2 }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";

@Component({
  components: {}
})
export default class BPostIt extends Vue {
  // 1.@Prop
  // 2.property
  // 3.getter
  // 4.@Watch
  // 5.method

  @Prop({ default: "貸して！" })
  BTitle: string;

  @Prop({ default: "aaaaaaa" })
  BDetail1!: string;

  @Prop({ default: "aaaaaaa" })
  BDetail2!: string;
}
</script>
<style lang="scss" scoped>
.b-top-contents {
  margin: 20px;
  border: solid 1px rgb(185, 185, 185);
  border-radius: 0 0 20px 0;
  background-color: rgb(253, 253, 121);
  height: auto;
  box-shadow: 3px 2px 1px rgba(0, 0, 0, 0.4);

  .img {
    text-align: center;
  }

  .pin-img {
    width: 25px;
    height: auto;
  }

  .b-title {
    font-size: 25px;
    padding: 0 20px;
  }
  .b-detail {
    padding: 10px 20px;
    padding-bottom: 40px;
    font-size: 14px;
    word-wrap: normal;
  }
}
</style>