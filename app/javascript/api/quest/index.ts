import http from "@/utils/requests";

export default {
  getQuestList(): any {
    return "API response";
  },
  getQuest(params: any, questId: string): any {
    return http.get("http://0.0.0.0:8000/quests/" + questId, {
      params: params
    });
  }
};
