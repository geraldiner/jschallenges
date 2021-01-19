// JavaScript30 JS
const pressed = [];
const secretCode = "unicorn";
let count;

window.addEventListener("keyup", e => {
  pressed.push(e.key);
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
  if (pressed.join("").includes(secretCode)) {
    cornify_add();
    addDeleteLink();
  }
});

function addDeleteLink() {
  var cornifyCount = document.querySelector('#cornifycount');
  var text = cornifyCount.textContent + '<br> <a class="deleteLink" onclick="deleteUnicorns()">Delete unicorns & rainbows... :(</a>';
  cornifyCount.innerHTML = text;
}

function deleteUnicorns() {
  var divs = document.querySelectorAll('body div');
  var cornifyCount = document.querySelector('#cornifycount');
  var count = cornifyCount.textContent.split(" ")[0];
  for (var i = divs.length - count; i < divs.length; i++) {
    document.body.removeChild(divs[i]);
  }
  document.body.removeChild(cornifyCount);
}