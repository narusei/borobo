import http from "@/utils/requests";
export default {
  getQuestList(params: any) {
    return http.get("http://0.0.0.0:8000/quests", { params: params });
  },
  searchQuestList(params: any) {
    return http.post("http://0.0.0.0:8000/quests", { params: params });
  }
};
