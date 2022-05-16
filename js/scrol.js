document.querySelector("span.start").addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

document.querySelector("span.about").addEventListener("click", function () {
  window.scrollTo({
    top: 800,
    left: 0,
    behavior: "smooth",
  });
});
document.querySelector("span.gallery").addEventListener("click", function () {
  window.scrollTo({
    top: 1800,
    left: 0,
    behavior: "smooth",
  });
});
