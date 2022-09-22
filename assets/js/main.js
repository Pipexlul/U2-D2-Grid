window.addEventListener("DOMContentLoaded", (event) => {
  VanillaTilt.init(document.querySelectorAll(".card-img"), {
    max: 10,
    speed: 250,
    reverse: true,
  });
});
