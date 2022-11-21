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
  timer: document.querySelector(`.timer`),
};

refs.button.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  // isActive: false,
  onClose(selectedDates) {
    if (selectedDates[0] < Date.now()) {
      console.log(window.alert('Please choose a date in the future'));
      return;
    }

    refs.button.disabled = false;

    const currentTime = Date.now();
    const startTime = selectedDates[0];
    const deltaTime = startTime - currentTime;
    const timeComponents = convertMs(deltaTime);

    let timerId = null;

    refs.button.addEventListener(`click`, startCounter);
    refs.button.addEventListener(`click`, stopCounter);

    updateClock(timeComponents);

    function startCounter() {
      // if (options.enableTime) {
      //   return;
      // }
      // options.enableTime = false;
      refs.button.disabled = false;
      timerId = setInterval(() => {
        const currentTime = Date.now();
        const deltaTime = startTime - currentTime;
        const { days, hours, minutes, seconds } = convertMs(deltaTime);

        console.log(convertMs(selectedDates[0] - Date.now()));

        console.log(`${days}:${hours}:${minutes}:${seconds}`);

        refs.days.textContent = `${days}`;
        refs.hours.textContent = `${hours}`;
        refs.minutes.textContent = `${minutes}`;
        refs.seconds.textContent = `${seconds}`;
      }, 1000);
    }
    function stopCounter() {
      // options.enableTime = false;
      setTimeout(() => {
        clearInterval(timerId);
      }, selectedDates[0] - Date.now());
    }
  },
};

flatpickr(refs.notification, options);

function updateClock({ days, hours, minutes, seconds }) {
  refs.days.textContent = `${days}`;
  refs.hours.textContent = `${hours}`;
  refs.minutes.textContent = `${minutes}`;
  refs.seconds.textContent = `${seconds}`;
}

function addLeadingZero(value) {
  return String(value).padStart(2, `0`);
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
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

// function convertMs(ms) {
//   // Number of milliseconds per unit of time
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;

//   // Remaining days
//   const days = Math.floor(ms / day);
//   // Remaining hours
//   const hours = Math.floor((ms % day) / hour);
//   // Remaining minutes
//   const minutes = Math.floor(((ms % day) % hour) / minute);
//   // Remaining seconds
//   const seconds = Math.floor((((ms % day) % hour) % minute) / second);

//   return { days, hours, minutes, seconds };
// }
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
// console.log(
//   (refs.days.textContent = `${days}`),
//   (refs.hours.textContent = `${hours}`),
//   (refs.minutes.textContent = `${minutes}`),
//   (refs.seconds.textContent = `${seconds}`)
// );
// ___________________________________________
// console.log(refs.timer);

// console.log(refs.notification);
// console.log(refs.button);
