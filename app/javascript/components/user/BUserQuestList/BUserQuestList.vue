<template>
  <div>
    <ul class="tab">
      <div class="tab-hito" @click="setTab(0)">
        ヒト
        <div id="chose" v-if="pageTabNum == 0"></div>
      </div>
      <div class="tab-mono" @click="setTab(1)">
        モノ
        <div id="chose" v-if="pageTabNum == 1"></div>
      </div>
    </ul>
    <div class="quest-box">
      <BQuestList
        :tabNum="pageTabNum"
        :questList="questList"
        :categorizedHitoQuestList="categorizedHitoQuestList"
        :categorizedMonoQuestList="categorizedMonoQuestList"
      ></BQuestList>
    </div>
    <footer></footer>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit, Watch } from "vue-property-decorator";
import BQuestList from "@/components/user/BQuestList/BQuestList.vue";
import { QuestProperty } from "@/models/quest/QuestProperty";

@Component({
  components: {
    BQuestList
  }
})
export default class BQuestListPage extends Vue {
  // 1.@Prop()
  // 2.property
  // 3.getter
  // 4.@Watch
  // 5.method
  @Prop({})
  questList: QuestProperty[];

  pageTabNum: number = 0;
  categorizedHitoQuestList: QuestProperty[] = [];
  categorizedMonoQuestList: QuestProperty[] = [];

  //未変更 Userに関連のあるクエスト取ってくる

  @Watch("questList")
  setQuestList() {
    this.categorizedHitoQuestList = this.questList.filter(
      row => row.category == "ヒト"
    );
    this.categorizedMonoQuestList = this.questList.filter(
      row => row.category == "モノ"
    );
    console.log(this.categorizedHitoQuestList);
    console.log(this.categorizedMonoQuestList);
  }

  setTab(num: number) {
    this.pageTabNum = num;
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

  padding-top: 9px;
  padding-bottom: 9px;
  padding-left: 12px;
  padding-right: 12px;

  .user-icon {
    color: rgb(87, 87, 87);
    border-radius: 50%; /* 角丸半径を50%にする(=円形にする) */
    width: 42px; /* ※縦横を同値に */
    height: 42px; /* ※縦横を同値に */
  }
  .header-container {
    display: flex;
    justify-content: space-between;
    .magnify {
      color: rgb(87, 87, 87);
      margin-top: 3px;
    }
  }
}

ul.tab {
  .tab-hito {
    /* Text/Regular 14px */
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
  .tab-mono {
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

footer {
  height: 60px;
  background-color: #51e898;
}
</style>
