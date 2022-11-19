function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const refs = {
  body: document.querySelector(`body`),
};
// console.log(refs.body);
// console.log(startBtn);
// console.log(stopBtn);

let timerId = null;

startBtn.addEventListener('click', event => {
  event.preventDefault();
  timerId = setInterval(() => {
    console.log((refs.body.style.backgroundColor = getRandomHexColor()));
  }, 1000);
});

stopBtn.addEventListener('click', () => {
  clearInterval(timerId);
  console.log(`Interval with id ${timerId} has stopped!`);
});

// const timerId = setInterval(callback, delay, arg1, arg2);

// 1. додати івент лістенер на баттон старт (`click`, функція SetTimeOut)

// function SetTimeOut() {

// }
// const timerId = setTimeout(callback, delay, arg1, arg2, ...);
