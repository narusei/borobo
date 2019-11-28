<template>
  <div class="header">
    <div class="back_button" @click="back()">
      <b-icon icon="chevron-left" size="is-medium"></b-icon>
    </div>
    <div class="PageTitle">新規作成</div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";

@Component({
  components: {}
})
export default class BQuestCreateTopBar extends Vue {
  // 1.@Prop
  // 2.property
  // 3.getter
  // 4.@Watch
  // 5.method


//to back page
  back() {
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

  .back_button {
    height: 46px;
    width: 40px;
  }
  .PageTitle{
    font-size: 20px;
    margin-top: 1px;
  }
}
</style>