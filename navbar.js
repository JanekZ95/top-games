const menuBtn = document.getElementsByClassName('menu-btn')[0];
const menu = document.getElementsByClassName('menu')[0];

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
})

document.querySelectorAll(".border").forEach(n => n.addEventListener("click", () => {
    menu.classList.remove("active");
}))

window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})
