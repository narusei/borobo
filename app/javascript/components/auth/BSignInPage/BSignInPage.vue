<template>
  <section class="sign-in">
    <div class="top-bar">
      <router-link :to="{ name: 'TopPage' }">
        <div class="borobo-logo">Borobo</div>
      </router-link>
    </div>
    <div class="sign-in-content">
      <div class="card sign-in-card">
        <div class="sign-in-title">Sign In to Borobo</div>
        <div class="card-content">
          <b-field label="mail">
            <b-input v-model="mail"></b-input>
          </b-field>
          <b-field label="password">
            <b-input
              v-model="password"
              type="password"
              password-reveal
            ></b-input>
          </b-field>
          <div class="sign-in-button">
            <b-button @click="postSignInInfo()" type="is-mainColor"
              >Sign In</b-button
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from "vue-property-decorator";

@Component
export default class BSignInPage extends Vue {
  mail: string = "";
  password: string = "";

  @Emit("postSignInInfo")
  postSignInInfo() {
    return {
      email: this.mail,
      password: this.password
    };
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.sign-in {
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.top-bar {
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
}

.borobo-logo {
  margin-left: 10px;
  font-size: 27px;
}

.sign-in-content {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 10px 10px 10px;
}

.sign-in-title {
  display: flex;
  justify-content: center;
  font-size: 24px;
  margin-top: 5px;
}

.sign-in-button {
  display: flex;
  justify-content: center;
  margin-top: 15px;
}
</style>
