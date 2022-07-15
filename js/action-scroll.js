// show fixed button
const fixButton = document.querySelector(".fixed-button");
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
