const navList = document.querySelector(".nav-list");
const navTitle = document.querySelector(".nav-title");
const homeMain = document.querySelector(".home_main");
const mainBox = document.querySelectorAll(".box");
const mainBoxLength = mainBox.length;
const myName = document.querySelector(".my-name");
const projectFilterBtnWrap = document.querySelector(".project-btn-wrap");
const projectBtn = document.querySelectorAll(".project-btn");
const projectBtnLength = projectBtn.length;
const projectItem = document.querySelectorAll(".project_item");
const goToTopBtn = document.querySelector(".go-to-top-btn");

// navList.addEventListener("click", (e) => {
//   const target = e.target.dataset.link;
//   scrollIntoViewEnd(target);
//   removeSectionActive();
//   addSectionActive(target);
// });

function homeMainBoxClickHandler(e) {
  let elem = e.target;
  while (!elem.classList.contains("box")) {
    elem = elem.parentNode;
    if (elem.nodeName === "BODY") {
      elem = null;
      return;
    }
  }
  scrollIntoView(elem.dataset.page);
}

homeMain.addEventListener("click", homeMainBoxClickHandler);

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

function scrollIntoView(el) {
  const element = document.getElementById(el);
  element.scrollIntoView({ behavior: "smooth", block: "start" });
}
function scrollIntoViewEnd(el) {
  const element = document.getElementById(el);
  element.scrollIntoView({ behavior: "smooth", block: "end" });
}

projectFilterBtnWrap.addEventListener("click", (e) => {
  const target = e.target;
  for (i = 0; i < projectBtnLength; i++) {
    projectBtn[i].classList.remove("active");
  }
  target.classList.add("active");
  const filterValue = e.target.getAttribute("data-filter");
  projectItem.forEach((item) => {
    if (item.classList.contains(filterValue) || filterValue === "all") {
      item.classList.remove("hide");
      item.classList.add("show");
    } else {
      item.classList.remove("show");
      item.classList.add("hide");
    }
  });
});

goToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
