import http from "@/utils/requests";
export default {
    getQuestList(param:any): any{
        console.log("api catch")
        return [
            {
              quest_id: 0,
              category: "モノ",
              stance: "demand",
              title: "関数電卓を貸してください",
              user_name: "トニー",
              detail:
                "2限の時間に電卓貸してください。お願いします。何でもしますから！",
              tag: ["string"],
              start_date: "11/29 11:10",
              due_date: "11/30 12:50",
              reward: "じゃがりこLサイズ"
            },
            {
              quest_id: 1,
              category: "モノ",
              stance: "demand",
              title: "電卓を貸してください",
              user_name: "aaa",
              detail:
                "2限の時間に電卓貸してください。お願いします。何でもしますから！",
              tag: ["string"],
              start_date: "11/3 11:10",
              due_date: "11/6 12:50",
              reward: "じゃがりこMサイズ"
            },
            {
              quest_id: 2,
              category: "モノ",
              stance: "demand",
              title: "関電を貸してください",
              user_name: "bbb",
              detail:
                "2限の時間に電卓貸してください。お願いします。何でもしますから！",
              tag: ["string"],
              start_date: "11/10 11:10",
              due_date: "11/16 12:50",
              reward: "じゃがりこSサイズ"
            }
        ];
    },
}
