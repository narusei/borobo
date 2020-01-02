import http from "@/utils/requests";

import { UserItem } from "models/quest/UserItem";

export default {
  getQuestList(): any {
    return "API response";
  },

  getUserItem(params: any, userId: string): any {
    return http.get("http://0.0.0.0:8000/users/" + userId, { params: params });
  },

  applyVoted(params: any, userId: string): any {
    console.log("applyVote");
    return http.put("http://0.0.0.0:8000/users/" + userId + "/review", {
      params: params
    });
  }
};
