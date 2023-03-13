const firstBigBox = document.querySelector(".first_bigBox");

firstBigBox.addEventListener("mouseover", () => {
  setTimeout(() => {
    firstBigBoxOver();
  }, 100);
});

function firstBigBoxOver() {
  firstBigBox.style.backgroundColor = "var(--color-orange)";
  firstBigBox.innerText = "ABOUT ME";
  firstBigBox.style.fontSize = "4.3rem";
}

firstBigBox.addEventListener("mouseout", () => {
  firstBigBox.style.backgroundColor = "var(--color-darkgray)";
  firstBigBox.style.fontSize = "1.5rem";
  firstBigBox.innerHTML = `
  <section class="intro_box">
    <p>안녕하세요!</p>
    <p>이주현입니다.😊</p>
    <p style="font-size: 0.8rem">"Front-End Developer"</p>
  </section>
  <i class="fa-solid fa-circle-arrow-right" style="color: var(--color-gray)"></i>
  `;
});

const firstMiniBox = document.querySelector(".first_miniBox");

function firstMiniBoxOver() {
  firstMiniBox.innerHTML = `
  <p>Let's See My All Projects</p>
  `;
}

firstMiniBox.addEventListener("mouseover", () => {
  firstMiniBox.style.backgroundColor = "var(--color-orange)";
  setTimeout(() => {
    firstMiniBoxOver();
  }, 200);
});
// firstMiniBox.addEventListener("mouseover", () => {
//   setTimeout(() => {
//     firstMiniBoxOver();
//   }, 100);
// });

firstMiniBox.addEventListener("mouseout", () => {
  firstMiniBox.style.backgroundColor = "var(--color-darkgray)";
  firstMiniBox.style.fontSize = "1.5rem";
  firstMiniBox.innerHTML = `
  <p>PROJECTS</p>
  <i class="fa-solid fa-circle-arrow-right" style="color: var(--color-gray)"></i>
  `;
});
