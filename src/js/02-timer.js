import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const startBtnRef = document.querySelector('[data-start]');
const timerRef = document.querySelector('.timer');

let DATA = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    if (selectedDates[0] < new Date()) {
      // если выбраное время меньше текущего (прям вот текущего-текущего)
      Notify.failure('Please choose a date in the future');
      // вместо алерта выводим меседж
      this.startBtn.disabled = true;
      //делаем кнопку не активной (она может быть активной после прошлых действий)
      return;
      // обрываем функцию
    }
    timer.startBtn.classList.add('is_active');
    //добавляем класс css (украшательство)
    timer.startBtn.disabled = false;
    //делаем кноку старт активной
    timer.selectedDates = selectedDates[0];
  },
};
flatpickr('#datetime-picker', options);

const timer = {
  intervalId: null,
  refs: {},
  start(rootSelector, deadline) {
    if (!deadline) {
      return;
    }
    const delta = deadline.getTime() - Date.now();
    if (delta <= 0) {
      Notify.failure(`Please choose a date in the future`, {
        position: `center-center`,
        backOverlay: true,
        clickToClose: true,
        closeButton: true,
      });
      return;
    }

    Notify.success(`good job`, {
      position: `center-center`,
      backOverlay: true,
      clickToClose: true,
      closeButton: true,
    });

    function convertMs(ms) {
      const second = 1000;
      const minute = second * 60;
      const hour = minute * 60;
      const day = hour * 24;

      const days = Math.floor(ms / day);
      const hours = Math.floor((ms % day) / hour);
      const minutes = Math.floor(((ms % day) % hour) / minute);
      const seconds = Math.floor((((ms % day) % hour) % minute) / second);

      return { days, hours, minutes, seconds };
    }

    this.getRefs(rootSelector);

    this.intervalId = setInterval(() => {
      const diff = deadline.getTime() - Date.now();
      if (diff <= 1000) {
        clearInterval(this.intervalId);
        Notify.success(`deadlin`, {
          position: `center-center`,
          backOverlay: true,
          clickToClose: true,
          closeButton: true,
        });
      }
      const data = convertMs(diff);

      console.log(data);
      this.refs.days.textContent = this.zeroAdd(data.days);
      this.refs.hours.textContent = this.zeroAdd(data.hours);
      this.refs.minutes.textContent = this.zeroAdd(data.minutes);
      this.refs.seconds.textContent = this.zeroAdd(data.seconds);
    }, 1000);
  },
  getRefs(rootSelector) {
    this.refs.days = rootSelector.querySelector('[data-days]');
    this.refs.hours = rootSelector.querySelector('[data-hours]');
    this.refs.minutes = rootSelector.querySelector('[data-minutes]');
    this.refs.seconds = rootSelector.querySelector('[data-seconds]');
  },
  zeroAdd(value) {
    return String(value).padStart(2, '0');
  },
};

startBtnRef.addEventListener('click', timer.start(timerRef, DATA));
