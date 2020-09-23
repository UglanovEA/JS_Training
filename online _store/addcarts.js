// Найти кнопку "Добавить в корзину"
let cartButtons = document.querySelectorAll("[data-cart]");

// Отследить клик на кнопке "Добавить в корзину"
cartButtons.forEach(function (item) {
  item.addEventListener("click", function () {
    let card = this.closest(".card");
    // Собираем данные
    let imgSrc = card.querySelector(".product-img").getAttribute("src");
    let title = card.querySelector(".item-title").innerText;
    let itemsInBox = card.querySelector("[data-items-in-box]").innerText;
    let weight = card.querySelector(".price__weight").innerText;
    let price = card.querySelector(".price__currency").innerText;
    let counter = card.querySelector("[data-counter]").innerText;

    // Подставить шаблон
    let cartItemHTML = `<div class="cart-item">
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
    let cartWrapper = document.querySelector(".cart-wrapper")
    cartWrapper.insertAdjacentHTML("beforeend", cartItemHTML);
    // Скрываем "Ваша корзина пуста"
    document.querySelector("[data-cart-empty]").classList.add("none")
  });
})

