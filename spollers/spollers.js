// Ищем споллеры по дата атрибуту 
const spollersArray = document.querySelectorAll('[data-spollers]');
if (spollersArray.length > 0) {
  //Получение обычных споллеров
  const spollersRegular = Array.from(spollersArray).filter(function (item, index, self) {
    return !item.dataset.spollers.split(",")[0]; // "650,min" ! у которых параметра нет
  });

  //Инициализация обычных спойлеров
  if (spollersRegular.length > 0) {
    initSpollers(spollersRegular);
  };

  //Получение спойлеров с медиа запросами
  const spollersMedia = Array.from(spollersArray).filter(function (item, index, self) {
    return item.dataset.spollers.split(",")[0];// "650,min" у которых параметр есть
  });

  //Инициализация спойлеров с медиа запросами
  if (spollersMedia.length > 0) {
    const breakpointsArray = [];
    spollersMedia.forEach(item => {
      const params = item.dataset.spollers; //строка с параметрами
      const breakpoint = {};
      const paramsArray = params.split(","); //строка в массив
      breakpoint.value = paramsArray[0]; //650
      breakpoint.type = paramsArray[1] ? paramsArray[1].trim() : "max"; //min
      breakpoint.item = item;
      breakpointsArray.push(breakpoint); //добавляем все в массив
    });

    // Создаем уникальные брейкпоинты, переделка массива без повторов
    let mediaQueries = breakpointsArray.map(function (item) {
      return "(" + item.type + "-width: " + item.value + "px)," + item.value + "," + item.type;
    });
    mediaQueries = mediaQueries.filter(function (item, index, self) {
      return self.indexOf(item) === index;
    });

    // Работаем с каждым брейкпоинтом
    mediaQueries.forEach(breakpoint => {
      const paramsArray = breakpoint.split(","); //строка в массив
      const mediaBreakpoint = paramsArray[1]; //650
      const mediaType = paramsArray[2]; //min
      const matchMedia = window.matchMedia(paramsArray[0]);// метод экрана

      // Объекты с нужными условиями
      const spollersArray = breakpointsArray.filter(function (item) {
        if (item.value === mediaBreakpoint && item.type === mediaType) {
          return true;
        }
      });

      // Событие при достижении правильного условия
      matchMedia.addListener(function () {
        initSpollers(spollersArray, matchMedia);
      });
      initSpollers(spollersArray, matchMedia);
    });
  };

  // Инициализация
  function initSpollers(spollersArray, matchMedia = false) {
    spollersArray.forEach(spollersBlock => {
      spollersBlock = matchMedia ? spollersBlock.item : spollersBlock;
      //если сработал брейкпоинт добавляет класс _init
      if (matchMedia.matches || !matchMedia) {
        spollersBlock.classList.add("_init");
        initSpollerBody(spollersBlock); //отправляем обьект
        spollersBlock.addEventListener("click", setSpollerAction);
      } else {
        spollersBlock.classList.remove("_init");
        initSpollerBody(spollersBlock, false);
        spollersBlock.removeEventListener("click", setSpollerAction);
      }
    });
  };

  // Работа с контентом
  function initSpollerBody(spollersBlock, hideSpollerBody = true) {
    const spollerTitles = spollersBlock.querySelectorAll('[data-spoller]'); // Заголовки
    if (spollerTitles.length > 0) {
      spollerTitles.forEach(spollerTitle => {
        if (hideSpollerBody) {
          spollerTitle.removeAttribute("tabindex");
          //Проверка на класс _active
          if (!spollerTitle.classList.contains("_active")) {
            spollerTitle.nextElementSibling.hidden = true; // скрываем контентную часть
          }
        } else {
          // если не сработал брейкпоинт мы просто отображаем обычный блок
          spollerTitle.setAttribute("tabindex", "-1");
          spollerTitle.nextElementSibling.hidden = false;
        }
      });
    }
  };


  function setSpollerAction(e) {
    const el = e.target; //нажатый обьект
    // проверка на атрибут
    if (el.hasAttribute("data-spoller") || el.closest("[data-spoller]")) {
      const spollerTitle = el.hasAttribute("data-spoller") ? el : el.closest("[data-spoller]");// сам элемнт или родитель
      const spollersBlock = spollerTitle.closest("[data-spollers]");// ближайший родитель
      const oneSpoller = spollersBlock.hasAttribute("data-one-spoller") ? true : false;// добавлять ли функцию аккордиона
      //Проверка корректной работы аккордиона
      if (!spollersBlock.querySelectorAll("._slide").length) {
        if (oneSpoller && !spollerTitle.classList.contains("_active")) {
          hideSpollersBody(spollersBlock);
        }
        spollerTitle.classList.toggle("_active");
        _slideToggle(spollerTitle.nextElementSibling, 500);
      }
      e.preventDefault();
    }
  };
  // Скрытия элемента
  function hideSpollersBody(spollersBlock) {
    const spollerActiveTitle = spollersBlock.querySelector("[data-spoller]._active");
    if (spollerActiveTitle) {
      spollerActiveTitle.classList.remove("_active");
      _slideUp(spollerActiveTitle.nextElementSibling, 500);
    }
  }
};

