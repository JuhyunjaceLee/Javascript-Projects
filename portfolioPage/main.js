const aboutBox = document.querySelector(".about_box");

aboutBox.addEventListener("mouseenter", aboutBoxOver);

function aboutBoxOver() {
  aboutBox.style.backgroundColor = "var(--color-orange)";
  aboutBox.innerText = "ABOUT ME";
  aboutBox.style.fontSize = "4.3rem";
}

aboutBox.addEventListener("mouseleave", () => {
  aboutBox.style.backgroundColor = "var(--color-darkgray)";
  aboutBox.style.fontSize = "1.5rem";
  aboutBox.innerHTML = `
  <div class="about_content">
    <p>안녕하세요!</p>
    <p>이주현입니다.😊</p>
    <p style="font-size: 0.8rem">"Front-End Developer"</p>
  </div>
  <i class="fa-solid fa-circle-arrow-right section_icon"></i>
  `;
});

const projectBox = document.querySelector(".projects_box");

function projectBoxOver() {
  projectBox.innerHTML = `
  <p>Let's See My All Projects</p>
  `;
}

projectBox.addEventListener("mouseenter", () => {
  projectBox.style.backgroundColor = "var(--color-orange)";
  projectBoxOver();
});

projectBox.addEventListener("mouseleave", () => {
  projectBox.style.backgroundColor = "var(--color-darkgray)";
  projectBox.style.fontSize = "1.5rem";
  projectBox.innerHTML = `
  <p>PROJECTS</p>
  <i class="fa-solid fa-circle-arrow-right" style="color: var(--color-gray)"></i>
  `;
});

const skillBox = document.querySelector(".skills_box");

function skillBoxOver() {
  skillBox.innerHTML = `
  <div class="skills_icon_wrap">
    <i class="fa-brands fa-html5"></i>
    <i class="fa-brands fa-css3-alt"></i>
    <i class="fa-brands fa-react"></i>
    <i class="fa-brands fa-vuejs"></i>
  </div>
  `;
}

skillBox.addEventListener("mouseenter", () => {
  skillBox.style.backgroundColor = "var(--color-orange)";
  skillBoxOver();
});

skillBox.addEventListener("mouseleave", () => {
  skillBox.style.backgroundColor = "var(--color-darkgray)";
  skillBox.style.fontSize = "1.5rem";
  skillBox.innerHTML = `
  <p>SKILLS</p>
  <i class="fa-solid fa-circle-arrow-right" style="color: var(--color-gray)"></i>
  `;
});
const contactBox = document.querySelector(".contact_box");

function contactBoxOver() {
  contactBox.innerHTML = `
  <div class="contact_icon_wrap">
    <i class="fa-solid fa-phone"></i>
    <i class="fa-solid fa-at"></i>
    <i class="fa-brands fa-github"></i>
    <i class="fa-regular fa-clipboard"></i>
  </div>
  `;
}

contactBox.addEventListener("mouseenter", () => {
  contactBox.style.backgroundColor = "var(--color-orange)";
  contactBoxOver();
});

contactBox.addEventListener("mouseleave", () => {
  contactBox.style.backgroundColor = "var(--color-darkgray)";
  contactBox.style.fontSize = "2.5rem";
  contactBox.innerHTML = `
  <p>CONTACT ME</p>
  <i class="fa-solid fa-circle-arrow-right" style="color: var(--color-gray); font-size: 1.5rem"></i>
  `;
});

function onLine(event) {
  // aboutBox.style.border = "1px solid var(--color-orange)";
  console.log(event.target.dataset.name);
  const sectionName = event.target.dataset.name;
  sectionName.style.border = "1px solid var(--color-orange);";
}

const menu = document.querySelector(".menu_wrap");
menu.addEventListener("click", (event) => {
  const target = event.target.dataset.name;
  scrollIntoView(target);
  removeSectionActive();
  addSectionActive(target);
});

function scrollIntoView(el) {
  const element = document.getElementById(el);
  console.log(element);
  element.scrollIntoView({ behavior: "smooth", block: "center" });
}

function removeSectionActive() {
  const main = document.querySelector(".main");
  const child = Array.from(main.children);
  child.map((list) => {
    list.classList.remove("active");
  });
}

function addSectionActive(el) {
  const element = document.getElementById(el);
  element.classList.add("active");
}
