const clock = document.querySelector('.clock');
const timehour = new Date();

const prev = document.querySelector('#prev');

prev.addEventListener('click',function(){
    location.href='page1.html';
});



function currentTime(){
    const timehour = new Date();

    const hours = String(timehour.getHours()).padStart(2,"0");
    const minutes = String(timehour.getMinutes()).padStart(2,"0");
    clock.innerHTML = `${hours}:${minutes}`;
}
currentTime()
setInterval(currentTime,1000);