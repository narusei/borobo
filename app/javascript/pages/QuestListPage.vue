<template>
<div>
  <b-quest-list-page @getQuestList="getQuestList($event)" :questList="questListItem" />
</div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from "vue-property-decorator";
import { getModule } from "vuex-module-decorators";
import BQuestListPage from "@/components/quest-list/BQuestListPage";
import QuestListStore from "@/store/quest-list/index.ts";
@Component({
  components: {
    BQuestListPage
  }
})
export default class QuestListPage extends Vue {
  private questListStore = getModule(QuestListStore,this.$store); 
  //@Prop()
  //通常プロパティ
  //get
  //@Watch()
  //通常メソッド
created():void{
  this.getQuestList();
}


  get questListItem(): any{
    return this.questListStore;
  }

  getQuestList(){
    this.questListStore.getQuestList;
  }
}
</script>