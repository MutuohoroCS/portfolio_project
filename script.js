function updateTime(){
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let date = new Date();
let utcTime = date;
let currentDay = weekday[date.getDay()];

document.getElementById('time').textContent = utcTime;
document.getElementById('day').textContent = currentDay;

}
updateTime();
setInterval(updateTime, 1000);