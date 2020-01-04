<template>
  <div>
    <top-bar :pageName="pageName" />
    <b-quest-search-container :latestQid="latestQid" @searchQuestList="searchQuestList($event)" />
    <div class="quest-box">
      <b-quest-list :questList="questList" />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from "vue-property-decorator";
import BQuestList from "@/components/common/BQuestList";
import BQuestSearchContainer from "@/components/quest-search/BQuestSearchContainer/BQuestSearchContainer.vue";
import TopBar from "@/components/common/BTopBar";
import { QuestProperty } from "@/models/quest/QuestProperty";

@Component({
  components: {
    BQuestSearchContainer,
    BQuestList,
    TopBar
  }
})
export default class BQuestSearchPage extends Vue {
  // 1.@Prop()
  // 2.property
  // 3.getter
  // 4.@Watch
  // 5.method
  @Prop({})
  latestQid: number;

  @Prop({ default: () => [] })
  questList: QuestProperty[];

  @Emit("searchQuestList")
  searchQuestList(param: any) {
    return param;
  }

  pageName: string = "検索";
}
</script>

<style lang="scss" scoped>
.header {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 1;
  height: 60px;
  background-color: #51e898;

  padding-top: 12px;
  padding-bottom: 9px;
  padding-left: 12px;
  padding-right: 12px;

  display: flex;

  .back-button {
    .back-button-color {
      color: rgb(87, 87, 87);
    }
    height: 46px;
    width: 40px;
  }
  .page-title {
    font-size: 20px;
    margin-top: 1px;
  }
}

.quest-box {
  clear: both;
}
</style>
