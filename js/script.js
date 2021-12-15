const time = document.querySelector('.time');
const date = document.querySelector('.date');
const greetingText = document.querySelector('.greeting');
const name = document.querySelector('.name');
const body = document.querySelector('body');
const slideNext = document.querySelector('.slide-next');
const slidePrev = document.querySelector('.slide-prev');

let randomNum;

window.addEventListener('beforeunload', setLocalStorage);
window.addEventListener('load', getLocalStorage);
slideNext.addEventListener('click', getSlideNext);
slidePrev.addEventListener('click', getSlidePrev);

function showDate() {
  const dateNow = new Date;
  const option = {weekday: 'long', month: 'long', day: 'numeric'};
  const currentDate = dateNow.toLocaleDateString('en-US', option);
  date.textContent = currentDate;
}
function showTime() {
const dateNow = new Date;
const currentTime = dateNow.toLocaleTimeString();
time.textContent = currentTime;
setTimeout(showTime, 1000);
showDate();
showGreeting();
}
function showTimesOfDay() {
const dateNow = new Date;
const dateHour = dateNow.getHours();
return dateHour >= 0 && dateHour <= 5 ? 'night' : dateHour >= 6 && dateHour <= 11 ? 'morning' : dateHour >= 12 && dateHour <= 17 ? 'afternoon' : 'evening';
} 
function showGreeting() {
greetingText.textContent = `Good ${showTimesOfDay()}`;
}
function setLocalStorage() {
  localStorage.setItem('name', name.value);
}
function getLocalStorage() {
  if(localStorage.getItem('name')) {
    name.value = localStorage.getItem('name');
  }
}
function getRandomNum() {
  randomNum = Math.floor(Math.random() * (20 - 1 + 1)) + 1;
}
function getSlideNext() {
  randomNum++;
  if(randomNum === 21) {
    randomNum = 1;
  }
  setBg();
}
function getSlidePrev() {
  randomNum--;
  if(randomNum === 0) {
    randomNum = 20;
  }
  setBg();
}
function setBg() {
  const timeOfDay = showTimesOfDay();
  const bgNum = String(randomNum).padStart(2, '0');

  const img = new Image();

  img.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg`;

  img.addEventListener('load', function() {
    body.style.backgroundImage = `url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg')`

    // img.onload = () => {      
    //   body.style.backgroundImage = ...// Либо addEventListener 'load' либо этот вариант onload
    // }; 
  })
}

showTime();
getRandomNum();
setBg();