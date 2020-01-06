<template>
  <div>
    <top-bar :pageName="'検索'" />
    <b-quest-search-container @searchQuestList="searchQuestList($event)" />
    <div class="quest-box">
      <b-quest-list :questList="questList" @reload="reload($event)" />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from "vue-property-decorator";
import BQuestList from "@/components/common/BQuestList";
import BQuestSearchContainer from "@/components/quest-search/BQuestSearchContainer/BQuestSearchContainer.vue";
import TopBar from "@/components/common/BTopBar";
import { QuestListItem } from "@/models/quest/QuestListItem";
import { QuestSearchParameter } from "@/models/quest/QuestSearchParameter";

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

  @Prop({ default: () => [] })
  questList: QuestListItem[];

  searchParamModel?: QuestSearchParameter;

  @Emit("searchQuestList")
  searchQuestList(param: QuestSearchParameter) {
    this.searchParamModel = { ...param };
    return param;
  }

  @Emit("reload")
  reload(num: number) {
    this.searchParamModel.category = num;
    this.searchParamModel.stance = "demand";
    this.searchParamModel.skip = this.questList.length;
    this.searchParamModel.top = 8;
    return this.searchParamModel;
  }
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
