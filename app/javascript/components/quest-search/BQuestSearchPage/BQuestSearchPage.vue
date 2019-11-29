<template>
  <div>
    <div class="header">
      <div class="back_button" @click="back()">
        <b-icon icon="chevron-left" size="is-medium"></b-icon>
      </div>
      <div class="PageTitle">検索</div>
    </div>
    <BQuestSearchContainer class="TopBar" />
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
import BQuestList from "@/components/quest-search/BQuestList/BQuestList.vue";
import BQuestSearchContainer from "@/components/quest-search/BQuestSearchContainer/BQuestSearchContainer.vue";

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

  page_tab_num: number = 0;

  quest_search() {
    //alert();
  }

  setTab(num: number) {
    this.page_tab_num = num;
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

  .back_button {
    height: 46px;
    width: 40px;
  }
  .PageTitle {
    font-size: 20px;
    margin-top: 1px;
  }
}

//tab hito mono
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