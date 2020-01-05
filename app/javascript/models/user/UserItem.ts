import { QuestListItem } from "models/quest/QuestListItem";

export class UserItem {
  id?: number;
  user_id?: number;
  user_name?: string;
  profile?: string;
  good?: number;
  ok?: number;
  bad?: number;
  quests?: QuestListItem[];
}
