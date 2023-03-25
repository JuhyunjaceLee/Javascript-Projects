const navList = document.querySelector(".nav-list");
const navTitle = document.querySelector(".nav-title");
const homeMain = document.querySelector(".home_main");
const mainBox = document.querySelectorAll(".box");
const mainBoxLength = mainBox.length;
const myName = document.querySelector(".my-name");

navList.addEventListener("click", (e) => {
  const target = e.target.dataset.link;
  scrollIntoViewEnd(target);
  removeSectionActive();
  addSectionActive(target);
});

homeMain.addEventListener("click", (e) => {
  const target = e.target.dataset.page;
  console.log(e.target.dataset.page);
  scrollIntoView(target);
});

function scrollIntoView(el) {
  const element = document.getElementById(el);
  element.scrollIntoView({ behavior: "smooth", block: "start" });
}
function scrollIntoViewEnd(el) {
  const element = document.getElementById(el);
  element.scrollIntoView({ behavior: "smooth", block: "end" });
}

function addSectionActive(el) {
  const element = document.getElementById(el);
  element.classList.add("active");
}

function removeSectionActive() {
  const main = document.querySelector(".home_main");
  const child = Array.from(main.children);
  child.map((list) => {
    list.classList.remove("active");
  });
}

navTitle.addEventListener("click", (e) => {
  const target = e.target.dataset.link;
  scrollIntoView(target);
});

for (let i = 0; i < mainBoxLength; i++) {
  const box = mainBox[i];
  box.addEventListener("mouseenter", () => {
    box.style.backgroundColor = "var(--color-orange)";
  });
  box.addEventListener("mouseleave", () => {
    box.style.backgroundColor = "var(--color-darkgray)";
    myName.style.color = "var(--color-orange)";
  });
}
mainBox[0].addEventListener("mouseenter", () => {
  myName.style.color = "var(--color-black)";
  mainBox[0].innerText = "ABOUT ME";
  mainBox[0].style.fontSize = "3.5rem";
  mainBox[0].style.padding = "60px";
});
mainBox[0].addEventListener("mouseleave", () => {
  mainBox[0].innerHTML = `
  <div>
    <p>안녕하세요!</p>
    <p><span class="my-name">이주현</span>입니다.😊</p>
    <p style="font-size: 0.8rem">"Front-End Developer"</p>
  </div>
  <i class="fa-solid fa-circle-arrow-right"></i>
  `;
  mainBox[0].style.fontSize = "1.5rem";
});
mainBox[1].addEventListener("mouseenter", () => {
  mainBox[1].innerHTML = `
  <div class="project-subtitle">
    <p>Let's See</p> 
    <p>My All Projects</p>
  </div>
  `;
});
mainBox[1].addEventListener("mouseleave", () => {
  mainBox[1].innerHTML = `
  <p>PROJECTS</p>
  <i class="fa-solid fa-circle-arrow-right"></i>
  `;
});
mainBox[2].addEventListener("mouseenter", () => {
  mainBox[2].innerHTML = `
  <div>
    <div class="skills_icon_wrap">
      <i class="fa-brands fa-html5"></i>
      <i class="fa-brands fa-css3-alt"></i>
    </div>
    <div class="skills_icon_wrap">
      <i class="fa-brands fa-js"></i>
      <i class="fa-brands fa-react"></i>
      <i class="fa-brands fa-vuejs"></i>
    </div>
  </div>
`;
});
mainBox[2].addEventListener("mouseleave", () => {
  mainBox[2].innerHTML = `
  <p>SKILLS</p>
  <i class="fa-solid fa-circle-arrow-right"></i>
  `;
});
mainBox[3].addEventListener("mouseenter", () => {
  mainBox[3].innerHTML = `
  <div class="contact_icon_wrap">
    <i class="fa-solid fa-phone"></i>
    <i class="fa-solid fa-at"></i>
    <i class="fa-brands fa-github"></i>
    <i class="fa-regular fa-clipboard"></i>
  </div>
`;
});
mainBox[3].addEventListener("mouseleave", () => {
  mainBox[3].innerHTML = `
  <p>CONTACT ME</p>
  <i class="fa-solid fa-circle-arrow-right"></i>
  `;
});
for (let i = 0; i < mainBoxLength; i++) {
  const box = mainBox[i];
  // box.addEventListener("click", function () {
  //   console.log(this);
  // });
  box.addEventListener("click", (e) => {
    const target = e.target;
    target.classList.add("active");
  });
}
