<template>
  <div>{{ hello }}</div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from "vue-property-decorator";
@Component({})
export default class XDefaultPage extends Vue {
  //@Prop()
  //通常プロパティ
  hello: string = "Hello QuestListPage!";
  //get
  //@Watch()
  //通常メソッド
}
</script>

<style lang="scss" scoped>
</style>