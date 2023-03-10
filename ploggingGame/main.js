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
const TRASH_COUNT = 10;
const GAME_TIMER = 10;

let started = false;
let score = 0;
let timer;

const win = true;
const lose = false;

explainGame();

field.addEventListener("click", (event) => onFieldClick(event));

function onFieldClick(event) {
  if (!started) {
    return;
  }
  const target = event.target;
  if (target.matches(".trash")) {
    target.remove();
    score++;
    updateScroe();
    if (score === TRASH_COUNT) {
      finishGame(win);
    }
  } else if (target.matches(".turtle")) {
    stopGameTimer();
    finishGame(lose);
  }
}

gamePlayBtn.addEventListener("click", () => {
  if (started == true) {
    stopGame();
  } else {
    startGame();
  }
});

function startGame() {
  started = true;
  initGame();
  showStopBtn();
  showTimerAndScore();
  startGameTimer();
}

function stopGame() {
  started = false;
  stopGameTimer();
  playButton("hidden");
  showPopUpWithText("REPLAY");
}

function finishGame(win) {
  stopGame();
  showPopUpWithText(win ? "YOU SAVE TURTLES🐢" : "ONE MORE TRY?👻");
}

function playButton(txt) {
  gamePlayBtn.style.visibility = `${txt}`;
}

function updateScroe() {
  gameScore.innerText = TRASH_COUNT - score;
}
popUpReplayBtn.addEventListener("click", () => {
  startGame();
  removePopUp();
});

function showPopUpWithText(text) {
  popUp.classList.remove("pop_up_hidden");
  popUpMsg.innerText = text;
}

function removePopUp() {
  popUp.classList.add("pop_up_hidden");
}

function showStopBtn() {
  const icon = document.querySelector(".play_icon");
  icon.classList.add("fa-stop");
  icon.classList.remove("fa-play");
  gamePlayBtn.style.visibility = "visible";
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
      finishGame(lose);
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
  score = 0;
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

function explainGame() {
  const ruleBtn = document.querySelector(".explain_btn");
  playButton("hidden");
  ruleBtn.addEventListener("click", () => {
    const rule = document.querySelector(".pop_up_explain");
    rule.classList.add("pop_up_hide");
    playButton("visible");
  });
}
