// ======================================================================214

// setInterval(function () {
//   console.log('!');
// }, 1000);

// setInterval(function () {
//   console.log('!');
// }, 3000);

// ======================================================================215

// let i = 0;
// setInterval(function() {
// 	console.log(++i);
// }, 1000);

// let i = 0;
// setInterval(() => console.log(++i), 1000);

// let i = 100;
// setInterval(() => console.log(i--), 1000);

// ======================================================================216

// let i = 0;
// let timerId = setInterval(function () {
//   console.log(++i);
//   if (i >= 10) {
//     clearInterval(timerId);
//   }
// }, 1000);

// let i = 10;
// let interval = setInterval(function () {
//   console.log(i--);
//   if (i < 0) {
//     clearInterval(interval);
//   }
// }, 1000);

// ======================================================================217

// let start = document.querySelector('#start');
// start.addEventListener('click', function () {
//   let i = 0;
//   setInterval(function () {
//     console.log(++i);
//   }, 1000);
// });

// let start = document.querySelector('#start');
// start.addEventListener('click', function () {
//   let i = 100;
//   setInterval(function () {
//     console.log(i--);
//   }, 1000);
// });

// let start = document.querySelector('#start');
// start.addEventListener('click', function func() {
//   let i = 0;
//   setInterval(function () {
//     console.log(++i);
//   }, 1000);
//   this.removeEventListener('click', func); // отвязываем обработчик
// });

// let start = document.querySelector('#start');
// start.addEventListener('click', function func() {
//   let i = 100;
//   setInterval(function () {
//     console.log(i--);
//   }, 1000);
//   this.removeEventListener('click', func);
// });

// ======================================================================218
