<template>
  <div class="header">
    <div class="back-button" @click="back">
      <b-icon icon="chevron-left" size="is-medium"></b-icon>
    </div>
    <div class="page-title">詳細</div>
    <div class="user-edit" v-if="myQuest">
      <a @click="onDeleteQuest()">
        <b-icon icon="delete" size="is-medium" class="cogs"></b-icon>
      </a>
      <router-link
        :to="{ name: 'QuestEditPage', params: { questId: questId } }"
      >
        <b-icon icon="pencil" size="is-medium" class="cogs"></b-icon>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch, Emit } from "vue-property-decorator";
import router from "router/index";
@Component({
  components: {}
})
export default class BUserTopBar extends Vue {
  // 1.@Prop
  // 2.property
  // 3.getter
  // 4.@Watch
  // 5.method

  @Prop({ default: 0 })
  questId!: number;

  @Prop({ default: false })
  myQuest!: boolean;

  @Emit("deleteQuest")
  deleteQuest() {
    return this.questId;
  }

  // あとで対応したい
  back() {
    router.go(-1);
  }

  onDeleteQuest() {
    const answer = window.confirm("本当に削除しますか？");
    if (answer) {
      this.deleteQuest();
    } else {
      return;
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 100;
  height: 60px;
  background-color: #51e898;

  padding-top: 12px;
  padding-bottom: 9px;
  padding-left: 12px;
  padding-right: 12px;

  display: flex;

  .back-button {
    height: 46px;
    width: 40px;
  }
  .page-title {
    font-size: 20px;
    margin-top: 1px;
  }
  .user-edit {
    margin: 0 5px 0 auto;
    .cogs {
      color: rgb(87, 87, 87);
    }
  }
}
</style>
