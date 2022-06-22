const menuTab = document.querySelector(".service-menu-tabs");
const deactivate = document.querySelector(".dropdown-deactivate");
const active = document.querySelector(".menu--service-dropdown");

menuTab.addEventListener("mouseover", () => {
  deactivate.classList.add("menu--service-dropdown");
  let active = document.querySelector(".menu--service-dropdown");
  active.classList.remove("dropdown-deactivate");
  if (active) {
    active.addEventListener("mouseout", () => {
      active.classList.add("dropdown-deactivate");
    });
  }
});
