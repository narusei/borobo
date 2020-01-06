import http from "@/utils/requests";
const baseUrl = "http://localhost:3000/api/v1";

export default {
  getQuestList(params: any) {
    return http.get(baseUrl + "/quests", { params: params, auth: true });
  },

  createQuest(param: any) {
    return http.post(baseUrl + "/quests", { params: param, auth: true });
  },

  getQuest(questId: number): any {
    return http.get(baseUrl + "/quests/" + questId, { auth: true });
  },

  editQuest(param: any, questId: number) {
    return http.put(baseUrl + "/quests/" + questId, {
      params: param,
      auth: true
    });
  },

  deleteQuest(questId: number) {
    return http.delete(baseUrl + "/quests/" + questId, { auth: true });
  },

  searchQuestList(params: any) {
    return http.post(baseUrl + "/quests", { params: params, auth: true });
  },

  getUserItem(userId: number): any {
    return http.get(baseUrl + "/users/" + userId + "/details", { auth: true });
  },

  createUser(param: any, userId: number) {
    return http.post(baseUrl + "/users/" + userId + "/details", {
      params: param,
      auth: true
    });
  },

  updateUser(param: any, userId: number) {
    return http.put(baseUrl + "/users/" + userId + "/details", {
      params: param
    });
  },

  applyVoted(params: any, userId: number, usersInfoId: number): any {
    return http.put(
      baseUrl + "/users/" + userId + "/details/" + usersInfoId + "/review",
      {
        params: params
      }
    );
  }
};