//Анимация скрытых обьектов 
//SlideToggle
//Анимированно скрывает обьект
let _slideUp = (target, duration = 500) => {
  if (!target.classList.contains("_slide")) {
    target.classList.add("_slide");
    target.style.transitionProperty = "height, margin, padding";
    target.style.transitionDuration = duration + "ms";
    target.style.height = target.offsetHeight + "px";
    target.offsetHeight;
    target.style.overflow = "hidden";
    target.style.height = 0;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    window.setTimeout(() => {
      target.hidden = true;
      target.style.removeProperty("height");
      target.style.removeProperty("padding-top");
      target.style.removeProperty("padding-bottom");
      target.style.removeProperty("margin-top");
      target.style.removeProperty("margin-bottom");
      target.style.removeProperty("overflow");
      target.style.removeProperty("transition-duration");
      target.style.removeProperty("transition-property");
      target.classList.remove("_slide");
    }, duration);
  }
};
//Анимированно показывает обьект
let _slideDown = (target, duration = 500) => {
  if (!target.classList.contains("_slide")) {
    if (target.hidden) {
      target.hidden = false;
    }
    let height = target.offsetHeight;
    target.style.overflow = "hidden";
    target.style.height = 0;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    target.offsetHeight;
    target.style.transitionProperty = "height, margin, padding";
    target.style.transitionDuration = duration + "ms";
    target.style.height = height + "px";
    target.style.removeProperty("padding-top");
    target.style.removeProperty("padding-bottom");
    target.style.removeProperty("margin-top");
    target.style.removeProperty("margin-bottom");
    window.setTimeout(() => {
      target.style.removeProperty("height");
      target.style.removeProperty("overflow");
      target.style.removeProperty("transition-duration");
      target.style.removeProperty("transition-property");
      target.classList.remove("_slide");
    }, duration);
  }
};
//Комбинация двух функций
let _slideToggle = (target, duration = 500) => {
  if (target.hidden) {
    return _slideDown(target, duration);
  } else {
    return _slideUp(target, duration);
  }
};

//=============================================//
/*
Для родителя спойлеров пишем атрибут data-spollers
Для заголовков спойлеров пишем атрибут data-spoller
Если нужно включать\выключать работу спойлеров на разных размерах экранов
пишем параметры ширины и типа брейкпоинта.
Например:
data-spollers="992,max" - спойлеры будут работать только на экранах меньше или равно 992px
data-spollers="768,min" - спойлеры будут работать только на экранах больше или равно 768px

Если нужно чтобы в блоке открывался только один спойлер добавляем атрибут data-one-spoller
*/