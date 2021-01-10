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
  if (e.propertyName !== "background-color") return;
  e.target.classList.remove("playing");
  this.classList.remove("playing");
}

const keys = document.querySelectorAll("div.key");
keys.forEach(key => key.addEventListener("transitionend", removeTransition));