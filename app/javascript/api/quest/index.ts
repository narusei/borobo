import http from "@/utils/requests";
const baseUrl = "http://localhost:8000";

export default {
  getQuestList(params: any) {
    return http.get(baseUrl + "/quests", { params: params });
  },

  createQuest(param: any) {
    return http.post(baseUrl + "/quests", { params: param });
  },

  getQuest(questId: number): any {
    return http.get(baseUrl + "/quests/" + questId, {});
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

  getUserItem(userId: number): any {
    return http.get(baseUrl + "/users/" + userId + "/details", {});
  },

  createUser(param: any, userId: number) {
    return http.post(baseUrl + "/users/" + userId + "/details", {
      params: param
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
