// Находим кнопку
const modalButtons = document.querySelectorAll("[data-modal-button]");

// Для каждой кнопки запускаем функцию
modalButtons.forEach(modalHandler);

//  Отлавливаем клик по кнопке и запускаем функцию
function modalHandler(item) {
  item.addEventListener("click", openModal);
};

function openModal() {
  // Находим нажатую кнопку по id
  const modalId = this.dataset.modalButton;

  // Показываем id
  const modal = document.getElementById(modalId);

  // Находим кнопку закрывающую модальное окно
  const btnClose = modal.querySelector("[data-modal-close]");

  // Делаем блок видимым
  modal.classList.add("fade-block--visible");

  // По клику находим кнопку и удаляем класс
  btnClose.addEventListener("click", function () {
    modal.classList.remove("fade-block--visible");
  });

  // закрываем окно по внешнему клику мыши
  modal.addEventListener("click", function () {
    modal.classList.remove("fade-block--visible");
  });

  // Находим модальное окно и запрещаем закрытие окна по клику внутри модального окна
  modal.querySelector(".modal-window").addEventListener("click", function (e) {
    e.stopPropagation();
  });
};
