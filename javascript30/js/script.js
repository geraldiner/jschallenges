// For sticky nav when scrolling
const nav = document.querySelector("#nav");
const topOfNav = nav.offsetTop;
const wrap = document.querySelector(".wrap");

function fixNav() {
  if (window.scrollY >= topOfNav) {
    wrap.style.paddingTop = nav.offsetHeight;
    wrap.classList.add("fixed-nav");
  } else {
    wrap.style.paddingTop = 0;
    wrap.classList.remove("fixed-nav");
  }
}

window.addEventListener("scroll", fixNav);