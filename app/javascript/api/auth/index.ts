import http from "@/utils/requests";
const baseUrl = "http://118.27.22.110:8080/api/v1";

export default {
  postSignInInfo(params: any) {
    return http.post(baseUrl + "/auth/sign_in", { params: params });
  },
  postSignUpInfo(params: any) {
    return http.post(baseUrl + "/auth", { params: params });
  },
  userSignOut() {
    return http.delete(baseUrl + "/auth/sign_out", { auth: true });
  }
};
