let defaultTime = 25 * 60;
let time = defaultTime;
let interval = null;

const timer = document.getElementById("timer");
const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resumeBtn = document.getElementById("resumeBtn");
const skipBtn = document.getElementById("skipBtn");

const dotsContainer = document.querySelector(".dots");
const addButtonsContainer = document.querySelector(".add-buttons");
const dots = document.querySelectorAll(".dot");

function updateDisplay() {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  timer.innerText =
    String(minutes).padStart(2, "0") + ":" + String(seconds).padStart(2, "0");
}

function startTimer() {
  interval = setInterval(() => {
    if (time <= 0) {
      clearInterval(interval);
      interval = null;
      resetTimer();
      return;
    }

    time--;
    updateDisplay();
  }, 1000);
}

function setTime(minutes, element) {
  clearInterval(interval);
  interval = null;

  defaultTime = minutes * 60;
  time = defaultTime;
  updateDisplay();

  dots.forEach((dot) => dot.classList.remove("active"));
  element.classList.add("active");

  resetButtons();
}

function addTime(minutes) {
  time += minutes * 60;
  updateDisplay();
}

function resetTimer() {
  time = defaultTime;
  updateDisplay();
  resetButtons();

  // Hiện lại các chức năng
  dotsContainer.classList.remove("hidden");
  addButtonsContainer.classList.remove("hidden");
}

function resetButtons() {
  startBtn.classList.remove("hidden");
  pauseBtn.classList.add("hidden");
  resumeBtn.classList.add("hidden");
  skipBtn.classList.add("hidden");
}

startBtn.onclick = function () {
  startTimer();

  startBtn.classList.add("hidden");
  pauseBtn.classList.remove("hidden");
  skipBtn.classList.remove("hidden");

 // Ẩn các chức năng
  dotsContainer.classList.add("hidden");
  addButtonsContainer.classList.add("hidden");
};

pauseBtn.onclick = function () {
  clearInterval(interval);
  interval = null;

  pauseBtn.classList.add("hidden");
  resumeBtn.classList.remove("hidden");
};

resumeBtn.onclick = function () {
  startTimer();

  resumeBtn.classList.add("hidden");
  pauseBtn.classList.remove("hidden");
};

skipBtn.onclick = function () {
  clearInterval(interval);
  interval = null;
  resetTimer();
};

updateDisplay();
