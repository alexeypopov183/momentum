const time = document.querySelector('.time');
const date = document.querySelector('.date');
const greetingText = document.querySelector('.greeting');
const name = document.querySelector('.name');
const body = document.querySelector('body');


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
function showGreeting() {
const dateNow = new Date;
const dateHour = dateNow.getHours();  
function timesOfDay() {
    return dateHour >= 0 && dateHour <= 5 ? 'night' : dateHour >= 6 && dateHour <= 11 ? 'morning' : dateHour >= 12 && dateHour <= 17 ? 'day' : 'evening';
  } 
greetingText.textContent = `Good ${timesOfDay()}`;
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
  return Math.floor(Math.random() * (20 - 1 + 1)) + 1;
}
window.addEventListener('beforeunload', setLocalStorage);
window.addEventListener('load', getLocalStorage);
showTime();
body.style.backgroundImage = "url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/18.jpg')";

