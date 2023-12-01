// 시작 첫 상단 시간 함수 불러와서 작성
const clock = document.querySelector('.clock');
const timehour = new Date();



function currentTime(){
    const timehour = new Date();

    const hours = String(timehour.getHours()).padStart(2,"0");
    const minutes = String(timehour.getMinutes()).padStart(2,"0");
    clock.innerHTML = `${hours}:${minutes}`;
}
currentTime()
setInterval(currentTime,1000);
    