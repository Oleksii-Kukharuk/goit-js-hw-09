import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const startBtnRef = document.querySelector('[data-start]');
const timerRef = document.querySelector('.timer');

const DATA = new Date(2022, 9, 6, 23, 00);

flatpickr('#datetime-picker', {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
});

const timer = {
  intervalId: null,
  refs: {},
  start(rootSelector, deadline) {
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

    this.getRefs(rootSelector);

    this.intervalId = setInterval(() => {
      const delta = deadline.getTime() - Date.now;
      console.log(`delta`, delta);
    }, 1000);
  },
  getRefs(rootSelector) {
    this.refs.days = rootSelector.querySelector('[data-days]');
    this.refs.hours = rootSelector.querySelector('[data-hours]');
    this.refs.minutes = rootSelector.querySelector('[data-minutes]');
    this.refs.seconds = rootSelector.querySelector('[data-seconds]');
  },
};

timer.start(timerRef, DATA);
