<template>
  <b-user-edit-page />
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from "vue-property-decorator";
import BUserEditPage from "@/components/user-edit/BUserEditPage";
@Component({
  components: {
    BUserEditPage
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