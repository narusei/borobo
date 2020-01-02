<template>
  <div>
    <div>
      <header class="header">
        <div class="header-container">
          <router-link :to="{ name: 'UserPage', params: { toMyPage: true } }">
            <b-icon
              class="user-icon"
              icon="account-circle"
              size="is-large"
            ></b-icon>
          </router-link>
          <router-link :to="{ name: 'QuestSearchPage' }">
            <b-icon icon="magnify" size="is-medium" class="magnify"></b-icon>
          </router-link>
        </div>
      </header>
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
        <b-quest-list v-bind:tabNum="pageTabNum" :questList="questList" />
      </div>
    </div>
    <div class="plus-icon-button">
      <router-link :to="{ name: 'QuestCreatePage' }">
        <b-icon class="plus-icon" icon="plus-circle" size="is-large"></b-icon>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from "vue-property-decorator";

import BQuestList from "@/components/quest-list/BQuestList";
import QuestCreatePage from "@/pages/QuestCreatePage.vue";
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

  toSearchPage() {}

  toCreateQuest() {}
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
  .hito {
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

.plus-icon-button {
  position: fixed;
  right: 8%;
  bottom: 5%;
  z-index: 100;
  .plus-icon {
    color: #51e898;
  }
}
</style>
