// ======================================================================207

// let elem = document.querySelector('#elem');
// elem.addEventListener('blur', func);
// function func() {
//   console.log(this.value); // по потери фокуса выведет 'text'
// }

// let elem1 = document.querySelector('#elem1');
// elem1.addEventListener('blur', func);

// let elem2 = document.querySelector('#elem2');
// elem2.addEventListener('blur', func);

// function func() {
//   console.log(this.value); // выведет или 'text1', или 'text2'
// }

// ======================================================================208

// function func() {
//   console.log(this);
// }
// func(); // window

// 'use strict';
// function func() {
//   console.log(this);
// }
// func(); // undefined

// 'use strict';
// console.log(this); // в this ссылка на window

// ======================================================================209

// function parent() {
//   let str = 'abcde';
//   function child() {
//     console.log(str); // выведет 'abcde'
//   }
//   child(); // вызываем внутреннюю функцию
// }
// parent(); // вызываем внешнюю функцию

// 'use strict';
// let elem = document.querySelector('#elem');
// elem.addEventListener('blur', parent);
// function parent() {
//   console.log(this); // выведет ссылку на наш инпут
//   function child() {
//     console.log(this); // выведет undefined
//   }
//   child();
// }

// 'use strict';
// let elem = document.querySelector('#elem');
// elem.addEventListener('blur', parent);
// function parent() {
//   console.log(this.value); // text
//   function child() {
//     console.log(this.value); // TypeError
//   }
//   child();
// }

// ======================================================================210

// 'use strict';
// let elem = document.querySelector('#elem');
// elem.addEventListener('blur', parent);

// function parent() {
//   console.log(this.value); // выведет 'text'
//   let self = this; // запишем this в любую переменную, например, в self
//   function child() {
//     console.log(self.value); // выведет 'text'
//   }
//   child();
// }

// 'use strict';
// let elem = document.querySelector('#elem');
// elem.addEventListener('blur', func);
// function func() {
//   let self = this;
//   alert(square());
//   function square() {
//     return self.value * self.value;
//   }
// }

// let elem = document.querySelector('#elem');
// elem.addEventListener('blur', parent);
// function parent() {
//   child(this); // передаем параметром this
//   function child(param) {
//     console.log(param.value); // выводим value инпута
//   }
// }

// let elem = document.querySelector('#elem');
// elem.addEventListener('blur', func);
// function func() {
//   square(this);
//   alert(square(this));
//   function square(param) {
//     return param.value * param.value;
//   }
// }

// let elem = document.querySelector('#elem');
// elem.addEventListener('blur', parent);
// function parent() {
//   console.log(this.value); // выведет 'text'
//   let child = () => {
//     console.log(this.value); // выведет 'text'
//   };
//   child();
// }

// let elem = document.querySelector('#elem');
// elem.addEventListener('blur', func);
// function func() {
//   let square = () => this.value * this.value;
//   square();
//   alert(square());
// }

// ======================================================================211

// let elem = document.querySelector('#elem');
// function func() {
//   console.log(this.value); // выведет value инпута
// }
// func.call(elem);

// let elem1 = document.querySelector('#elem1');
// let elem2 = document.querySelector('#elem2');
// let elem3 = document.querySelector('#elem3');
// function func() {
//   console.log(this.value);
// }
// func.call(elem1);
// func.call(elem2);
// func.call(elem3);

// let elem = document.querySelector('#elem');
// function func(surname, name) {
//   console.log(this.value + ', ' + surname + ' ' + name);
// }
// func.call(elem, 'Иванов', 'Иван'); // тут должно вывести 'привет, Иванов Иван'

// ======================================================================212

// let elem = document.querySelector('#elem');
// function func(surname, name) {
//   console.log(this.value + ', ' + surname + ' ' + name);
// }
// func.apply(elem, ['Иванов', 'Иван']); // тут должно вывести 'привет, Иванов Иван'

// ======================================================================213

// let elem = document.getElementById('elem');
// function func(param1, param2) {
//   console.log(this.value + param1 + param2);
// }
// let newFunc = func.bind(elem);
// newFunc('1', '2'); // выведет 'text12'

// let elem = document.getElementById('elem');
// function func(surname, name) {
//   console.log(this.value + ', ' + surname + ' ' + name);
// }
// // Тут напишите конструкцию с bind()
// func = func.bind(elem);
// func('Иванов', 'Иван'); // тут должно 	вывести 'привет, Иванов Иван'
// func('Петров', 'Петр'); // тут должно 	вывести 'привет, Петров Петр'

// ======================================================================214
