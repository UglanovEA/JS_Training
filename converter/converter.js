//с функиями callback
// fetch('https://www.cbr-xml-daily.ru/daily_json.js').then(function(result){
//  return result.json()
// }).then(function(data) {
//   console.log(data)
// })

const rates = {}
const elementUSD = document.querySelector('[data-value="USD"]')
const elementEUR = document.querySelector('[data-value="EUR"]')
const elementGBP = document.querySelector('[data-value="GBP"]')
const input = document.querySelector('#input')
const result = document.querySelector('#result')
const select = document.querySelector('#select')

getCurrencies()

// Получение курса валют и отображение
async function getCurrencies() {
  const response = await fetch('https://www.cbr-xml-daily.ru/daily_json.js');
  const data = await response.json();
  const result = await data;

  rates.USD = result.Valute.USD
  rates.EUR = result.Valute.EUR
  rates.GBP = result.Valute.GBP

  elementUSD.textContent = rates.USD.Value.toFixed(2)
  elementEUR.textContent = rates.EUR.Value.toFixed(2)
  elementGBP.textContent = rates.GBP.Value.toFixed(2)

  if (rates.USD.Value > rates.USD.Previous) {
    elementUSD.classList.add('top')
  } else {
    elementUSD.classList.add('bottom')
  }
  if (rates.EUR.Value > rates.EUR.Previous) {
    elementEUR.classList.add('top')
  } else {
    elementEUR.classList.add('bottom')
  }
  if (rates.GBP.Value > rates.GBP.Previous) {
    elementGBP.classList.add('top')
  } else {
    elementGBP.classList.add('bottom')
  }

}

input.oninput = convertValue;
select.oninput = convertValue;

// Функция конвертации
function convertValue() {
  result.value = (parseFloat(input.value) / rates[select.value].Value).toFixed(2)
};