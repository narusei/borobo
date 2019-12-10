<template>
  <section class="sign-up">
    <div class="top-bar">
      <div class="borobo-logo">Borobo</div>
    </div>
    <div class="sign-up-content">
      <div class="card sign-up-card">
        <div class="sign-up-title">Sign Up to Borobo</div>
        <div class="card-content">
          <b-field label="user_name">
            <b-input v-model="userName"></b-input>
          </b-field>
          <b-field label="password">
            <b-input v-model="password" type="password" password-reveal></b-input>
          </b-field>
          <b-field label="re-password">
            <b-input v-model="rePassword" type="password" password-reveal></b-input>
          </b-field>
          <b-field label="profiel">
            <b-input v-model="profiel" maxlength="200" type="textarea"></b-input>
          </b-field>
          <b-field label="last_name">
            <b-input v-model="lastName"></b-input>
          </b-field>
          <b-field label="first_name">
            <b-input v-model="firstName"></b-input>
          </b-field>
          <div class="sign-up-button">
            <b-button @click="postSignUpInfo()" type="is-mainColor">Sign Up</b-button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from "vue-property-decorator";

@Component
export default class SignUpPage extends Vue {
  userName: string;
  password: string;
  rePassword: string;
  profile: string;
  lastName: string;
  firstName: string;

  @Emit("postSignUpInfo")
  postSignUpInfo() {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.sign-up {
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

.sign-up-content {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
}

.sign-up-title {
  display: flex;
  justify-content: center;
  font-size: 24px;
  margin-top: 5px;
}

.sign-up-button {
  display: flex;
  justify-content: center;
  margin-top: 15px;
}
</style>
