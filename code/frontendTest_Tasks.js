// const set = new Set();
// set.add(1);
// set.add('js tests');
// set.add({ name: 'js tests' });
// for (let item of set) {
//   console.log(item + 2); // 3 , js tests2, [object Object]2
// }

// =======================================================

// var f = function () {
//   this.x = 5;
//   (function () {
//     this.x = 3;
//   })();
//   console.log(this.x); // 3
// };
// f();

// =======================================================

// const shape = {
//   radius: 10,
//   diameter() {
//     return this.radius * 2;
//   },
//   perimeter: () => 2 * Math.PI * this.radius,
// };
// console.log(shape.diameter());
// console.log(shape.perimeter());

// =======================================================

// for (i = 5; i < 10; i++) {
//   for (j = i; j < i + 1; j++) {
//     alert(j); // 5
//   }
// }

// =======================================================

// const func = function firstName() {
//   return 2021;
// };
// let result = typeof firstName;
// console.log(result);

// =======================================================

// var x = 2;
// console.log(~x); //-3

// =======================================================

// function s(y) {
// 	delete y;
// 	return y;
// }
// console.log(s(2)) // 2

// =======================================================

// console.log((22222).toString()); /'22222'

// =======================================================

// let x = 5;
// console.log(x++ + 2); //7

// =======================================================

// console.log([12, 13, 345] + [23, 89] + [45, 890, 5]); //'12,13,34523,8945,890,5'

// =======================================================

// let i = 2;
// ++i + i++ + i + ++i;
// console.log(i);

// =======================================================

// let num = 10;
// console.log(num + '-5'); //'10-5'

// =======================================================

// let a = new Array(1, 2);
// let b = new Array(3);

// console.log(a[0] + b[0]); //Nan

// =======================================================

// let arr = [1, 2, 3];
// arr.something = 5;
// console.log(arr.something); // 5
// console.log(arr);

// =======================================================

// function addBase(base) {
//   return function (num) {
//     return base + num;
//   };
// }
// var addTen = addBase(10);
// console.log(addTen(10)); //20
// console.log(addTen(90)); //100
// console.log(addTen(-2)); //8

// =======================================================
