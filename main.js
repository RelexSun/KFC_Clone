let valueDisplay = document.querySelectorAll(".count");
let interval = 5000;

valueDisplay.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);

  let counter = setInterval(() => {
    startValue++;
    valueDisplay.textContent = startValue;
    if (startValue >= endValue) {
      clearInterval(counter);
      if (valueDisplay.textContent.includes("K")) {
        valueDisplay.textContent += "K+";
      }
    }
  }, duration);
});

let valueDisplays = document.querySelectorAll(".counts");
let intervals = 1000;

valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseFloat(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(intervals / (endValue * 2)); // Adjust duration for decimals

  let counter = setInterval(() => {
    startValue += 0.1;

    startValue = Math.min(startValue, endValue);

    // Check if the value has .0 and remove it
    let displayValue = startValue.toFixed(1); // Keep one decimal place for intermediate values
    if (displayValue.endsWith(".0")) {
      displayValue = parseInt(displayValue); // Remove the decimal point for whole numbers
    }

    valueDisplay.textContent = displayValue; // Update display value

    if (startValue >= endValue) {
      clearInterval(counter);

      // Final formatting if necessary
      if (displayValue.endsWith(".0")) {
        displayValue = parseInt(displayValue); // Ensure the final value is cleaned up
        valueDisplay.textContent = displayValue + "M"; // Add the unit
      }
    }
  }, duration);
});

document.addEventListener("DOMContentLoaded", () => {
  const carousels = document.querySelectorAll(".carousel-slide"); // All carousels (sm, md, lg)

  carousels.forEach((carousel) => {
    const slides = carousel.querySelectorAll(".home-carousel");
    let currentIndex = 0;

    const prevButton = carousel.parentElement.querySelector(
      ".carousel-button-prev"
    );
    const nextButton = carousel.parentElement.querySelector(
      ".carousel-button-next"
    );

    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.classList.remove("active");
        if (i === index) slide.classList.add("active");
      });
    }

    // Move to next slide
    function nextSlide() {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
    }

    // Move to previous slide
    function prevSlide() {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      showSlide(currentIndex);
    }

    // Event listeners for navigation
    if (nextButton) nextButton.addEventListener("click", nextSlide);
    if (prevButton) prevButton.addEventListener("click", prevSlide);

    // Auto-play feature
    setInterval(nextSlide, 3000); // Change slides every 3 seconds
  });
});
