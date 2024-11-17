//今日の日付を取得
const today = new Date();
//yearに今日の年を代入
const year = today.getFullYear();
//monthに今日の月を代入
const month = today.getMonth() + 1;
//dateに今日にの日付を代入
const date = today.getDate();

console.log(year + '年' + month + '月' + date + '日');