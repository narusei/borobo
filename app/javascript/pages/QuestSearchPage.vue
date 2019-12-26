<template>
  <b-quest-search-page></b-quest-search-page>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from "vue-property-decorator";
import BQuestSearchPage from "@/components/quest-search/BQuestSearchPage";
@Component({
  components: {
    BQuestSearchPage
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