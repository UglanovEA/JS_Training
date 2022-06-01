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
