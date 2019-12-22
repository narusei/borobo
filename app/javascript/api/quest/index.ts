import http from "@/utils/requests";
export default {
  createQuest(param: any) {
    return http.post("/api/v1/quests", param);
  }
};
