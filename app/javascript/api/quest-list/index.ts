import axios from "axios";
export default {
    getQuestList(): any {
        let jsondata = `{
            "data_num": "2",
            "each_quest": [
              {
                "quest_id": "m_0000001",
                "stance": "demand",
                "category": "モノ",
                "account_id": "000003",
                "user_name": "大学太郎",
                "title": "電卓貸して",
                "duration": {
                  "start_date": "2019-11-30-11:10",
                  "due_date": "2019-11-30-12:50"
                }
              }
            ],
            "reward": "じゃがりこLサイズ"
          }`
        return jsondata
    },

    postQuest(): any {
        return "API response"
    }
}