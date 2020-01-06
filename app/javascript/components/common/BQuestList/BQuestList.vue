<template>
  <div>
    <div v-if="tabNum == 0">
      <template v-if="questList.length > 0">
        <div v-for="quest in questList" :key="quest.id">
          <b-quest
            :questId="quest.id"
            :userName="quest.user_name"
            :questTitle="quest.title"
            :questStartDate="quest.start_date"
            :questDueDate="quest.due_date"
            :questReward="quest.reward"
          />
        </div>
        <template>
          <b-button @click="reload()" type="is-mainColor" expanded
            >RELOAD</b-button
          >
        </template>
      </template>
      <template v-else>
        <div class="empty-quest">クエストがありません</div>
      </template>
    </div>
    <div v-if="tabNum == 1">
      <template v-if="questList.length > 0">
        <div v-for="quest in questList" :key="quest.id">
          <b-quest
            :questId="quest.id"
            :userName="quest.user_name"
            :questTitle="quest.title"
            :questStartDate="quest.start_date"
            :questDueDate="quest.due_date"
            :questReward="quest.reward"
          />
        </div>
        <template>
          <b-button @click="reload()" type="is-mainColor" expanded
            >RELOAD</b-button
          >
        </template>
      </template>
      <template v-else>
        <div class="empty-quest">クエストがありません</div>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch, Emit } from "vue-property-decorator";
import BQuest from "@/components/common/BQuest/BQuest.vue";
import { QuestListItem } from "@/models/quest/QuestListItem.ts";
@Component({
  components: {
    BQuest
  }
})
export default class BQuestList extends Vue {
  // 1.@Prop

  @Prop({ default: 0 })
  tabNum!: number;

  @Prop({})
  questList: QuestListItem[];
  // 2.property
  // 3.getter
  // 4.@Watch
  // 5.method
  @Emit("reload")
  reload() {
    return this.tabNum;
  }
}
</script>
<style lang="scss" scoped>
.empty-quest {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
