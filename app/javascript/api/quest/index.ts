import http from "@/utils/requests";

export default {
  updateUser(param: any, user_id: number) {
    return http.put(
      "http://localhost:8000/api/v1/users/" + user_id + "/users_info",
      {
        params: param
      }
    );
  }
};
