<template>
  <div>
    <div class="card">
      <div class="item_text">カテゴリー</div>
      <div class="cp_ipselect cp_sl01">
        <select required v-model="category">
          <option value hidden>モノ/ヒト</option>
          <option value="モノ">モノ</option>
          <option value="ヒト">ヒト</option>
        </select>
      </div>
      <div class="item_text">タイトル</div>
      <div class="cp_iptxt">
        <label class="ef">
          <input type="text" placeholder="タイトル" v-model="title" required />
        </label>
      </div>
      <div class="item_text">詳細</div>
      <form class="quest_detail">
        <textarea name="テキストエリア" rows="5" wrap="hard" placeholder="クエスト詳細"></textarea>
      </form>
      <div class="item_text">タグ</div>
      <section>
        <b-field label="">
          <b-taginput　class="tag_input" v-model="tags" ellipsis icon="label" placeholder="タグを入力"/>
        </b-field>
      </section>

      <div class="item_text">利用開始</div>
      <b-field label>
        <b-datetimepicker
          placeholder="Type or select a date..."
          icon="calendar-today"
          v-model="start_datetime"
          editable
        ></b-datetimepicker>
      </b-field>
      {{start_datetime}}
      <div class="item_text">利用終了</div>
      <b-field label>
        <b-datetimepicker
          placeholder="Type or select a date..."
          icon="calendar-today"
          v-model="end_datetime"
          editable
        ></b-datetimepicker>
      </b-field>

      <div class="item_text">報酬</div>
      <div class="cp_iptxt">
        <label class="ef">
          <input type="text" placeholder="報酬を入力" v-model="reword" />
        </label>
      </div>
      <div>
        <section>
          <b-button @click="quest_create" class="quest_create_button">投稿</b-button>
        </section>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";

@Component({
  components: {}
})
export default class BQuestCreate extends Vue {
  // 1.@Prop
  // 2.property
  // 3.getter
  // 4.@Watch
  // 5.method
  category: string = "";
  title: string = "";
  tags:Array<string>=[];
  start_datetime: Date = null;
  end_datetime: Date = null;
  reword: string = "";

  //quest_create
  quest_create() {}
}
</script>


<style lang="scss" scoped>
.card {
  width: 90%;
  border: 1px solid #51e898;
  -webkit-border-radius: 6px;
  -moz-border-radius: 6px;
  border-radius: 6px;
  background-color: #fff;
  margin: 16px auto;
  padding: 0px 24px;

  .item_text {
    margin-top: 15px;
    font-size: 28px;
  }

  //category pulldown
  .cp_ipselect {
    overflow: hidden;
    width: 100%;
    margin: 0;
    text-align: center;
  }
  .cp_ipselect select {
    width: 100%;
    padding-right: 1em;
    cursor: pointer;
    text-indent: 0.01px;
    text-overflow: ellipsis;
    border: none;
    outline: none;
    background: transparent;
    background-image: none;
    box-shadow: none;
    -webkit-appearance: none;
    appearance: none;
    font-size: 18px;
  }
  .cp_ipselect select::-ms-expand {
    display: none;
  }
  .cp_ipselect.cp_sl01 {
    position: relative;
    border: 1px solid #bbbbbb;
    background: #ffffff;
    border-radius: 4px;
  }
  .cp_ipselect.cp_sl01::before {
    position: absolute;
    top: 1.2em;
    right: 0.9em;
    width: 0;
    height: 0;
    padding: 0;
    content: "";
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 6px solid #666666;
    pointer-events: none;
  }
  .cp_ipselect.cp_sl01 select {
    padding: 8px 8px 8px 8px;
    color: #000000;
    border-radius: 4px;
  }

  //title textbox
  .cp_iptxt {
    position: relative;
    width: 100%;
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

  .quest_detail {
    textarea {
      width: 100%;
      color: #000000;
      border: 1px solid #bbbbbb;
      border-radius: 4px;
      font-size: 18px;
      padding: 8px 8px 8px 8px;
    }
  }

  //tag
  
  //quest_create
  .quest_create_button {
    width: 20%;
    margin-left: 78%;
    margin-top: 20px;
    margin-bottom: 10px;
    font-size: 18px;
    border: 1px solid #51e898;
    box-shadow: 1px 1px 1px 1px #bbbbbb;
  }
}
</style>