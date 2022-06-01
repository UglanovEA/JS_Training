'use strict';
// ======================================================================256

// let parent = document.querySelector('#parent');
// let p = document.createElement('p');
// p.innerHTML = '!';
// parent.appendChild(p);

// let parent = document.querySelector('#elem');
// let li = document.createElement('li');
// li.innerHTML = 'item';
// parent.appendChild(li);

// let parent = document.querySelector('#elem');
// let button = document.querySelector('#button');
// let li = document.createElement('li');
// li.innerHTML = 'item';
// button.addEventListener('click', () => parent.appendChild(li));

// ======================================================================257

// let parent = document.querySelector('#parent');
// let p = document.createElement('p');
// p.innerHTML = '!';
// p.addEventListener('click', function () {
//   alert(this.innerHTML);
// });
// parent.appendChild(p);

// let parent = document.querySelector('#elem');
// let button = document.querySelector('#button');
// let li = document.createElement('li');
// li.innerHTML = 'item';
// button.addEventListener('click', () => parent.appendChild(li));
// li.addEventListener('click', () => (li.innerHTML += '!'));

// ======================================================================258

// let parent = document.querySelector('#parent');
// for (let i = 1; i <= 9; i++) {
//   let p = document.createElement('p');
//   p.innerHTML = '!';
//   parent.appendChild(p);
// }

// let parent = document.querySelector('#parent');
// for (let i = 1; i <= 10; i++) {
//   let li = document.createElement('li');
//   li.innerHTML = i;
//   parent.appendChild(li);
// }

// ======================================================================259

// let parent = document.querySelector('#parent');
// for (let i = 1; i <= 9; i++) {
//   let p = document.createElement('p');
//   p.innerHTML = '!';
//   p.addEventListener('click', function () {
//     alert(this.innerHTML);
//   });
//   parent.appendChild(p);
// }

// let parent = document.querySelector('#parent');
// let text = document.querySelector('.text');
// for (let i = 1; i <= 5; i++) {
//   let input = document.createElement('input');
//   input.value = 'text' + i;
//   input.addEventListener('blur', () => (text.innerHTML = input.value));
//   parent.appendChild(input);
// }

// ======================================================================260

// let parent = document.querySelector('#parent');
// let arr = [1, 2, 3, 4, 5];
// for (let elem of arr) {
//   let p = document.createElement('p');
//   p.innerHTML = elem;
//   parent.appendChild(p);
// }

// let parent = document.querySelector('#parent');
// let arr = [1, 2, 3, 4, 5];
// for (let elem of arr) {
//   let p = document.createElement('p');
//   p.innerHTML = elem;
//   p.addEventListener('click', () => (p.innerHTML = Number(p.innerHTML) + 1));
//   parent.appendChild(p);
// }

// ======================================================================261

// let parent = document.querySelector('#parent');
// let arr = [1, 2, 3, 4, 5];
// for (let item of arr) {
//   let li = document.createElement('li');
//   li.innerHTML = item;
//   parent.appendChild(li);
// }

// let parent = document.querySelector('#parent');
// let arr = [1, 2, 3, 4, 5];
// for (let item of arr) {
//   let li = document.createElement('li');
//   li.innerHTML = item;
//   li.addEventListener('click', () => alert(li.innerHTML));
//   parent.appendChild(li);
// }

// let parent = document.querySelector('#parent');
// let arr = [1, 2, 3, 4, 5];
// for (let item of arr) {
//   let li = document.createElement('li');
//   li.innerHTML = item;
//   li.addEventListener('click', () => (li.innerHTML += '!'));
//   parent.appendChild(li);
// }

// let parent = document.querySelector('#parent');
// let arr = [1, 2, 3, 4, 5];
// for (let item of arr) {
//   let li = document.createElement('li');
//   li.innerHTML = item;
//   li.addEventListener('click', func);
//   function func() {
//     li.innerHTML += '!';
//     li.removeEventListener('click', func);
//   }
//   parent.appendChild(li);
// }

// ======================================================================262

// let table = document.querySelector('#table');
// for (let i = 0; i < 3; i++) {
//   let tr = document.createElement('tr');
//   for (let i = 0; i < 3; i++) {
//     let td = document.createElement('td');
//     tr.appendChild(td);
//   }
//   table.appendChild(tr);
// }

