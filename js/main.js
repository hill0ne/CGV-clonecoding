const main = document.querySelector(".main");
const gnb = document.querySelector(".gnb_menu");
const gnb_list = document.querySelector(".gnb_list");
const gnbDropDown = document.querySelector(".gnb_menu_dropdown");
const personalMenu = document.querySelectorAll(".personal_menu_wrap li");
const specialHallList = document.querySelector(".specialHall_list");
const checked = document.querySelector(".list-checked");
const image = document.querySelector(".specialHall_image");
const nextBtn = document.querySelector(".button_next");
const nextBtnActive = document.querySelector(".button_next .is-active");

const gnb_li = gnb_list.children;

let buttonStatus = false;
let special_li = specialHallList.children;
let a = null;

// tab 으로 gnb 메뉴 열기
for (item of gnb_li) {
  a = item.firstElementChild;
  a.addEventListener("keydown", (e) => {
    if (e.keyCode === 13) {
      console.log("13");
      openDropDownMenu();
    }
  });
}

// 마우스 호버로 gnb 메뉴 열기
gnb.addEventListener("mouseover", () => {
  openDropDownMenu();
});

gnbDropDown.addEventListener("mouseover", () => {
  openDropDownMenu();
});

gnbDropDown.addEventListener("mouseout", () => {
  closeDropDownMenu();
});

gnb.addEventListener("mouseout", () => {
  closeDropDownMenu();
});

function openDropDownMenu() {
  gnbDropDown.classList.add("is-active");
}

function closeDropDownMenu() {
  gnbDropDown.classList.remove("is-active");
}

// 모달창
for (item of personalMenu) {
  item.addEventListener("click", showInfoPage);
}

// specialHall 이미지 변경
const Images = [
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

for (const item of special_li) {
  const a = item.firstElementChild;
  const span = item.firstElementChild;
  const dataID = a.dataset.id;
  item.addEventListener("mouseover", () => {
    image.src = Images[dataID].src;
    checked.classList.remove("list-checked");
    item.classList.add("list-checked");
    span.style.cssText = `border: none`;
  });
}

for (const item of special_li) {
  item.addEventListener("mouseleave", () => {
    const span = item.firstElementChild;
    item.classList.remove("list-checked");
    span.style.cssText = `border-top: 1px solid #e9e9e9`;
    specialHallList.lastElementChild.firstElementChild.style.cssText = `border-bottom: 1px solid #e9e9e9`;
  });
}

// fixed button 노출
const fixButton = document.querySelector(".fixed_button");
let scroll = 0;

document.addEventListener("scroll", () => {
  scroll = document.documentElement.scrollTop;
  if (scroll > 380) {
    showFixedButon();
  } else {
    hideFixedButton();
  }
});

function showFixedButon() {
  fixButton.classList.add("is-active");
}

function hideFixedButton() {
  fixButton.classList.remove("is-active");
}

// 슬라이드 버튼
nextBtn.addEventListener("click", slideMoveNext);

function slideMoveNext() {
  console.log("넥스트");
  if (buttonStatus === false) {
    nextBtn.classList.add("is-active");
    buttonStatus = true;
  } else if (buttonStatus === true) {
    console.log("프리브");
  }
}

// top 버튼
const gotoTopButton = document.querySelector(".gotoTop-button");
gotoTopButton.addEventListener("click", moveTop);

function moveTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// 모달창
function showInfoPage() {
  console.log("준비 페이지 입니다.");
}
