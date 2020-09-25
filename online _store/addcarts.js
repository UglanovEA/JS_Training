// Div внутри корзины, в который мы добавляем товары
let cartWrapper = document.querySelector(".cart-wrapper");

// Найти кнопку "Добавить в корзину"
let cartButtons = document.querySelectorAll("[data-cart]");

// Отследить клик на кнопке "Добавить в корзину"
cartButtons.forEach(function (item) {
  item.addEventListener("click", function () {
    let card = this.closest(".card");

    // Проверяем есть ли уже такой товар в корзине
    // Определяем id добавляемого товара
    let id = card.dataset.id;
    let counterElement = card.querySelector("[data-counter]");
    let counter = card.querySelector("[data-counter]").innerText;
    let itemInCart = cartWrapper.querySelector(`[data-id="${id}"]`);
    if (itemInCart) {

      //если есть товар в корзине, то увеличить количество товара
      let counterElement = itemInCart.querySelector("[data-counter]");
      counterElement.innerText = parseInt(counterElement.innerText) + parseInt(counter);
    } else {

      //Если нет товара, то добавляем
      // Собираем данные с товара
      let imgSrc = card.querySelector(".product-img").getAttribute("src");
      let title = card.querySelector(".item-title").innerText;
      let itemsInBox = card.querySelector("[data-items-in-box]").innerText;
      let weight = card.querySelector(".price__weight").innerText;
      let price = card.querySelector(".price__currency").innerText;

      // Подставить шаблон
      let cartItemHTML = `<div class="cart-item" data-id="${id}">
    <div class="cart-item__top">
      <div class="cart-item__img">
        <img src="${imgSrc}" alt="" />
      </div>
      <div class="cart-item__desc">
        <div class="cart-item__title">${title}</div>
        <div class="cart-item__weight">${itemsInBox} / ${weight}</div>
        <div class="cart-item__details">
          <div class="items items--small counter-wrapper">
            <div class="items__control" data-action="minus">-</div>
            <div class="items__current" data-counter>${counter}</div>
            <div class="items__control" data-action="plus">+</div>
          </div>
          <div class="price">
            <div class="price__currency">${price}</div>
          </div>
        </div>
      </div>
    </div>
  </div>`;

      // Добавляем в раздел в "Ваш заказ"
      cartWrapper.insertAdjacentHTML("beforeend", cartItemHTML);

      // Скрываем "Ваша корзина пуста"
      document.querySelector("[data-cart-empty]").classList.add("none")

    }

    // После нажатия "В корзину", счетчик сбрасывается на 1
    counterElement.innerText = 1;
  });
})

