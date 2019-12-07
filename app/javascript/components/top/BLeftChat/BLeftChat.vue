<template>
  <div>
    <div class="kaiwa">
      <div class="kaiwa-text-right">
        <p class="kaiwa-text">{{ chatText }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";

@Component({
  components: {}
})
export default class BLeftChat extends Vue {
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

.kaiwa-text-right {
  position: relative;
  margin-left: 20px;
  margin-top: 20px;
  padding: 10px 30px;
  border-radius: 10px;
  background: #eee;
  margin-right: 12%;
  float: left;
}

.kaiwa-text-right:before {
  position: absolute;
  content: '';
  border: 10px solid transparent;
  top: 15px;
  //left: -25px;
}
.kaiwa-text-right:after {
  position: absolute;
  content: '';
  border: 10px solid transparent;
  border-right: 10px solid #eee;
  top: 15px;
  left: -19px;
}

.kaiwa:after,.kaiwa:before {
  clear: both;
  content: "";
  display: block;
}
</style>