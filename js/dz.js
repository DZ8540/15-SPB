// Menu script
const link = document.querySelector(".dz-nav_right-burger_link");
const menu = document.querySelector(".dz-nav_right-burger_drop");
const exitMenu = document.querySelector(".dz-nav_right-burger_drop-exit");

link.addEventListener("click", () => {
    menu.classList.toggle("active");
});

exitMenu.addEventListener("click", () => {
    menu.classList.remove("active");
});