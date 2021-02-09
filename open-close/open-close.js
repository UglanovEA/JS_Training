// Находим элементы на странице
const btn = document.querySelector("#button");
const content = document.querySelector("#content");

// По нажатию на кнопку, запускаем функцию проверки класса
btn.addEventListener("click", function () {
  if (content.classList.toggle("content-hidden")) {
    btn.textContent = "Открыть блок";
  } else {
    btn.textContent = "Закрыть блок";
  }
});



