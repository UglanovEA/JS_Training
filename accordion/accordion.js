// Находим все заголовки на странице
const headers = document.querySelectorAll("[data-name='accordion-title']");

// Перебираем заголовки и отлавливаем клик для каждого заголовка
headers.forEach(function (item) {
  item.addEventListener("click", headerClick);
});

// Переключаем класс у заголовка
function headerClick() {
  this.nextElementSibling.classList.toggle("accordion-body");
}
