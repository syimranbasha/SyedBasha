// JavaScript to add 'loaded' class after the image loads
     document.addEventListener("DOMContentLoaded", function () {
  var hero = document.getElementById("hero");
  var img = new Image();
  img.src = "bitch.jpg";
  img.onload = function () {
    hero.style.backgroundImage = 'url("bitch.jpg")';
    hero.classList.add("loaded");
  };
});