import { Module, VuexModule, Action, Mutation } from "vuex-module-decorators";
import * as MUTATION from "store/auth/mutation-types";
import authApi from "api/auth";
import { AuthItem } from "@/models/auth/AuthItem";

@Module({ name: "auth", namespaced: true })
export default class AuthStore extends VuexModule {
  authItem: AuthItem = {};

  @Action({ rawError: true })
  async postSignInInfo(param: any) {
    authApi
      .postSignInInfo(param)
      .then(response => {
        this.context.commit(MUTATION.SET_AUTH_INFO, response.data.data);
        const auth_header = {
          uid: response.headers["uid"],
          client: response.headers["client"],
          "access-token": response.headers["access-token"]
        };
        this.context.commit(
          MUTATION.SET_LOCALSTRAGE_HEADER,
          JSON.stringify(auth_header)
        );
      })
      .catch(response => console.log(response));
  }

  @Action({ rawError: true })
  async postSignUpInfo(param: any) {
    authApi
      .postSignUpInfo(param)
      .then(response => {
        this.context.commit(MUTATION.SET_AUTH_INFO, response.data.data);
        const auth_header = {
          uid: response.headers["uid"],
          client: response.headers["client"],
          "access-token": response.headers["access-token"]
        };
        this.context.commit(
          MUTATION.SET_LOCALSTRAGE_HEADER,
          JSON.stringify(auth_header)
        );
      })
      .catch(response => console.log(response));
  }

  @Action({ rawError: true })
  async userSignOut() {
    authApi
      .userSignOut()
      .then(response => {
        this.context.commit(MUTATION.USER_LOG_OUT, response.data.data);
      })
      .catch(response => console.log(response));
  }

  @Mutation
  [MUTATION.SET_AUTH_INFO](payload: any) {
    this.authItem = payload;
  }

  @Mutation
  [MUTATION.SET_LOCALSTRAGE_HEADER](payload: any) {
    localStorage.setItem("AuthenticationHeader", payload);
  }

  @Mutation
  [MUTATION.USER_LOG_OUT](payload: any) {
    localStorage.removeItem("AuthenticationHeader");
  }
}
