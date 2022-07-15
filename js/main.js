const main = document.querySelector(".main");
const gnblist = document.querySelector(".list");
const gnbDropDown = document.querySelector(".gnb-menu-dropdown");
const specialHallList = document.querySelector(".specialHall-list");
const checked = document.querySelector(".list-checked");
const image = document.querySelector(".specialHall-image");
let li = specialHallList.children;

// dropdown menu

gnblist.addEventListener("mouseover", () => {
  gnbDropDown.classList.add("is-active");
});

gnblist.addEventListener("mouseout", () => {
  gnbDropDown.classList.remove("is-active");
});

// specialHall switch image

const Image = [
  {
    id: "1",
    src: "./assets/img/special-suitecinema.png",
  },
  {
    id: "2",
    src: "./assets/img/special-skybox.png",
  },
  {
    id: "3",
    src: "./assets/img/special-4DX.png",
  },
  {
    id: "4",
    src: "./assets/img/cinedechef.png",
  },
];

for (const item of li) {
  const a = item.firstElementChild;
  const span = item.firstElementChild;
  const dataID = a.dataset.id;
  item.addEventListener("mouseover", () => {
    image.src = Image[dataID].src;
    checked.classList.remove("list-checked");
    item.classList.add("list-checked");
    span.style.cssText = `border: none`;
  });
}

for (const item of li) {
  item.addEventListener("mouseleave", () => {
    const span = item.firstElementChild;
    item.classList.remove("list-checked");
    span.style.cssText = `border-top: 1px solid #e9e9e9`;
    specialHallList.lastElementChild.firstElementChild.style.cssText = `border-bottom: 1px solid #e9e9e9`;
  });
}

// move top

const gotoTopButton = document.querySelector(".gotoTop-button");
gotoTopButton.addEventListener("click", moveTop);

function moveTop() {
  window.scrollTo(0, 0);
}
