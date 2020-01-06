<template>
  <div>
    <div class="search-container">
      <div class="cp-iptxt">
        <label class="ef">
          <input
            type="text"
            placeholder="ユーザー名を入力"
            v-model="searchWordAuthor"
          />
        </label>
      </div>
      <div class="cp-iptxt">
        <label class="ef">
          <input
            type="text"
            placeholder="タイトルを入力"
            v-model="searchWordTitle"
          />
        </label>
      </div>
      <div class="input-tags">
        <section>
          <b-field label>
            <b-taginput
              class="tag-input"
              v-model="searchWordTagsStr"
              ellipsis
              icon="label"
              placeholder="タグを入力"
            />
          </b-field>
        </section>
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
      <ul class="tab">
        <section>
          <div class="block">
            <b-radio v-model="pageTabStr" native-value="0" type="is-mainColor">
              モノ
            </b-radio>
            <b-radio v-model="pageTabStr" native-value="1" type="is-mainColor">
              ヒト
            </b-radio>
          </div>
        </section>
      </ul>
      <section>
        <b-button @click="searchQuestList" class="quest-search-button"
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

  pageTabStr: string = "";
  searchWordAuthor: string = "";
  searchWordTitle: string = "";
  searchWordTagsStr: string = "";
  searchWordTags: string[] = [];
  searchWordReward: string = "";

  get searchWord(): any {
    return {
      search_uname: this.searchWordAuthor,
      top: 8,
      skip: 0,
      category: this.pageTabStr,
      stance: "demand",
      search_title: this.searchWordTitle,
      search_tags: this.searchWordTags,
      search_reward: this.searchWordReward
    };
  }
  @Emit("searchQuestList")
  searchQuestList() {
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

.input-tags {
  margin: 10px;
}

.quest-search-button {
  width: 20%;
  margin-left: 78%;
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 15px;
  border: 1px solid #51e898;
  box-shadow: 1px 1px 1px 1px #bbbbbb;
}

ul.tab {
  margin-left: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
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
</style>
