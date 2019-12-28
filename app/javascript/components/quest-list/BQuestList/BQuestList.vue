<template>
  <div>
    <div v-if="tabNum == 0">
      <div v-for="quest in questList" :key="quest.quest_id">
        <b-quest
          :questId="quest.quest_id"
          :userName="quest.user_name"
          :questTitle="quest.title"
          :questStartDate="quest.start_date"
          :questDueDate="quest.due_date"
          :questReward="quest.reward"
        />
      </div>
    </div>
    <div v-if="tabNum == 1">
      <div v-for="quest in questList" :key="quest.quest_id">
        <b-quest
          :userName="quest.user_name"
          :questTitle="quest.title"
          :questStartDate="quest.start_date"
          :questDueDate="quest.due_date"
          :questReward="quest.reward"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";
import BQuest from "@/components/quest-list/BQuest";
import { QuestListItemProperty } from "@/models/quest/QuestListItemProperty.ts";
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
  questList: QuestListItemProperty[];
  // 2.property
  // 3.getter
  // 4.@Watch
  // 5.method
}
</script>
<style lang="scss" scoped></style>
