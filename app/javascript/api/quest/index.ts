import http from "@/utils/requests";
export default {
  createUser(param: any) {
    return http.post("http://localhost:8000/api/v1/users_info", {
      params: param
    });
  },

  updateUser(param: any, user_id: number) {
    return http.put(
      "http://localhost:8000/api/v1/users/" + user_id + "/users_info",
      {
        params: param
      }
    );
  },

  getQuestList(params: any) {
    return http.get("http://0.0.0.0:8000/quests", { params: params });
  },

  getQuest(params: any, questId: string): any {
    return http.get("http://0.0.0.0:8000/quests/" + questId, {
      params: params
    });
  },

  createQuest(param: any) {
    return http.post("/api/v1/quests", { params: param });
  },

  editQuest(param: any, questId: string) {
    return http.put("/api/v1/quests/" + questId, { params: param });
  }
};
