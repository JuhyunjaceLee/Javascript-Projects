const field = document.querySelector(".game_field");
const fieldRect = field.getBoundingClientRect();
const gamePlayBtn = document.querySelector(".game_play_btn");
const gameTimer = document.querySelector(".game_timer");
const gameScore = document.querySelector(".game_score");

const popUp = document.querySelector(".pop_up");
const popUpMsg = document.querySelector(".pop_up_message");
const popUpReplayBtn = document.querySelector(".pop_up_replay_btn");

const TURTLE_WIDTH = 80;
const TURTLE_HEIGHT = 55;
const TURTLE_COUNT = 10;
const TRASH_COUNT = 5;
const GAME_TIMER = 10;

let started = false;
let score = 0;
let timer;

gamePlayBtn.addEventListener("click", () => {
  if (started == true) {
    stopGame();
  } else {
    startGame();
  }
  started = !started;
  console.log(started);
});

function startGame() {
  initGame();
  showStopBtn();
  showTimerAndScore();
  startGameTimer();
}

function stopGame() {
  stopGameTimer();
  hidePlayButton();
  showPopUpWithText("REPLAY");
}

function hidePlayButton() {
  gamePlayBtn.style.visibility = "hidden";
}

function showPopUpWithText(text) {
  popUp.classList.remove("pop_up_hidden");
  popUpMsg.innerText = text;
}

function showStopBtn() {
  const icon = document.querySelector(".play_icon");
  icon.classList.add("fa-stop");
  icon.classList.remove("fa-play");
}

function showTimerAndScore() {
  gameTimer.style.visibility = "visible";
  gameScore.style.visibility = "visible";
}

function startGameTimer() {
  let timerSec = GAME_TIMER;
  updateGameTimer(timerSec);
  timer = setInterval(() => {
    if (timerSec <= 0) {
      stopGameTimer();
      return;
    }
    updateGameTimer(--timerSec);
  }, 1000);
}

function stopGameTimer() {
  clearInterval(timer);
  gameTimer.innerText = `0 : 0`;
}

function updateGameTimer(time) {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  gameTimer.innerText = `${minutes} : ${seconds}`;
}

function initGame() {
  field.innerHTML = "";
  gameScore.innerText = TRASH_COUNT;
  additem("trash", TRASH_COUNT, "./img/trash.png");
  additem("turtle", TURTLE_COUNT, "./img/turtle.png");
}

function additem(className, count, imgPath) {
  const x1 = 0;
  const y1 = 0;
  const x2 = fieldRect.width - TURTLE_WIDTH;
  const y2 = fieldRect.height - TURTLE_HEIGHT;

  for (let i = 0; i < count; i++) {
    const item = document.createElement("img");
    item.setAttribute("class", className);
    item.setAttribute("src", imgPath);
    item.style.position = "absolute";
    const x = randomNumber(x1, x2);
    const y = randomNumber(y1, y2);
    item.style.left = `${x}px`;
    item.style.top = `${y}px`;
    field.appendChild(item);
  }
}

function randomNumber(min, max) {
  return Math.random() * (max - min) + min;
}
