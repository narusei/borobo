<template>
  <div>
    <div class="header">
      <div class="back-button" @click="back()">
        <b-icon icon="chevron-left" size="is-medium"></b-icon>
      </div>
      <div class="page-title">検索</div>
    </div>
    <b-quest-search-container @postSearchQuest="postSearchQuest" />
    <ul class="tab">
      <div class="hito" @click="setTab(0)">
        ヒト
        <div id="chose" v-if="pageTabNum == 0"></div>
      </div>
      <div class="mono" @click="setTab(1)">
        モノ
        <div id="chose" v-if="pageTabNum == 1"></div>
      </div>
    </ul>
    <div class="quest-box">
      <b-quest-list v-bind:tab_num="pageTabNum" :questList="questList" />
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

  @Prop({})
  questList: QuestItem[];
  pageTabNum: number = 0;

  @Emit("getQuestList")
  getQuestList(param: any) {
    return this.questList;
  }

  setTab(num: number) {
    this.pageTabNum = num;
    if (num == 0) {
      this.getQuestList("ヒト");
    } else {
      this.getQuestList("モノ");
    }
  }

  @Emit("postSearchQuest")
  postSearchQuest(param: any) {
    console.log("aaaa");
    return param;
  }
  back() {}
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

ul.tab {
  .hito {
    font-size: 20px;
    width: 50%;
    float: left;
    text-align: center;
    padding-top: 1px;
    padding-bottom: 1px;

    #chose {
      border-bottom: solid 2px #51e898;
    }
  }
  .mono {
    font-size: 20px;
    width: 50%;
    float: right;
    text-align: center;
    padding-top: 1px;
    padding-bottom: 1px;

    #chose {
      border-bottom: solid 2px #51e898;
    }
  }
}

.quest-box {
  clear: both;
}
</style>
