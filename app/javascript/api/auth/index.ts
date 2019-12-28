import http from "@/utils/requests";

export default {
  postSignInInfo(params: any) {
    return http.post("/api/v1/auth/sign_in", { params: params });
  }
};
