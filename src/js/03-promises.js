import { Notify } from 'notiflix/build/notiflix-notify-aio';

const formRef = document.querySelector('form');
// const stepRef = document.querySelector('.step');
// const amountRef = document.querySelector('.amount');
// const btnRef = document.querySelector('button');

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return (promisse = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve(`Fulfilled promise ${position} in ${delay}ms`); // Fulfill
      } else {
        reject(`Rejcted promise ${position} in ${delay}ms`); // Reject
      }
    }, delay);
  }));
}

function clickHandle(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'BUTTON') {
    return;
  }

  let {
    elements: { delay, step, amount },
  } = event.currentTarget;

  let delayTrue = Number(delay.value);
  let stepTrue = Number(step.value);
  let amountTrue = Number(amount.value);

  for (let i = 1; i <= amountTrue; i += 1) {
    createPromise(i, delayTrue)
      .then(result => {
        Notify.success(result);
      })
      .catch(result => {
        Notify.failure(result);
      });
    delayTrue += stepTrue;
  }
}

formRef.addEventListener('click', clickHandle);
