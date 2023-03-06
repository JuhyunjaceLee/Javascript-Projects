const field = document.querySelector(".game_field");
const fieldRect = field.getBoundingClientRect();
const gamePlayBtn = document.querySelector(".game_play_btn");
const gameTimer = document.querySelector(".game_timer");
const gameScore = document.querySelector(".game_score");

const TURTLE_WIDTH = 80;
const TURTLE_HEIGHT = 55;
const TURTLE_COUNT = 10;
const TRASH_COUNT = 5;

let started = false;
let score = 0;
let timer = undefined;

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
}

function stopGame() {}

function showStopBtn() {
  const icon = document.querySelector(".play_icon");
  icon.classList.add("fa-stop");
  icon.classList.remove("fa-play");
}

function initGame() {
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
