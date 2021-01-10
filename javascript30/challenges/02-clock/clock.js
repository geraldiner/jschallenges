// JavaScript30 JS

let date = new Date();
let degress = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;

function setSeconds() {
  date = new Date();
  seconds = date.getSeconds();
  const degrees = calculateDegrees(seconds);
  var secondHand = document.querySelector("#sec-hand");
  secondHand.style.transform = `rotate(${degrees}deg)`;
}

function setMinutes() {
  minutes = date.getMinutes();
  const degrees = calculateDegrees(minutes);

  var minuteHand = document.querySelector("#min-hand");
  minuteHand.style.transform = `rotate(${degrees}deg)`;
}

function setHours() {
  hours = date.getHours();
  const degrees = hours / 12 * 360 + 90;

  var hourHand = document.querySelector("#hr-hand");
  hourHand.style.transform = `rotate(${degrees}deg)`;
}

function calculateDegrees(num) {
  return num / 60 * 360 + 90;
}

setInterval(setClock, 1000);

function setClock() {
  setSeconds();
  setMinutes();
  setHours();
  var time = document.querySelector(".codearea h1");
  if (hours > 12) {
    hours -= 12;
  }

  time.textContent = `${hours}:${minutes}`;
}

window.onload = setClock;