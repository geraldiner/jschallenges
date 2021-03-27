// JavaScript30 JS

window.addEventListener("keydown", function (e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  let div = document.querySelector(`div[data-key="${e.keyCode}"]`);
  div.classList.add("playing");
});

function removeTransition(e) {
  //if (e.propertyName !== "background-color") return;
  console.log("HELLO")
  e.target.classList.remove("playing");
  this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener("transitionend", removeTransition));

// // For sticky nav when scrolling
// const nav = document.querySelector("#stick-nav");
// const topOfNav = nav.offsetTop;
// const wrap = document.querySelector(".wrap");

// function fixNav() {
//   if (window.scrollY >= topOfNav) {
//     wrap.style.paddingTop = nav.offsetHeight;
//     wrap.classList.add("fixed-nav");
//   } else {
//     wrap.style.paddingTop = 0;
//     wrap.classList.remove("fixed-nav");
//   }
// }

// window.addEventListener("scroll", fixNav);
