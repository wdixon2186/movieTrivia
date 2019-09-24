var enter = document.querySelector(".enter");

// Instead of making the link in JS, I'd use an `a` tag in your html and then style it to look like a button
function next() {
  window.location = "new/will.html";
}
enter.addEventListener("click", next);
