let count = 0;
let intervalId;
let isReversing = false;

const counterElement = document.getElementById('counter');
const startButton = document.getElementById('start');
const pauseButton = document.getElementById('pause');
const reverseButton = document.getElementById('reverse');

function updateCounter() {
  counterElement.textContent = count.toString();
}

function startCounter() {
  if (intervalId === undefined) {
    intervalId = setInterval(() => {
      if (!isReversing) {
        count++;
      } else {
        count--;
        if (count <= 0) {
          count = 0;
          pauseCounter(); // Stop the counter when it reaches 0
        }
      }
      updateCounter();
    }, 1000);
  }
}

function pauseCounter() {
  if (intervalId !== undefined) {
    clearInterval(intervalId);
    intervalId = undefined;
  }
}

function reverseCounter() {
  isReversing = true;
  if (intervalId === undefined) {
    startCounter();
  }
}

startButton.addEventListener('click', () => {
  isReversing = false;
  startCounter();
});

pauseButton.addEventListener('click', pauseCounter);

reverseButton.addEventListener('click', reverseCounter);
