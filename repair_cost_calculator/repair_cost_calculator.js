// Поиск элементов
const squareInput = document.querySelector('#square-input');
const squareRange = document.querySelector('#square-range');
const inputs = document.querySelectorAll('input');
const typeReconstructionElements = document.querySelectorAll('input[name="type"]');
const typeBuildingElements = document.querySelectorAll('input[name="building"]');
const roomsElements = document.querySelectorAll('input[name="rooms"]');
const ceilings = document.querySelector('input[name="ceiling"]');
const walls = document.querySelector('input[name="walls"]');
const floor = document.querySelector('input[name="floor"]');
const basePricePerMeter = 6000;
const totalPriceElement = document.querySelector('#total-price');

// Связка ползунка с числовым полем
squareRange.addEventListener('input', function () {
  squareInput.value = squareRange.value;
});

// Связка числового поля с ползунком
squareInput.addEventListener('input', function () {
  squareRange.value = squareInput.value;
});

// Обход всех инпутов, по изменению перерасчет
inputs.forEach(function (item) {
  item.addEventListener('input', calculate);
});

// Запускаем функцию для вывода дефолтной суммы
calculate();


// Калькулятор
function calculate() {
  // Площадь квартиры
  const square = parseInt(squareInput.value);

  // Опция "Тип ремонта"
  let typeReconstructionCost;
  typeReconstructionElements.forEach(function (item) {
    if (item.checked) {
      typeReconstructionCost = parseFloat(item.value);
    }
  });

  // Опция "Тип дома"
  let typeBuildingCost;
  typeBuildingElements.forEach(function (item) {
    if (item.checked) {
      typeBuildingCost = parseFloat(item.value);
    }
  });

  // Опция "Количество комнат"
  let roomsCost;
  roomsElements.forEach(function (item) {
    if (item.checked) {
      roomsCost = parseFloat(item.value);
    }
  });

  // Дополнительные опции
  const ceilingCost = ceilings.checked ? parseFloat(ceilings.value) : 1;
  const wallsCost = walls.checked ? parseFloat(walls.value) : 1;
  const floorCost = floor.checked ? parseFloat(floor.value) : 1;

  // Подсчет общей стоимости
  const totalPrice = parseInt(basePricePerMeter * square * typeReconstructionCost * typeBuildingCost * roomsCost * ceilingCost * wallsCost * floorCost);

  // Форматируем внешний вид суммы
  const formatter = new Intl.NumberFormat('ru');
  totalPriceElement.innerText = formatter.format(totalPrice);
};