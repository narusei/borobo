import { Module, VuexModule, Action, Mutation } from "vuex-module-decorators";
import * as MUTATION from "store/auth/mutation-types";
import authApi from "api/auth";

@Module({ name: "auth", namespaced: true })
export default class AuthStore extends VuexModule {
  authInfo: {} = {};

  @Action({ rawError: true })
  async postSignInInfo(param: any) {
    authApi
      .postSignInInfo(param)
      .then(response => {
        this.context.commit(MUTATION.SET_AUTH_INFO, response.data);
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

  @Mutation
  [MUTATION.SET_AUTH_INFO](payload: any) {
    this.authInfo = payload;
  }

  @Mutation
  [MUTATION.SET_LOCALSTRAGE_HEADER](payload: any) {
    localStorage.setItem("AuthenticationHeader", payload);
  }
}
