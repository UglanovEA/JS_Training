// 1. Найти кнопку +
let buttonsPlus = document.querySelectorAll('[data-action="plus"]');

// Обходим коллецию из всех кнопок, и для каждой выполняе определенное действие
buttonsPlus.forEach(function (item) {

    // 2. Отследить клик по кнопке
	item.addEventListener('click', function () {

		// 3. По клику совершаем действие: увеличиваем счетчик на 1
		// 3.1 Находим счетчик
		// 3.1.2 Находим весь блок с текущим счетчиком
		let counterWrapper = this.closest('.counter-wrapper');

		// 3.1.3 Внутри всего блока находим тег который отвечает за счетчик
		let counter = counterWrapper.querySelector('[data-counter]');

		// 3.2 Увеличиваем счетчик на 1
		counter.innerText = ++counter.innerText;
	});
});

let buttonsMinus = document.querySelectorAll('[data-action="minus"]');

buttonsMinus.forEach(function(item){
    item.addEventListener('click', function () {
		let counterWrapper = this.closest('.counter-wrapper'); // Нашли Родителя
		let counter = counterWrapper.querySelector('[data-counter]'); // От родителя нашли div c счетчиком

		// Проверка. Если счечик больше 1, тогда уменьшаем, если равен 1 - тогда ничего не делаем
		if (parseInt(counter.innerText) > 1) {
			// действие, если условие выполняется
			counter.innerText = --counter.innerText; // Уменьшили счетчик на 1
		}
	});
})
