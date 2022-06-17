const menuBtn = document.getElementsByClassName('menu-btn')[0];
const menu = document.getElementsByClassName('menu')[0];

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
})

window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})