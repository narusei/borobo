<template>
  <div>
    <div class="search_container">
      <div class="cp_iptxt">
        <label class="ef">
          <input type="text" placeholder="タイトルを入力" v-model="search_word_title" />
        </label>
      </div>
      <div class="cp_iptxt">
        <label class="ef">
          <input type="text" placeholder="タグを入力" v-model="search_word_tags" />
        </label>
      </div>
      <div class="cp_iptxt">
        <label class="ef">
          <input type="text" placeholder="報酬を入力" v-model="search_word_title" />
        </label>
      </div>
      <section>
        <b-button @click="quest_search" class="quest_search_button">検索</b-button>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";
@Component({
  components: {}
})
export default class NAME extends Vue {
  // 1.@Prop
  // 2.property
  // 3.getter
  // 4.@Watch
  // 5.method

  search_word_title: string = "";
  search_word_tags: [];
  search_word_reword: string = "";
}
</script>
<style lang="scss" scoped>

//search word (title,tag,reword)
.cp_iptxt {
  position: relative;
  margin: 10px;
}

.cp_iptxt input[type="text"] {
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

.quest_search_button {
  width: 20%;
  margin-left: 78%;
  margin-top: 0px;
  margin-bottom: 10px;
  font-size: 15px;
  border: 1px solid #51e898;
  box-shadow: 1px 1px 1px 1px #bbbbbb;
}
</style>