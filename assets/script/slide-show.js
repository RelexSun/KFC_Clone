const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");

let currentSlide = 0;

// Function to update the slide position and dot indicator
function updateSlider() {
  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${(index - currentSlide) * 100}%)`;
  });

  // Update active dot
  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === currentSlide);
  });
}

// Function to show the next slide
function showNextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  updateSlider();
}

// Function to show the previous slide
function showPrevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  updateSlider();
}

// Event listeners for arrows
rightArrow.addEventListener("click", showNextSlide);
leftArrow.addEventListener("click", showPrevSlide);

// Event listeners for dots
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentSlide = index;
    updateSlider();
  });
});

// Auto-slide every 5 seconds
setInterval(showNextSlide, 5000);

// Initialize slider
updateSlider();
