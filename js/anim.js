document.querySelectorAll(".carousel").forEach((carousel) => {
    const items = carousel.querySelectorAll(".carousel__item");
    const buttonsHtml = Array.from(items, () => {
        return '<span class="carousel__button"></span>';
});

    carousel.insertAdjacentHTML("beforeend", `
        <div class="carousel__nav">
        ${buttonsHtml.join("")}
        </div>
    `);


    const buttons = carousel.querySelectorAll(".carousel__button");

    buttons.forEach((button, i) => {
       button.addEventListener("click", () => {
           items.forEach((item) => item.classList.remove("carousel__item--selected"));
           buttons.forEach(button => button.classList.remove("carousel__button--selected"));

           items[i].classList.add("carousel__item--selected");
           button.classList.add("carousel__button--selected");

       });
    });

    items[0].classList.add("carousel__item--selected");
    buttons[0].classList.add("carousel__button--selected");

});

const hamburger = document.querySelector(".menu_hamburger");
const navLinks = document.querySelector(".nav_links");
const navLinksList = document.querySelectorAll(".nav_links ul li a");
const image = document.getElementById("burger");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");

});

navLinksList.forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        image.src = "img/logos/white-menuburger.png";
    });
});

window.addEventListener("scroll", function() {
    var header = document.querySelector("nav");
    header.classList.toggle("sticky", window.scrollY > 0);
});

function changeImage() {
    var image = document.getElementById('burger');
    if (image.src.match("burger")) {
        image.src = "img/logos/whitecross.png";
    }
    else {
        image.src = "img/logos/white-menuburger.png";
    }
}



// let popup = document.querySelector(".popup");
// function openPopup() {
//     popup.classList.add("open-popup");
//     console.log("open");
// }
//
// function closePopup() {
//     popup.classList.remove("open-popup");
// }
//
