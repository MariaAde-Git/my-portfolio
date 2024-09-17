// the nav

function toggleNav() {
  const navLinks = document.querySelector(".nav-hold");
  // Toggle the 'active' class to show/hide the navigation links
  navLinks.classList.toggle("active");
}

let images = [
  {
    href: "https://mariaade-git.github.io/testimonial-grid-section/",
    src: "Assests/images/testimonial.png",
    alt: "de-cozy"
  },
  {
    href: "https://mariaade-git.github.io/to-do/",
    src: "Assests/images/to-do.png",
    alt: "to-do"
  },
  {
    href: "https://mariaade-git.github.io/Rep--Dash/",
    src: "Assests/images/dash.png",
    alt: "dash"
  },
  {
    href: "https://mariaade-git.github.io/todo2/",
    src: "Assests/images/todo2.png",
    alt: "to-do"
  },
  {
    href: "https://mariaade-git.github.io/news-homepage-main/",
    src: "Assests/images/home-p.png",
    alt: "home"
  },
  {
    href: "https://mariaade-git.github.io/mint/",
    src: "Assests/images/mint.png",
    alt: "mint"
  },
  {
    href: "https://mariaade-git.github.io/slideshows/",
    src: "Assests/images/slide.png",
    alt: "slide"
  },
  {
    href: "https://mariaade-git.github.io/validation/",
    src: "Assests/images/form.png",
    alt: "form"
  },
  {
    href: "https://mariaade-git.github.io/accordion-and-modals/",
    src: "Assests/images/mod.png",
    alt: "accordion"
  }
];

let currentIndex = 0;

function updateSlide() {
  const sliderImage = document.getElementById("project-image");
  const sliderLink = document.getElementById("project-link");

  sliderImage.src = images[currentIndex].src;
  sliderImage.alt = images[currentIndex].alt;
  sliderLink.href = images[currentIndex].href;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % images.length;
  updateSlide();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateSlide();
}