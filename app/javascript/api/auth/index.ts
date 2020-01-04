import http from "@/utils/requests";
const baseUrl = "http://localhost:8000";

export default {
  postSignInInfo(params: any) {
    return http.post(baseUrl + "/auth/sign_in", { params: params });
  },
  postSignUpInfo(params: any) {
    return http.post(baseUrl + "/auth", { params: params });
  },
  userSignOut() {
    return http.delete(baseUrl + "/auth/sign_out", {});
  }
};
