// Размеры окна браузера
// clientWidth и clientHeight

// Доступная ширина и высота окна
const mainElement = document.documentElement;
const mainElementWidth = mainElement.clientWidth;
const mainElementHeight = mainElement.clientHeight;

// console.log(mainElementWidth);
// console.log(mainElementHeight);

/*========================================*/

// Ширина и высота окна вместе с полосами прокрутки
const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;

// console.log(windowWidth);
// console.log(windowHeight);

/*========================================*/

// Ширина и высота документа
// Включая прокрученную часть
let scrollWidth = Math.max(
  document.body.scrollWidth, document.documentElement.scrollWidth,
  document.body.offsetWidth, document.documentElement.offsetWidth,
  document.body.clientWidth, document.documentElement.clientWidth,
)
let scrollHeight = Math.max(
  document.body.scrollHeight, document.documentElement.scrollHeight,
  document.body.offsetHeight, document.documentElement.offsetHeight,
  document.body.clientHeight, document.documentElement.clientHeight,
)

// console.log(scrollWidth);
// console.log(scrollHeight);

/*========================================*/

// Получить количество прокрученных пикселей
// Только для чтения

const windowScrollTop = window.pageYOffset;
const windowScrollLeft = window.pageXOffset;

// console.log(windowScrollTop);
// console.log(windowScrollLeft);

/*========================================*/

// Управление прокруткой страницы

// Метод scrollBy(x, y) прокручивает страницу относительно ее текущего положения

let ButtonBy = document.querySelector('.scrollBtn');
ButtonBy.addEventListener('click', setScrollToOption)

function setScrollBy() {
  window.scrollBy(0, 50);
  const windowScrollTop = window.pageYOffset;
  console.log(windowScrollTop);
};

// Метод scrollTo(pageX, pageY) прокручивает страницу на абсолютные координаты, тоже самое что и window.scroll()

function setScrollTo() {
  window.scrollTo(0, 50);
  const windowScrollTop = window.pageYOffset;
  console.log(windowScrollTop);
}

function setScrollToOption() {
  window.scrollTo({
    top: 500,
    left: 0,
    // smooth, instant, либо auto; по умолчанию auto
    behavior: 'smooth'
  });
}
// Опции не работают в сафари