<template>
  <div class="header">
    <div class="back-button" @click="back()">
      <b-icon icon="chevron-left" size="is-medium"></b-icon>
    </div>
    <div class="page-title">{{ pageName }}</div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";
import router from "@/router/index";
@Component({
  components: {}
})
export default class BUserTopBar extends Vue {
  // 1.@Prop
  // 2.property
  // 3.getter
  // 4.@Watch
  // 5.method
  @Prop({ default: "borobo" })
  pageName!: string;

  back() {
    router.go(-1);
  }
}
</script>

<style lang="scss" scoped>
.header {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 100;
  height: 60px;
  background-color: #51e898;

  padding-top: 12px;
  padding-bottom: 9px;
  padding-left: 12px;
  padding-right: 12px;

  display: flex;

  .back-button {
    height: 46px;

    width: 40px;
  }
  .page-title {
    font-size: 20px;

    margin-top: 1px;
  }
}
</style>
