//显示距离2023年高考还有多少天、多少小时，多少分、多少秒

const gaoKao = new Date("2024-06-6");

let now = new Date();

let dt;

let day, hours, minutes, seconds;

setInterval(() => {
  now = new Date();
  dt = gaoKao.getTime() - now.getTime();
  day = parseInt(dt / (1000 * 3600 * 24));
  hours = parseInt((dt % (1000 * 3600 * 24)) / (3600 * 1000));
  minutes = parseInt((dt % (1000 * 3600)) / (1000 * 60));
  seconds = parseInt((dt % (1000 * 60)) / 1000);
  console.log(day, hours, minutes, seconds);
}, 1000);
