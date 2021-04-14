import colors from './data/colors';
import randomIntegerFromInterval from './js/random-color';

let intervalId = null;
let isIntervalId = false;
const refs = {
  btnStart: document.querySelector('button[data-action="start"]'),
  btnStop: document.querySelector('button[data-action="stop"]'),
};

refs.btnStart.addEventListener('click', onStartBtnClick);
refs.btnStop.addEventListener('click', onStopBtnClick);

function onStartBtnClick() {
  if (isIntervalId) return;
  isIntervalId = true;

  // 2 варинат
  // refs.btnStart.disabled = true;

  intervalId = setInterval(changeBgColor, 1000);
}

function onStopBtnClick() {
  clearInterval(intervalId);
  isIntervalId = false;

  // 2 варинат
  // refs.btnStart.disabled = false;
}

function changeBgColor() {
  document.body.style.backgroundColor =
    colors[randomIntegerFromInterval(0, colors.length - 1)];
}
