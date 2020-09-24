// Определяем действующие элементы на странице
const year = document.querySelector("#year");
const days = document.querySelector("#days");
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");
const countdown = document.querySelector("#countdown");
const preloader = document.querySelector("#preloader");

// Расчет года
const currentYear = new Date().getFullYear();
const nextYear = new Date(`January 01 ${currentYear + 1} 00:00:00`);
// Устанавливаем год на страницу
year.innerText = currentYear + 1;

function updateCounter() {
  // Расчет времени
  const currentTime = new Date();
  const diff = nextYear - currentTime;

  // Перевод времени в дни-часы-минуты-секунды
  const daysLeft = Math.floor(diff / 1000 / 60 / 60 / 24);
  const hoursLeft = Math.floor(diff / 1000 / 60 / 60) % 24;
  const minutesLeft = Math.floor(diff / 1000 / 60) % 60;
  const secondsLeft = Math.floor(diff / 1000) % 60;

  // Устанавливаем время на страницу // условия - добавляем ноль слева
  days.innerText = daysLeft < 10 ? "0" + daysLeft : daysLeft;
  hours.innerText = hoursLeft < 10 ? "0" + hoursLeft : hoursLeft;
  minutes.innerText = minutesLeft < 10 ? "0" + minutesLeft : minutesLeft;
  seconds.innerText = secondsLeft < 10 ? "0" + secondsLeft : secondsLeft;
}
// Запуск функции с интервалом в 1 сек
setInterval(updateCounter, 1000);

// При загрузке страницы, через 1 сек. удаляем прелодер и повляется время
setTimeout(function () {
  preloader.remove();
  countdown.style.display = "flex";
}, 1000);