<template>
  <div>
    <div class="header">
      <div class="back-button">
        <router-link to="/quest-list">
          <b-icon icon="chevron-left" size="is-medium"></b-icon>
        </router-link>
      </div>
      <div class="page-title">検索</div>
    </div>
    <b-quest-search-container @postSearchQuestList="postSearchQuestList($event)" />
    <div class="quest-box">
      <b-quest-list :questList="questList" />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from "vue-property-decorator";
import BQuestList from "@/components/quest-search/BQuestList/BQuestList.vue";
import BQuestSearchContainer from "@/components/quest-search/BQuestSearchContainer/BQuestSearchContainer.vue";
import { QuestItem } from "@/models/quest/QuestItem";

@Component({
  components: {
    BQuestSearchContainer,
    BQuestList
  }
})
export default class BQuestSearchPage extends Vue {
  // 1.@Prop()
  // 2.property
  // 3.getter
  // 4.@Watch
  // 5.method

  @Prop({ default: () => [] })
  questList: QuestItem[];

  @Emit("postSearchQuestList")
  postSearchQuestList(param: any) {
    return param;
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
