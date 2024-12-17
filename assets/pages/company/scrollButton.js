const button = document.getElementById("scrollButton");
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  if (window.scrollY > lastScrollY) {
    button.classList.add("hidden");
  } else {
    button.classList.remove("hidden");
  }
  lastScrollY = window.scrollY;
});

button.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
