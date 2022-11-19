function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  startBtn: document.querySelector('[data-start]'),
  stopBtn: document.querySelector('[data-stop]'),
  body: document.querySelector(`body`),
};
// console.log(refs.body);
// console.log(refs.startBtn);
// console.log(refs.stopBtn);

let timerId = null;

refs.startBtn.addEventListener('click', event => {
  event.preventDefault();
  timerId = setInterval(() => {
    console.log((refs.body.style.backgroundColor = getRandomHexColor()));
  }, 1000);
});

refs.startBtn.addEventListener('click', hideStartButton);

refs.stopBtn.addEventListener('click', () => {
  clearInterval(timerId);
  console.log(`Interval with id ${timerId} has stopped!`);
  showStartButton();
});

function showStartButton(event) {
  refs.startBtn.disabled = false;
}

function hideStartButton(event) {
  refs.startBtn.disabled = true;
}
