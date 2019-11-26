<template>
  <div>
    <header class="header">
      <div class="header-container">
        <b-icon class="user_icon" icon="account-circle" size="is-large"></b-icon>
        <div @click="to_search_page">
          <b-icon icon="magnify" size="is-medium" class="magnify">
          </b-icon>
        </div>
      </div>
    </header>
    <ul class="tab">
      <div class="hito" @click="setTab(0)">
        ヒト
        <div id="chose" v-if="page_tab_num==0"></div>
      </div>
      <div class="mono" @click="setTab(1)">
        モノ
        <div id="chose" v-if="page_tab_num==1"></div>
      </div>
    </ul>
    <div class="quest_box">
      <BQuestList v-bind:tab_num="page_tab_num" :questlist="questlist"></BQuestList>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from "vue-property-decorator";
import BQuestList from "@/components/quest-list/BQuestList";

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
  search_word: string = "";

  page_tab_num: number = 0;
  setTab(num: number) {
    this.page_tab_num = num;
  }

  to_search_page() {
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

  .user_icon {
    border-radius: 50%; /* 角丸半径を50%にする(=円形にする) */
    width: 42px; /* ※縦横を同値に */
    height: 42px; /* ※縦横を同値に */
  }
  .header-container {
    display: flex;
    justify-content: space-between;
    .magnify {
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
.quest_box {
  clear: both;
}

</style>