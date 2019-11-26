<template>
  <div>
      <div v-if="tab_num==0">
        <div v-for="n in 10" :key="n">
          <BQuest :quest="quest"></BQuest>
        </div>
      </div>
      <div v-if="tab_num==1">
        <div v-for="n in 10" :key="n">
          <BQuest></BQuest>
        </div>
      </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";
import BQuest from "@/components/quest-list/BQuest";
@Component({
  components: {
    BQuest
  }
})
export default class BQuestList extends Vue {
  // 1.@Prop
  
  @Prop({default:0})
  tab_num!: number;

  @Prop()
  questlist: {}
  // 2.property
  // 3.getter
  // 4.@Watch
  // 5.method
}
</script>
<style lang="scss"scoped>
</style>