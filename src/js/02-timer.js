// Описаний в документації
import flatpickr from 'flatpickr';
// Додатковий імпорт стилів
import 'flatpickr/dist/flatpickr.min.css';

import Notiflix from 'notiflix';

const refs = {
  notification: document.querySelector(`#datetime-picker`),
  button: document.querySelector(`[data-start]`),
  days: document.querySelector(`[data-days]`),
  hours: document.querySelector(`[data-hours]`),
  minutes: document.querySelector(`[data-minutes]`),
  seconds: document.querySelector(`[data-seconds]`),
};

refs.button.addEventListener(`click`, startCounter);

refs.button.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < options.defaultDate) {
      console.log(window.alert('Please choose a date in the future'));
      return;
    }
    refs.button.disabled = false;
    console.log(selectedDates[0]);
    const deltaTime = selectedDates[0] - options.defaultDate;
    console.log(convertMs(deltaTime));
    function updateClock({ days, hours, minutes, seconds }) {
      refs.days.textContent = `${days}`;
      refs.hours.textContent = `${hours}`;
      refs.minutes.textContent = `${minutes}`;
      refs.seconds.textContent = `${seconds}`;
    }
    updateClock(convertMs(deltaTime));
  },
};

flatpickr(refs.notification, options);

console.log(refs.notification);
console.log(refs.button);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function startCounter() {
  setInterval(() => {}, 1000);
}
// _________________________________________________
// refs.notification.addEventListener(`click`, onNotificationClick);
// refs.button.addEventListener(`click`, showNotification);

// Functions for notification

// function onNotificationClick() {
//   hideNotification();
// }

// function showNotification(event) {
//   refs.notification.classList.add(`is-visible`);
// }
// function hideNotification(event) {
//   refs.notification.classList.remove(`is-visible`);
// }

// window.alert('Please choose a date in the future');

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
// ___________________________________
// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}
// ___________________________________
// function updateClock({ days, hours, minutes, seconds }) {
//   refs.days.textContent = `${days}`;
//   refs.hours.textContent = `${hours}`;
//   refs.minutes.textContent = `${minutes}`;
//   refs.seconds.textContent = `${seconds}`;
// }

// ____________________________________________
