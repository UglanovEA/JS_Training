'use strict';
// ======================================================================
// var a = {
//   name: 'a',
//   foo: function () {
//     console.log(this.name);
//   },
// };
// var b = { name: 'b' };
// var c = { name: 'c' };
// a.foo.bind(b).bind(c)(); //b

// const sym = Symbol('key');
// const result = sym.description;
// console.log(result);

// const nums = [1, 2, 3];
// const result = nums.join();
// console.log(result); //'1,2,3'

// const a = [NaN, null, undefined, false];
// const result = a.reduce((b, c) => b + a.findIndex((d) => d === c), 0);
// console.log(result);

// const fi = (...a) => a[0];
// function hi(name) {
//   return `Hello ${this(name)}!`;
// }
// console.log(hi.call(fi, 'world'));

// const values = [10, 20, 30, 40];
// const [first, ...rest] = values;
// const result = rest[1];
// console.log(result); //30

// const obj = {
//   a: 3,
//   b: 1,
//   c: 3,
// };
// let result;
// for (let item in obj) {
//   result += item;
// }
// console.log(result); //undefinedabc

// const set = new Set();
// set.add(true);
// set.add(1);
// set.add({ name: 'max' });
// for (let item of set) {
//   console.log(item + 5); // 6 6 [object Object]5
// }

// console.log(Math.random()); //0-1

// class A {
//   name() {
//     return 'alpha';
//   }
//   hi() {
//     return `bye ${this.name()}`;
//   }
// }
// class B extends A {
//   name() {
//     return `${super.name()} /beta`;
//   }
//   hi() {
//     return `hi ${this.name()}`;
//   }
// }
// console.log(B.prototype.hi.call(new A())); //hi alpha

// let kont = 1;
// const func = (x = 2) => {
//   kont = x;
// };
// func([true]);
// console.log(kont); //[true]

// const arr = [1, 2, 3, 4, 5];
// const result = arr.copyWithin(-1, -2, -1);
// console.log(result); //[1,2,3,4,4]

// const str = 'hello';
// const [x, y, ...rest] = str;
// console.log(y); //e

// const arr = ['one', 'two', 'three'];
// const it = arr.keys();
// for (const item of it) {
//   console.log(item); //0,1,2,3,4
// }

// const props = [
//   { id: 1, name: 'biz' },
//   { id: 2, name: 'maz' },
//   { id: 3, name: 'goz' },
// ];
// const [, , { name }] = props;
// console.log(name); //'goz'

// let bool = new Boolean(false);
// if (bool) {
//   console.log('hello'); //hello
// } else {
//   console.log('error');
// }

// let a = {},
//   b = { key: 'c' },
//   c = { key: 'b' };

// a[b] = 25;
// a[c] = 35;
// console.log(a); //35
