const list = document.querySelector(".specialHall-list");
const checked = document.querySelector(".list-checked");
const image = document.querySelector(".specialHall-image");

let listChildren = list.children;

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

for (const children of listChildren) {
  const dataID = children.firstElementChild.dataset.id;
  children.addEventListener("mouseover", () => {
    image.src = Image[dataID].src;
    checked.classList.remove("list-checked");
    children.classList.add("list-checked");
    children.firstElementChild.style.cssText = `border: none`;
  });
}

for (const children of listChildren) {
  children.addEventListener("mouseleave", () => {
    children.classList.remove("list-checked");
    children.firstElementChild.style.cssText = `border-top: 1px solid #e9e9e9`;
    list.lastElementChild.firstElementChild.style.cssText = `border-bottom: 1px solid #e9e9e9`;
  });
}
