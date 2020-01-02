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
      <BQuestList :tab_num="pageTabNum" :questList="showQuestList"></BQuestList>
    </div>
    <footer></footer>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from "vue-property-decorator";
import BQuestList from "@/components/user/BQuestList/BQuestList.vue";
import { QuestProperty } from "@/models/quest/QuestProperty";
@Component({
  components: {
    BQuestList
  },
  filters: {}
})
export default class BQuestListPage extends Vue {
  // 1.@Prop()
  // 2.property
  // 3.getter
  // 4.@Watch
  // 5.method
  @Prop({})
  questList: QuestProperty[];

  categorizedHitoQuestList: QuestProperty[] = [];
  categorizedMonoQuestList: QuestProperty[] = [];
  showQuestList: QuestProperty[] = [];

  //未変更 Userに関連のあるクエスト取ってくる

  created() {
    // for (var i = 0; i < 1; i++) {
    //   if (this.questList[i].category == "ヒト") {
    //     this.categorizedHitoQuestList.push(this.questList[i]);
    //   } else if (this.questList[i].category == "モノ") {
    //     this.categorizedMonoQuestList.push(this.questList[i]);
    //   }
    // }
    console.log(this.questList);
    console.log(this.categorizedMonoQuestList);
    console.log(this.categorizedHitoQuestList);
  }

  pageTabNum: number = 0;
  setTab(num: number) {
    this.pageTabNum = num;
    this.showQuestList = [];
    if (this.pageTabNum == 0) {
      this.showQuestList = this.categorizedHitoQuestList;
    } else if (this.pageTabNum == 1) {
      this.showQuestList = this.categorizedMonoQuestList;
    }
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
