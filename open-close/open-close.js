// Находим элементы на странице
const btn = document.querySelector("#button");
const content = document.querySelector("#content");

// По нажатию на кнопку, запускаем функцию проверки класса
btn.addEventListener("click", function () {
  // Делаем проверку класса методом contains
  if (content.classList.toggle("content-hidden")) {
    btn.textContent = "Закрыть блок";
  } else {
    btn.textContent = "Открыть блок";
  }
});



