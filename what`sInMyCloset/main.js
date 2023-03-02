function loadItems() {
  return fetch("./data/data.json")
    .then((response) => response.json())
    .then((data) => data.items);
}

function displaytops(items) {
  const tops = document.querySelector(".img_tops");
  const result = items.filter((item) => item.type === "tops");
  tops.innerHTML = result.map((item, idx) => createHTML(item, idx)).join("");
  clickEvent(result);
}

function displaybottoms(items) {
  const bottoms = document.querySelector(".img_bottoms");
  const result = items.filter((item) => item.type === "bottoms");
  bottoms.innerHTML = result.map((item, idx) => createHTML(item, idx)).join("");
  clickEvent(result);
}
function displayshoes(items) {
  const shoes = document.querySelector(".img_shoes");
  const result = items.filter((item) => item.type === "shoes");
  shoes.innerHTML = result.map((item, idx) => createHTML(item, idx)).join("");
  clickEvent(result);
}
function displayAllClothes(items) {
  displaytops(items);
  displaybottoms(items);
  displayshoes(items);
}
function createHTML(item, idx) {
  return `
  <img src=${item.image} alt=${item.type} id=${item.type}${idx} />
  `;
}

function onButtonClick(event, items) {
  const dataset = event.target.dataset;
  const key = dataset.key;
  const value = dataset.value;
  const filtered = items.filter((item) => item[key] === value);
  displayAllClothes(filtered);
}

function setEventListener(items) {
  const btnWrap = document.querySelector(".btn_wrap");
  btnWrap.addEventListener("click", (event) => onButtonClick(event, items));
}

function clickEvent(items) {
  items.forEach((item, idx) => {
    item.el = document.getElementById(`${item.type}${idx}`);
    item.el.addEventListener("click", (event) => {
      const imgSrc = event.target.currentSrc;
      const type = item.type;
      setImg(imgSrc, type);
    });
  });
}
function setImg(imgsrc, type) {
  const typeArea = document.querySelector("#avartar_" + type);
  const image = document.createElement("img");
  image.src = imgsrc;

  if (typeArea.childNodes.length > 0) {
    return;
  }
  typeArea.appendChild(image);
  resetEvent(typeArea, image);
}

function resetEvent(typeArea, image) {
  const resetBTn = document.querySelector(".btn_reset");
  resetBTn.addEventListener("click", () => {
    typeArea.removeChild(image);
  });
}

loadItems().then((items) => {
  displayAllClothes(items);
  setEventListener(items);
});
