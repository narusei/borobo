import { QuestListItemProperty } from "models/quest/QuestListItemProperty";

export class UserItem {
  id: string;
  name: string;
  detail: string;
  good: number;
  ok: number;
  bad: number;
  quests: QuestListItemProperty[];

  // {
  //     "id": "17fi080",
  //     "name": "nakam",
  //     "detail": "hello",
  //     "good": 12,
  //     "ok": 1,
  //     "bad": 9,
  //   　"quests": [
  //     　{
  //       　"quest_id": 1,
  //       　"title": "hello",
  //       　"detail": "yessss",
  //       　"username": "nakam",
  //       　"category": "mono",
  //       　"start_date": "12/20",
  //       　"due_date": "12/24",
  //       　"reward": "musashi1"
  //     　}
  //   　]
  //   }
}
