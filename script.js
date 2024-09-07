// the nav
function toggleNav() {
  const navLinks = document.getElementById ("navLinks");
  // Toggle the 'active' class to show/hide the navigation links
  navLinks.classList.toggle("active");
}

// Carousel functionality
let currentIndex = 0;
const autoSlideInterval = 3000; // Time between slides in milliseconds

// Function to show the current slide
function showSlide(index) {
  const carousel = document.getElementById("carousel");
  const slides = carousel.children;
  const totalSlides = slides.length;

  // Ensure index stays within bounds
  if (index >= totalSlides) {
    currentIndex = 0; // Loop back to the first slide
  } else if (index < 0) {
    currentIndex = totalSlides - 1; // Go to the last slide if index is negative
  } else {
    currentIndex = index;
  }

  // Move the carousel to the correct slide
  const offset = -currentIndex * 100;
  carousel.style.transform = `translateX(${offset}%)`;
}

// Function to go to the next slide
function nextSlide() {
  showSlide(currentIndex + 1);
}

// Function to go to the previous slide
function prevSlide() {
  showSlide(currentIndex - 1);
}

// Automatic slide change
function autoSlide() {
  nextSlide(); // Automatically go to the next slide
  setTimeout(autoSlide, autoSlideInterval); // Set the timer for the next slide
}

// Automatically start the carousel and show the first slide on page load
document.addEventListener("DOMContentLoaded", () => {
  showSlide(0); // Show the first slide initially
  setTimeout(autoSlide, autoSlideInterval); // Start the auto-slide functionality
});

// hover effect on the proficeincy container
const proficiencyContainers = document.querySelectorAll('.proficiency-image-container');

// Loop through each container and add event listeners for hover
proficiencyContainers.forEach(container => {
  container.addEventListener('mouseover', () => {
    container.style.transform = 'scale(1.04)'; // Increase the size by 10%
    container.style.transition = 'transform 0.3s ease'; // Smooth transition
  });

  container.addEventListener('mouseout', () => {
    container.style.transform = 'scale(1)'; // Reset to original size
  });
});