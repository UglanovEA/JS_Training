// 1. Найти кнопку +
let buttonPlus = document.querySelector('[data-action="plus"]');

// 2. Отследить клик по кнопке
buttonPlus.addEventListener("click", function () {
	// 3. По клику совершаем действие: увеличиваем счетчик на 1
	// 3.1 Находим счетчик
	// 3.1.2 Находим весь блок с текущим счетчиком
	let counterWrapper = buttonPlus.closest(".counter-wrapper");

	// 3.1.3 Внутри всего блока находим тег который отвечает за счетчик
	let counter = counterWrapper.querySelector("[data-counter]");

	// 3.2 Увеличиваем счетчик на 1
	counter.innerText = ++counter.innerText;
});

let buttonMinus = document.querySelector('[data-action="minus"]');

buttonMinus.addEventListener("click", function () {
	let counterWrapper = buttonMinus.closest(".counter-wrapper"); // Нашли Родителя
	let counter = counterWrapper.querySelector("[data-counter]"); // От родителя нашли div c счетчиком

	// Проверка. Если счечик больше 1, тогда уменьшаем, если равен 1 - тогда ничего не делаем
	if (parseInt(counter.innerText) > 1) {
		// действие, если условие выполняется
		counter.innerText = --counter.innerText; // Уменьшили счетчик на 1
	}
});
