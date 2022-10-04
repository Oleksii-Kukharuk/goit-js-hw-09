function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const startBtnRef = document.querySelector('[data-start]');
const stopBtnRef = document.querySelector('[data-stop]');
const bodyRef = document.querySelector('body');
console.log(bodyRef);

startBtnRef.addEventListener('click', btnStartHandler);
stopBtnRef.addEventListener('click', btnStopHandler);

let intervalId = null;

function intervalHandler() {
  const randomColor = getRandomHexColor();
  bodyRef.style.backgroundColor = randomColor;
}

function btnStopHandler(event) {
  console.log(`this mess was stoped`);
  clearInterval(intervalId);
  startBtnRef.removeAttribute('disabled');
  stopBtnRef.setAttribute('disabled', true);
}

function btnStartHandler(event) {
  intervalId = setInterval(intervalHandler, 500);
  startBtnRef.setAttribute('disabled', true);
  stopBtnRef.removeAttribute('disabled');
}
