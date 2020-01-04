<template>
  <div>
    <div v-if="tabNum == 0">
      <div v-for="quest in categorizedHitoQuestList" :key="quest.id">
        <b-quest
          :questId="quest.id"
          :userName="quest.user_name"
          :questTitle="quest.title"
          :questStartDate="quest.start_date"
          :questDueDate="quest.due_date"
          :questReward="quest.reward"
        />
      </div>
    </div>
    <div v-if="tabNum == 1">
      <div v-for="quest in categorizedMonoQuestList" :key="quest.id">
        <b-quest
          :questId="quest.id"
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
import BQuest from "@/components/user/BQuest";
import { QuestProperty } from "@/models/quest/QuestProperty.ts";
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
  questList: QuestProperty[];

  @Prop({})
  categorizedHitoQuestList: QuestProperty[];

  @Prop({})
  categorizedMonoQuestList: QuestProperty[];
  // 2.property
  // 3.getter
  // 4.@Watch
  // 5.method
}
</script>
<style lang="scss" scoped></style>
