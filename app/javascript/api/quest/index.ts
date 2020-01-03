import http from "@/utils/requests";
const baseUrl = "http://localhost:8000";

export default {
  createUser(param: any) {
    return http.post(baseUrl + "/api/v1/users_info", {
      params: param
    });
  },

  updateUser(param: any, user_id: number) {
    return http.put(baseUrl + "/api/v1/users/" + user_id + "/users_info", {
      params: param
    });
  },

  getQuestList(params: any) {
    return http.get(baseUrl + "/api/v1/quests", { params: params });
  },

  getQuest(params: any, questId: string): any {
    return http.get(baseUrl + "/api/v1/quests/" + questId, {
      params: params
    });
  },

  createQuest(param: any) {
    return http.post(baseUrl + "/api/v1/quests", { params: param });
  },

  editQuest(param: any, questId: string) {
    return http.put(baseUrl + "/api/v1/quests/" + questId, { params: param });
  },

  searchQuestList(params: any) {
    return http.post(baseUrl + "/api/v1/quests/", { params: params });
  },

  getUserItem(params: any, userId: string): any {
    return http.get(baseUrl + "/api/v1/users/" + userId, { params: params });
  },

  applyVoted(params: any, userId: string): any {
    console.log("applyVote");
    return http.put(baseUrl + "/api/v1/users/" + userId + "/review", {
      params: params
    });
  }
};
