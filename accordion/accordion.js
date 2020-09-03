const headers = document.querySelectorAll("[data-name='accordion-title']");

headers.forEach(function (item) {
  item.addEventListener("click", headerClick);
});

function headerClick() {
  this.nextElementSibling.classList.toggle("accordion-body");
}
