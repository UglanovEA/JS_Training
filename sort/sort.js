let list = document.querySelector('.list');
let items = document.querySelectorAll('.list li');
let button = document.querySelector('.button');

button.addEventListener('click', function () {
  //получаем nodelist потом переобразуем в массив
  let sorted = [...items].sort((a, b) => a.innerHTML - b.innerHTML);
  // очищаем все li
  list.innerHTML = '';
  //добавляем все li
  for (let li of sorted) {
    list.appendChild(li)
  }
});


let table = document.querySelector('.table');
let trs = document.querySelectorAll('.table tr');
let button2 = document.querySelector('.button2');

button2.addEventListener('click', function () {
  let sorted = [...trs].sort((a, b) => a.children[0].innerHTML - b.children[0].innerHTML);
  table.innerHTML = '';
  for (let tr of sorted) {
    table.appendChild(tr)
  }
})
