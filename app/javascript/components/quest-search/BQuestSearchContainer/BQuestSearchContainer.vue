<template>
  <div>
    <div class="search-container">
      <div class="cp-iptxt">
        <label class="ef">
          <input
            type="text"
            placeholder="タイトルを入力"
            v-model="searchWordTitle"
          />
        </label>
      </div>
      <div class="cp-iptxt">
        <label class="ef">
          <input
            type="text"
            placeholder="タグを入力"
            v-model="searchWordTagsStr"
          />
        </label>
      </div>
      <div class="cp-iptxt">
        <label class="ef">
          <input
            type="text"
            placeholder="報酬を入力"
            v-model="searchWordReward"
          />
        </label>
      </div>
      <section>
        <b-button @click="postSearchQuestList" class="quest-search-button"
          >検索</b-button
        >
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch, Emit } from "vue-property-decorator";
@Component({
  components: {}
})
export default class BQuestSearchContainer extends Vue {
  // 1.@Prop
  // 2.property
  // 3.getter
  // 4.@Watch
  // 5.method
  @Prop({})
  pageTabNum: number;

  pageTabStr: string = "";
  searchWordTitle: string = "";
  searchWordTagsStr: string = "";
  searchWordTags: string[] = null;
  searchWordReward: string = "";

  get searchWord() {
    if (this.pageTabNum == 0) {
      this.pageTabStr = "ヒト";
    } else if (this.pageTabNum == 1) {
      this.pageTabStr = "モノ";
    }
    this.searchWordTags = this.replaceAll(
      this.searchWordTagsStr,
      "　",
      " "
    ).split(" ");
    return {
      searchCategory: this.pageTabStr,
      searchWordTitle: this.searchWordTitle,
      searchWordTags: this.searchWordTags,
      searchWordReward: this.searchWordReward
    };
  }
  @Emit("postSearchQuestList")
  postSearchQuestList(): any {
    return this.searchWord;
  }

  //tag splitAll
  replaceAll(str, beforeStr, afterStr) {
    var reg = new RegExp(beforeStr, "g");
    return str.replace(reg, afterStr);
  }
}
</script>
<style lang="scss" scoped>
.cp-iptxt {
  position: relative;
  margin: 10px;
}

.cp-iptxt input[type="text"] {
  padding: 8px 8px 8px 8px;
  box-sizing: border-box;
  width: 100%;
  transition: 0.3s;
  letter-spacing: 1px;
  color: #000000;
  border: 1px solid #bbbbbb;
  border-radius: 4px;
  font-size: 18px;
}
.ef input[type="text"]:focus {
  outline: none;
}

.quest-search-button {
  width: 20%;
  margin-left: 78%;
  margin-top: 0px;
  margin-bottom: 10px;
  font-size: 15px;
  border: 1px solid #51e898;
  box-shadow: 1px 1px 1px 1px #bbbbbb;
}
</style>
