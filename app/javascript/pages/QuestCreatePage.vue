<template>
  <b-quest-create-page></b-quest-create-page>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from "vue-property-decorator";
import BQuestCreatePage from "@/components/quest-create/BQuestCreatePage";
@Component({
  components: {
    BQuestCreatePage
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