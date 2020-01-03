import http from "@/utils/requests";
const baseUrl = "http://localhost:8000";

export default {
  postSignInInfo(params: any) {
    return http.post(baseUrl + "/api/v1/auth/sign_in", { params: params });
  },
  postSignUpInfo(params: any) {
    return http.post(baseUrl + "/api/v1/auth/sign_up", { params: params });
  }
};
