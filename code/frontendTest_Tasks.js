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

// console.log([] + 2 + [] + 8); // '28'

// =======================================================

// [2, 2, 4, 4].reduce((y, a) => console.log(y, a)); // 2, 2, undefined 4, undefined 4

// =======================================================

// console.log(+'8' + '2'); //'82'
// console.log(+'2' + 4); // 6

// =======================================================

// console.log(Promise.resolve(222)); // Promise {<fulfilled>: 222}

// =======================================================

// console.log(![]); //false
// console.log(!['Hello']); //false

// =======================================================

// console.log(null >= 0); //true

// =======================================================

// function bike() {
//   console.log(this.name);
// }
// let name = 'kawa';
// var obj1 = { name: 'suz', bike: bike };
// var obj2 = { name: 'hon', bike: bike };

// bike(); //kawa
// obj1.bike(); // suz
// obj2.bike(); // hon

// =======================================================

// const data = new Set();
// data.add('JS');
// data.add(22);
// data.add({ name: 'JS' });

// for (let it of data) {
//   console.log(it + 88); // JS88 110 [object Object]88
// }

// =======================================================

// console.log(void true); // undefined

// =======================================================

// let f = (a, b) => arguments.length;
// console.log(f(a, b)); //referenceError

// =======================================================

// const arr = ['bmw', 'audi'];
// arr.push(function () {
//   console.log(this);
// });
// arr[2](); // ['bmw', 'audi', function]

// =======================================================

// function addlist(item, list) {
//   return list.push(item);
// }
// const result = addlist('one', ['two']);
// console.log(result); //2

// =======================================================

// var arr = [];
// arr[0] = 'a';
// arr[1] = 'b';
// arr[10] = 'c';
// arr.foo = 'd';
// arr.foo2 = 'fff';
// console.log(arr); //11

// =======================================================

// function f() {
//   console.log(name); //undefined
//   console.log(age); //referenceError
//   var name = 'tron';
//   let age = 21;
// }
// f();

// =======================================================

// const colorConfig = {
//   red: true,
//   blue: false,
//   green: true,
// };

// const colors = ['pink', 'red', 'blue'];
// console.log(colorConfig.colors[1]); //typeError

// =======================================================

// let newList = [1, 2, 3].push(4);
// console.log(newList.push(5));

// =======================================================

