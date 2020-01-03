import { QuestProperty } from "models/quest/QuestProperty";

export class UserItem {
  account_id?: number;
  user_name?: string;
  profile?: string;
  good?: number;
  ok?: number;
  bad?: number;
  quests?: QuestProperty[];
}
