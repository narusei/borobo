<template>
  <div class="kaiwa">
    <div class="kaiwa-text-left">
      <p class="kaiwa-text">{{chatText}}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";

@Component({
  components: {}
})
export default class BRightChat extends Vue {
  // 1.@Prop
  // 2.property
  // 3.getter
  // 4.@Watch
  // 5.method
  @Prop({default:""})
  chatText!:string
}
</script>
<style lang="scss" scoped>
.kaiwa {
  margin-bottom: 25px;
}
.kaiwa-text-left {
  position: relative;
  margin-right: 20px;
  padding: 10px 30px;
  border-radius: 10px;
  background-color: #ffffff;
  margin-left: 12%;
  float: right;
}
p.kaiwa-text {
  margin: 0 0 20px;
}
p.kaiwa-text:last-child {
  margin-bottom: 0;
}
.kaiwa-text-left:before {
  position: absolute;
  content: '';
  border: 10px solid transparent;
  top: 15px;
  right: -20px;
}
.kaiwa-text-left:after {
  position: absolute;
  content: '';
  border: 10px solid transparent;
  border-left: 10px solid #ffffff;
  top: 15px;
  right: -19px;
}
</style>