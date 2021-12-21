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
