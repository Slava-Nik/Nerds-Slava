var btn = document.querySelector(".btn-form");
var popup = document.querySelector(".modal-content");
var close = popup.querySelector(".modal-content-close");
var nickname = popup.querySelector("[name=username]");
var overlay = document.querySelector(".overlay");

btn.addEventListener("click", function(event){
 event.preventDefault();
 popup.classList.add("modal-content-open");
 overlay.classList.add("overlay-show");
 nickname.focus();
});

close.addEventListener("click", function(event){
 event.preventDefault();
 popup.classList.remove("modal-content-open");
 overlay.classList.remove("overlay-show");
});
window.addEventListener("keydown", function(event) {
 if(event.keyCode ===27) {
  if(popup.classList.contains("modal-content-open"))
  {
  popup.classList.remove("modal-content-open");
  overlay.classList.remove("overlay-show");}
  }
});
