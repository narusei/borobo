<template>
  <div>
    <div class="card">
      <div class="item-text">カテゴリー</div>
      <div class="cp-ipselect cp-sl01">
        <select required v-model="category">
          <option value hidden>モノ/ヒト</option>
          <option value="モノ">モノ</option>
          <option value="ヒト">ヒト</option>
        </select>
      </div>
      <div class="item-text">タイトル</div>
      <div class="cp-iptxt">
        <label class="ef">
          <input type="text" placeholder="タイトル" v-model="title" required />
        </label>
      </div>
      <div class="item-text">詳細</div>
      <form class="quest-detail">
        <textarea
          name="テキストエリア"
          rows="5"
          wrap="hard"
          placeholder="クエスト詳細"
          v-model="detail"
        ></textarea>
      </form>
      <div class="item-text">タグ</div>
      <section>
        <b-field label>
          <b-taginput
            class="tag-input"
            v-model="tags"
            ellipsis
            icon="label"
            placeholder="タグを入力"
          />
        </b-field>
      </section>

      <div class="item-text">利用開始</div>
      <b-field label>
        <b-datetimepicker
          placeholder="Type or select a date..."
          icon="calendar-today"
          v-model="startDatetime"
          editable
        ></b-datetimepicker>
      </b-field>
      <div class="item-text">利用終了</div>
      <b-field label>
        <b-datetimepicker
          placeholder="Type or select a date..."
          icon="calendar-today"
          v-model="dueDatetime"
          editable
        ></b-datetimepicker>
      </b-field>

      <div class="item-text">報酬</div>
      <div class="cp-iptxt">
        <label class="ef">
          <input type="text" placeholder="報酬を入力" v-model="reward" />
        </label>
      </div>
      <div>
        <section>
          <b-button @click="questCreate" class="quest-create-button"
            >投稿</b-button
          >
        </section>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch, Emit } from "vue-property-decorator";

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
  detail: string = "";
  tags: Array<string> = [];
  startDatetime: Date = null;
  dueDatetime: Date = null;
  reward: string = "";

  @Emit("questCreate")
  questCreate() {
    return {
      category: this.category,
      stance: "demand",
      title: this.title,
      detail: this.detail,
      tags: this.tags,
      start_date: this.startDatetime,
      due_date: this.dueDatetime,
      reward: this.reward
    };
  }
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

  .item-text {
    margin-top: 15px;
    font-size: 28px;
  }

  .cp-ipselect {
    overflow: hidden;
    width: 100%;
    margin: 0;
    text-align: center;
  }
  .cp-ipselect select {
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
  .cp-ipselect select::-ms-expand {
    display: none;
  }
  .cp-ipselect.cp-sl01 {
    position: relative;
    border: 1px solid #bbbbbb;
    background: #ffffff;
    border-radius: 4px;
  }
  .cp-ipselect.cp-sl01::before {
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
  .cp-ipselect.cp-sl01 select {
    padding: 8px 8px 8px 8px;
    color: #000000;
    border-radius: 4px;
  }

  .cp-iptxt {
    position: relative;
    width: 100%;
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

  .quest-detail {
    textarea {
      width: 100%;
      color: #000000;
      border: 1px solid #bbbbbb;
      border-radius: 4px;
      font-size: 18px;
      padding: 8px 8px 8px 8px;
    }
  }

  .quest-create-button {
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
