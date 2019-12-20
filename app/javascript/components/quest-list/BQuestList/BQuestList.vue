<template>
  <div>
    <div v-for="quest in questList" :key="quest">
      {{ quest }}
    </div>
    <div v-if="tabNum==0">
      <div v-for="n in 10" :key="n">
        <b-quest />
      </div>
    </div>
    <div v-if="tabNum==1">
      <div v-for="n in 10" :key="n">
        <b-quest />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";
import BQuest from "@/components/quest-list/BQuest";
import { QuestItem } from "@/models/quest-list/QuestItem.ts";
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
  questList: any[];
  // 2.property
  // 3.getter
  // 4.@Watch
  // 5.method
}
</script>
<style lang="scss"scoped>
</style>