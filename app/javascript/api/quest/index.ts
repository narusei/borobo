import http from "@/utils/requests";

export default {
  editQuest(param: any, questId: string) {
    return http.put("/api/v1/quests/" + questId, { params: param });
  }
};
