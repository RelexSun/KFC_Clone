const footerInfo = document.querySelectorAll(".footer-info-content");
const footerToggle = document.querySelectorAll(".footer-nav-sm");
const iconFooter = document.querySelectorAll(".bx-chevron-down");

footerInfo.forEach((item, index) => {
  item.addEventListener("click", () => {
    footerToggle[index].classList.toggle("active-footer");
    iconFooter[index].classList.toggle("bx-rotate-180");
  });
});