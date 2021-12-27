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

// let start = document.querySelector('#start');
// let stop = document.querySelector('#stop');

// let timerId; // сделаем переменную глобальной
// start.addEventListener('click', function () {
//   let i = 0;
//   timerId = setInterval(function () {
//     console.log('!');
//   }, 1000);
// });
// stop.addEventListener('click', function () {
//   clearInterval(timerId);
// });

// let i = 10;
// let timerId;
// let start = document.querySelector('#start');
// let stop = document.querySelector('#stop');

// start.addEventListener('click', function func() {
//   timerId = setInterval(function () {
//     console.log(i--);
//     if (i < 0) {
//       clearInterval(timerId);
//     }
//   }, 1000);
// });
// stop.addEventListener('click', function () {
//   clearInterval(timerId);
// });

// let start = document.querySelector('#start');
// let stop = document.querySelector('#stop');
// let timerId;

// start.addEventListener('click', function () {
//   timerId = setInterval(function () {
//     let date = new Date();
//     console.log(date.getMinutes() + ' ' + date.getSeconds());
//   }, 1000);
// });

// stop.addEventListener('click', function () {
//   clearInterval(timerId);
// });

// let start = document.querySelector('#start');
// let stop = document.querySelector('#stop');

// let timerId;

// start.addEventListener('click', function () {
//   setInterval(function () {
//     let date = new Date();
//     console.log(date.getMinutes() + ' ' + date.getSeconds());
//   }, 1000);
// });

// stop.addEventListener('click', function () {
//   clearInterval(timerId);
// });

// ======================================================================219

// let elem = document.querySelector('#elem');
// setInterval(function () {
//   elem.value = Number(elem.value) + 1;
// }, 1000);

// let elem = document.querySelector('#elem');
// setInterval(function () {
//   elem.value = Number(elem.value) - 1;
// }, 1000);

// let elem = document.querySelector('#elem');
// let timerId = setInterval(function () {
//   elem.value = Number(elem.value) - 1;
//   if (elem.value == 0) {
//     clearInterval(timerId);
//   }
// }, 1000);

// ======================================================================220

// let elem = document.querySelector('#elem');

// elem.addEventListener('click', function () {
//   setInterval(function () {
//     console.log(this.value); // будет выводится undefined
//   }, 1000);
// });

// elem.addEventListener('click', function () {
//   let self = this;
//   setInterval(function () {
//     console.log(self.value);
//   }, 1000);
// });

// let elem = document.querySelector('#elem');
// elem.addEventListener('click', function () {
//   let self = this;
//   setInterval(function () {
//     self.value = Number(elem.value) + 1;
//   }, 1000);
// });

// elem.addEventListener('click', function () {
//   setInterval(() => console.log(this.value), 1000);
// });

// let elem = document.querySelector('#elem');
// elem.addEventListener('click', function () {
//   setInterval(() => {
//     this.value = Number(elem.value) + 1;
//   }, 1000);
// });

// let elem = document.querySelector('#elem');
// elem.addEventListener('click', function () {
//   function func(self) {
//     return function () {
//       console.log(self.value);
//     };
//   }
//   setInterval(func(this), 1000);
// });

// let elem = document.querySelector('#elem');

// elem.addEventListener('click', function () {
//   setInterval(
//     (function (self) {
//       return function () {
//         console.log(self.value);
//       };
//     })(this),
//     1000
//   );
// });

// ======================================================================221

// setInterval(func, 1000, 'a', 'b');
// function func(str1, str2) {
//   console.log(str1, str2); // каждую 		секунду будет вводить 'a','b'
// }

// setInterval(
//   function (str1, str2) {
//     console.log(str1, str2);
//   },
//   1000,
//   'a',
//   'b'
// );

// let elem = document.querySelector('#elem');
// elem.addEventListener('click', function () {
//   setInterval(func, 1000, this); // параметром передаем this
//   function func(self) {
//     // в self попадает this
//     console.log(self.value);
//   }
// });

// let elem = document.querySelector('#elem');
// elem.addEventListener('click', function () {
//   setInterval(
//     function (self) {
//       console.log(self.value);
//     },
//     1000,
//     this
//   );
// });

// let elem = document.querySelector('#elem');
// elem.addEventListener('click', function () {
//   setInterval(func, 1000, this);
//   function func(self) {
//     self.value--;
//   }
// });

// ======================================================================222

// let btn = document.querySelector('.btn');
// let text = document.querySelector('.text');
// btn.addEventListener('click', function () {
//   setInterval(function () {
//     text.innerHTML = Number(text.innerHTML) + 1;
//   }, 1000);
// });

// let btn = document.querySelector('.btn');
// let text = document.querySelector('.text');
// let timerId;
// btn.addEventListener('click', function () {
//   timerId = setInterval(function () {
//     text.innerHTML = Number(text.innerHTML) - 1;
//     if (text.innerHTML == 0) {
//       clearInterval(timerId);
//     }
//   }, 1000);
// });

// let elem = document.querySelector('.elem');
// setInterval(function () {
//   elem.value = Number(elem.value) ** 2;
// }, 1000);

// let elem = document.querySelector('.elem');
// let text = document.querySelector('.text');
// let timerId;
// elem.addEventListener('blur', function () {
//   text.innerHTML += elem.value;
//   timerId = setInterval(function () {
//     text.innerHTML = Number(text.innerHTML) - 1;
//     {
//       if (text.innerHTML == 0) {
//         clearInterval(timerId);
//       }
//     }
//   }, 1000);
// });

// let elem = document.querySelector('.elem');
// let text = document.querySelector('.text');
// let btn = document.querySelector('.btn');
// let timerId;

// elem.addEventListener('change', function () {
//   btn.addEventListener('click', function () {
//     text.innerHTML += elem.value;
//     timerId = setInterval(function () {
//       text.innerHTML = Number(text.innerHTML) - 1;
//       if (text.innerHTML == 0) {
//         clearInterval(timerId);
//       }
//     }, 1000);
//   });
// });

// let start = document.querySelector('.btn1');
// let btn2 = document.querySelector('.btn2');
// let text = document.querySelector('.text');
// let timerId;
// start.addEventListener('click', function () {
//   timerId = setInterval(function () {
//     text.innerHTML = Number(text.innerHTML) + 1;
//   }, 1000);
// });
// btn2.addEventListener('click', function () {
//   clearInterval(timerId);
// });

// let text = document.querySelector('.text');

// setInterval(function () {
//   text.style.backgroundColor = 'red';
// }, 1000);
// setInterval(function () {
//   text.style.backgroundColor = 'green';
// }, 2000);

// let text = document.querySelector('.text');

// setInterval(function () {
//   let date = new Date();
//   text.innerHTML =
//     date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
// }, 1000);

// ======================================================================223

// let elem = document.querySelector('#elem');

// elem.addEventListener('click', function () {
//   setTimeout(function () {
//     alert('!');
//   }, 3000);
// });

// let text = document.querySelector('.text');
// setTimeout(function () {
//   text.innerHTML += 'Hello';
// }, 10000);

// let i = 0;
// function timer() {
//   setTimeout(function () {
//     console.log(++i);
//     timer(); // вызовем сами себя
//   }, 1000);
// }
// timer();

// let i = 0;
// function timer() {
//   setTimeout(function () {
//     console.log(i++);
//     timer();
//   }, 1000);
// }
// timer();

// ======================================================================224
