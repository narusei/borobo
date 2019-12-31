import http from "@/utils/requests";

export default {
  postSignUpInfo(params: any) {
    return http.post("/api/v1/auth/sign_up", { params: params });
  }
};