// let table = document.querySelector('#table');
// for (let i = 1; i <= 5; i++) {
//   let tr = document.createElement('tr');
//   for (let j = 1; j <= 5; j++) {
//     let td = document.createElement('td');
//     tr.appendChild(td);
//   }
//   table.appendChild(tr);
// }

// let table = document.querySelector('#table');
// for (let i = 1; i <= 10; i++) {
//   let tr = document.createElement('tr');
//   for (let j = 1; j <= 5; j++) {
//     let td = document.createElement('td');
//     td.innerHTML = 'x';
//     tr.appendChild(td);
//   }
//   table.appendChild(tr);
// }

// let table = document.querySelector('#table');
// let tr = document.querySelector('.tr');
// let td = document.querySelector('.td');
// tr.addEventListener('blur', function () {
//   td.addEventListener('blur', function () {
//     for (let i = 1; i <= tr.value; i++) {
//       let tr = document.createElement('tr');
//       for (let j = 1; j <= td.value; j++) {
//         let td = document.createElement('td');
//         td.innerHTML = 'x';
//         tr.appendChild(td);
//       }
//       table.appendChild(tr);
//     }
//   });
// });

// ======================================================================263

// let table = document.querySelector('#table');
// let k = 1;
// for (let i = 0; i < 5; i++) {
//   let tr = document.createElement('tr');
//   for (let i = 0; i < 5; i++) {
//     let td = document.createElement('td');
//     td.innerHTML = k;
//     k++;
//     tr.appendChild(td);
//   }
//   table.appendChild(tr);
// }

// let table = document.querySelector('#table');
// let k = 2;
// for (let i = 0; i < 5; i++) {
//   let tr = document.createElement('tr');
//   for (let i = 0; i < 5; i++) {
//     let td = document.createElement('td');
//     td.innerHTML = k;
//     k += 2;
//     tr.appendChild(td);
//   }
//   table.appendChild(tr);
// }

// ======================================================================264

// let arr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
//   [10, 11, 12],
// ];
// let table = document.querySelector('#table');
// for (let item of arr) {
//   let tr = document.createElement('tr');
//   for (let item2 of item) {
//     let td = document.createElement('td');
//     td.innerHTML = item2 * 2;
//     tr.appendChild(td);
//   }
//   table.appendChild(tr);
// }

// ======================================================================265

// let table = document.querySelector('#table');
// let arr = [
//   { name: 'employee1', age: 30, salary: 400 },
//   { name: 'employee2', age: 31, salary: 500 },
//   { name: 'employee3', age: 32, salary: 600 },
// ];
// for (let item of arr) {
//   let tr = document.createElement('tr');
//   let td1 = document.createElement('td');
//   td1.innerHTML = item.name;
//   tr.appendChild(td1);
//   let td2 = document.createElement('td');
//   td2.innerHTML = item.age;
//   tr.appendChild(td2);
//   let td3 = document.createElement('td');
//   td3.innerHTML = item.salary;
//   tr.appendChild(td3);
//   table.appendChild(tr);
// }

// let table = document.querySelector('#table');
// let arr = [
//   { name: 'employee1', age: 30, salary: 400 },
//   { name: 'employee2', age: 31, salary: 500 },
//   { name: 'employee3', age: 32, salary: 600 },
// ];
// for (let item of arr) {
//   let tr = document.createElement('tr');
//   let td1 = document.createElement('td');
//   td1.innerHTML = item.name;
//   tr.appendChild(td1);
//   let td2 = document.createElement('td');
//   td2.innerHTML = item.age;
//   td2.addEventListener(
//     'click',
//     () => (td2.innerHTML = Number(td2.innerHTML) + 1)
//   );
//   tr.appendChild(td2);
//   let td3 = document.createElement('td');
//   td3.innerHTML = item.salary;
//   tr.appendChild(td3);
//   table.appendChild(tr);
// }

// ======================================================================266

// let table = document.querySelector('#table');
// let button = document.querySelector('.button');
// let tr = document.createElement('tr');
// button.addEventListener('click', () => {
//   for (let i = 1; i <= 1; i++) {
//     let td = document.createElement('td');
//     tr.appendChild(td);
//   }
// });
// table.appendChild(tr);

// let table = document.querySelector('#table');
// let button = document.querySelector('.button');
// button.addEventListener('click', () => {
//   let tr = document.createElement('tr');
//   let trs = document.querySelectorAll('#table tr');
//   for (let tr of trs) {
//     let td = document.createElement('td');
//     tr.appendChild(td);
//   }
//   table.appendChild(tr);
// });

// ======================================================================267
