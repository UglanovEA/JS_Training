// Находим все заголовки по атрибуту
const tabsHeaders = document.querySelectorAll("[data-tab]");
// Находим все контент боксы
const contentBoxes = document.querySelectorAll("[data-tab-content]");


tabsHeaders.forEach(function (item) {

  // Для каждого заголовка по клику запускаем функцию 
  item.addEventListener("click", function () {

    // Скрываем все content-box
    contentBoxes.forEach(function (item) {
      item.classList.add("tab-content-hidden");
    });

    // Выбираем нужный content-box
    const contentBox = document.querySelector('#' + this.dataset.tab);
    contentBox.classList.remove("tab-content-hidden");

  })
});