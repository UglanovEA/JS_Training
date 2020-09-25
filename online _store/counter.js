let body = document.querySelector("body");
body.addEventListener("click", function (event) {
	// Проверяем клик по кнопкам + или -
	if (event.target.hasAttribute("data-action")) {
		//Работа над счетчиком
		// Находим div c счетчиком
		let counterWrapper = event.target.closest('.counter-wrapper');
		let counter = counterWrapper.querySelector('[data-counter]');

		// Для кнопки + → Увеличиваем
		if (event.target.dataset.action === 'plus') {
			counter.innerText = ++counter.innerText;
		} else {
			// Для кнопки - → Проверяем на > 1 и Уменьшаем
			if (parseInt(counter.innerText) > 1) {
				// действие, если условие выполняется
				counter.innerText = --counter.innerText; // Уменьшили счетчик на 1
			}
		}
	}
});