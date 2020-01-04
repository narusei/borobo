import http from "@/utils/requests";
const baseUrl = "http://localhost:8000";

export default {
  getQuestList(params: any) {
    return http.get(baseUrl + "/quests", { params: params });
  },

  createQuest(param: any) {
    return http.post(baseUrl + "/quests", { params: param });
  },

  getQuest(params: any, questId: number): any {
    return http.get(baseUrl + "/quests/" + questId, {
      params: params
    });
  },

  editQuest(param: any, questId: number) {
    return http.put(baseUrl + "/quests/" + questId, {
      params: param
    });
  },

  deleteQuest(questId: number) {
    return http.delete(baseUrl + "/quests/" + questId, {});
  },

  searchQuestList(params: any) {
    console.log(params);
    return http.post(baseUrl + "/quests", { params: params });
  },

  getUserItem(params: any, userId: number): any {
    return http.get(baseUrl + "/users/" + userId + "/users_info", {
      params: params
    });
  },

  createUser(param: any, userId: number) {
    return http.post(baseUrl + "/users/" + userId + "/users_info", {
      params: param
    });
  },

  updateUser(param: any, userId: number) {
    return http.put(baseUrl + "/users/" + userId + "/users_info", {
      params: param
    });
  },

  applyVoted(params: any, userId: number, usersInfoId: number): any {
    return http.put(
      baseUrl + "/users/" + userId + "/users_info/" + usersInfoId + "/review",
      {
        params: params
      }
    );
  }
};
