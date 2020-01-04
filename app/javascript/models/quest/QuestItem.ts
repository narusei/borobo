export class QuestItem {
  id?: number;
  stance?: string;
  category?: string;
  user_name?: string;
  user_id?: number;
  title?: string;
  detail?: string;
  tags?: Array<string>;
  start_date?: string;
  due_date?: string;
  reward?: string;
}

// {
//    "id": "m_0000001",
//    "category": "モノ",
//    "user_name": "トニー"
//    "stance": "demand",
//    "title": "関数電卓を貸して！",
//    "detail": "関数電卓、、借してほしーの",
//    "start_date": "2019-11-30-11:10",
//    "due_date": "2019-11-30-12:50",
//    "reward": "aaa"
//  }
