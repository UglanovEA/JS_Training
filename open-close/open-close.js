// Находим элементы на странице
const btn = document.querySelector("#button");
const content = document.querySelector("#content");

// По нажатию на кнопку, запускаем функцию проверки класса
btn.addEventListener("click", btnClick);


function btnClick() {
  // Делаем проверку класса методом contains
  if (content.classList.contains("content-hidden")) {
    // Прописывает необходимый текст
    btn.textContent = "Закрыть блок";
  } else {
    btn.textContent = "Открыть блок";
  }

  // Переключаем класс
  content.classList.toggle("content-hidden");
}
