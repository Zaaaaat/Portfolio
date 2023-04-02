// Sélection de tous les éléments de carousel sur la page
const carousels = document.querySelectorAll(".carousel");

// Pour chaque carousel, on crée les boutons de navigation
carousels.forEach((carousel) => {
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
    let currentSlideIndex = 0;

    // On ajoute un écouteur d'événement sur chaque bouton de navigation
    buttons.forEach((button, i) => {
        button.addEventListener("click", () => {
            // On retire la classe "carousel__item--selected" de l'élément courant
            items[currentSlideIndex].classList.remove("carousel__item--selected");
            buttons[currentSlideIndex].classList.remove("carousel__button--selected");

            // On met à jour l'indice de l'élément courant
            currentSlideIndex = i;

            // On ajoute la classe "carousel__item--selected" à l'élément cliqué
            items[currentSlideIndex].classList.add("carousel__item--selected");
            buttons[currentSlideIndex].classList.add("carousel__button--selected");
        });
    });

    // On ajoute la classe "carousel__item--selected" au premier élément
    items[currentSlideIndex].classList.add("carousel__item--selected");
    buttons[currentSlideIndex].classList.add("carousel__button--selected");

    // Ajout d'un écouteur d'événement sur le carousel pour gérer le swipe sur mobile
    let touchStartX = 0;
    let touchEndX = 0;

    carousel.addEventListener("touchstart", (e) => {
        touchStartX = e.touches[0].clientX;
    });

    carousel.addEventListener("touchend", (e) => {
        touchEndX = e.changedTouches[0].clientX;

        // Si le déplacement horizontal est suffisant, on change de slide
        if (touchEndX - touchStartX > 50 && currentSlideIndex > 0) {
            buttons[currentSlideIndex - 1].click();
        } else if (touchStartX - touchEndX > 50 && currentSlideIndex < items.length - 1) {
            buttons[currentSlideIndex + 1].click();
        }
    });
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

