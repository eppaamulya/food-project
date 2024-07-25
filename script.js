const menus = document.querySelector('.navbar-list');
const menuBtn = document.querySelector('.menu-btn');
const closeBtn = document.querySelector('.close-btn');

menuBtn.addEventListener("click", function () {
    menus.classList.add("display");
})

closeBtn.addEventListener("click", function () {
    menus.classList.remove("display");
})