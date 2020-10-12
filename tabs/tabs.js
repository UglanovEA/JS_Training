// Находим все заголовки по атрибуту
const tabsHeaders = document.querySelectorAll("[data-tab]");

// Для каждого заголовка запустили функцию
tabsHeaders.forEach(tabsHandler);


function tabsHandler(item) {
  // Для каждого заголовка по клику запускаем функцию 
  item.addEventListener("click", tabsClick);
}

function tabsClick() {
  // Находим название id связанного блока с контентом
  const tabId = this.dataset.tab;

  // Находим блоки и скрываем все блоки с контентом
  document.querySelectorAll("[data-tab-content]").forEach(function (item) {
    item.classList.add("tab-content-hidden");
  });
  // По  ID включаем нужный блок с контентом
  document.getElementById(tabId).classList.remove("tab-content-hidden");
}
