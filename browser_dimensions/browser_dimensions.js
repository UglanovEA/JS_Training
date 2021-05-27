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
ButtonBy.addEventListener('click', setScrollIntoView)

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
    // "smooth", "instant", либо "auto"; по умолчанию "auto"
    behavior: 'smooth'
  });
}
// Опции не работают в сафари


/* Вызов elem.scrollIntoView(top) прокручивает страницу, чтобы elem оказался вверху. У него есть один аргумент:
- если top = true(по умолчанию), то страница будет прокручена, чтобы elem появился в верхней части окна.
Верхний край элемента совмещен с верхней частью окна.
- если top = false, то страница будет прокручена, чтобы elem появился внизу. Нижний край элемента будет совмещен с нижним краем окна.
*/
function setScrollIntoView(top) {
  const lessonSelected = document.querySelector('.lesson__selected');
  lessonSelected.scrollIntoView(top);
}

function setScrollIntoViewOption(top) {
  const lessonSelected = document.querySelector('.lesson__selected');
  lessonSelected.scrollIntoView({
    //"start", "center", "end" или "nearest". По умолчанию "center"
    block: 'center',
    //"start", "center", "end" или "nearest". По умолчанию "nearest"
    inline: 'nearest',
    // "smooth" или "auto"; по умолчанию "auto"
    behavior: 'smooth'
  });
}
// Опции не работают в сафари