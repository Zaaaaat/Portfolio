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
            const current = carousel.querySelector(".carousel__item--selected");
            const next = items[i];

            current.classList.remove("carousel__item--selected");
            next.classList.add("carousel__item--selected");

            buttons.forEach((button) => {
                button.classList.remove("carousel__button--selected");
            });

            buttons[i].classList.add("carousel__button--selected");

            if (carousel.scrollBy) {
                carousel.scrollBy({
                    left: next.offsetLeft - current.offsetLeft,
                    behavior: "smooth",
                });
            } else {
                carousel.scrollLeft = next.offsetLeft;
            }
        });
    });

    items[0].classList.add("carousel__item--selected");
    buttons[0].classList.add("carousel__button--selected");
});



/* Menu */

const hamburger = document.querySelector(".menu_hamburger");
const navLinks = document.querySelector(".nav_links");
const navLinksList = document.querySelectorAll(".nav_links ul li a");
const burgerIcon = document.getElementById("burger");
const image = document.getElementById("burger");
const body = document.querySelector("body");

burgerIcon.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    if (navLinks.classList.contains("open")) {
        burgerIcon.src = "img/logos/whitecross.png";
        body.style.overflowY = "hidden";
    } else {
        burgerIcon.src = "img/logos/white-menuburger.png";
        body.style.overflowY = "scroll";
    }
});

// Ajoutez le code suivant pour réinitialiser l'icône lorsque l'on clique sur un lien :
navLinks.addEventListener("click", () => {
    burgerIcon.src = "img/logos/white-menuburger.png";
    navLinks.classList.remove("open");
    body.style.overflowY = "scroll";
});


/* Scroll */
window.addEventListener("scroll", function() {
    var header = document.querySelector("nav");
    header.classList.toggle("sticky", window.scrollY > 0);
});

/* Scroll menu */

function changeImage() {
    var burger = document.getElementById('burger');

    document.body.classList.toggle("lock-scroll");

    if (burger.src.match("burger")){
        burger.src = "img/logos/white-menuburger.png";
    }

    else {
        burger.src = "img/logos/whitecross.png";
    }
}

/* Scroll menu */

function leavescrollblockonul() {
    document.body.classList.remove("lock-scroll");
}

