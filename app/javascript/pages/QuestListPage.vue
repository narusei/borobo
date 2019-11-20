<template>
  <b-quest-list-page></b-quest-list-page>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from "vue-property-decorator";
import BQuestListPage from "@/components/quest-list/BQuestListPage";
@Component({
  components: {
    BQuestListPage
  }
})
export default class XDefaultPage extends Vue {
  //@Prop()
  //通常プロパティ
  //get
  //@Watch()
  //通常メソッド
}
</script>