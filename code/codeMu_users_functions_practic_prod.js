'use strict';
// ======================================================================129

// let num = 1;
// function func() {
//   alert(num);
// }
// func();

// let num = 1;
// function func() {
//   alert(num);
// }
// num = 2;
// func();

// function func() {
//   alert(num);
// }
// let num;
// num = 1;
// func();
// num = 2;
// func();

// function func() {
//   let num = 5;
//   return num;
// }
// alert(num);

// function func() {
//   let num = 5;
//   return num;
// }
// alert(func());

// let num = 1;
// function func() {
//   num = 2;
// }
// func();
// alert(num);

// let num = 1;
// function func() {
//   let num = 2;
// }
// func();
// alert(num);

// let num = 1;
// function func() {
//   num = 2;
// }
// func();
// alert(num);

// let num = 1;
// function func() {
//   num = 2;
// }
// alert(num);

// let num = 1;
// function func() {
//   let num = 2;
// }
// func();
// alert(num);

// let num = 1;
// function func() {
//   let num = 2;
// }
// alert(num);
// func();

// let num = 1;
// function func() {
//   num = 2;
// }
// alert(num);
// func();

// let num = 1;
// function func() {
//   num++;
// }
// func();
// func();
// func();
// alert(num);

// function func() {
//   num = 2;
// }
// let num = 1;
// alert(num);
// func();

// function func() {
//   num = 2;
// }
// let num = 1;
// func();
// alert(num);

// ======================================================================130

// function func(localNum) {
//   alert(localNum);
// }
// func(1);

// function func(localNum) {
//   alert(localNum);
// }
// let num = 1;
// func(num);

// function func(localNum) {
//   alert(localNum);
// }
// let num = 1;
// func(num);
// num = 2;

// let num = 1;
// function func(localNum) {
//   alert(localNum);
// }
// num = 2;
// func(num);

// function func(localNum) {
//   localNum = 2;
// }
// let num = 1;
// func(num);
// alert(num);

// function func(localNum) {
//   num = 2;
// }
// let num = 1;
// func(num);
// alert(num);

// function func(localNum) {
//   let num = 2;
// }
// let num = 1;
// func(num);
// alert(num);

// function func(num) {
//   num = 2;
// }
// let num = 1;
// func(num);
// alert(num);

// function func() {
//   num = 2;
// }
// let num = 1;
// func();
// alert(num);

// function func() {
//   let num = 2;
// }
// let num = 1;
// func();
// alert(num);

// ======================================================================131

// function func() {
//   return '!';
// }
// console.log(func);

// ======================================================================132

// function func() {
//   return 'str';
// }
// func = 123;
// console.log(func);

// function func1() {
//   return 3;
// }
// let func2 = func1;
// console.log(func1() + func2());

// let func1 = function () {
//   return 1;
// };
// let func2 = function () {
//   return 2;
// };
// console.log(func1() + func2());

// ======================================================================133

// console.log(func());
// function func() {
//   return 1;
// }

// console.log(func1);
// let func1 = function () {
//   return 2;
// };

// let func1 = function () {
//   alert('!');
// };
// let func2 = function () {
//   alert('!');
// };
// function func3() {
//   alert('!');
// }

// ======================================================================134

// -function func() {
//   alert('!');
// };
// -1;
// function func() {
//   alert('!');
// }
// -1;
// function func() {
//   alert('!');
// }
// 1;
// function func() {
//   alert('!');
// }
// function func() {
//   // это Function Declaration
//   alert('!');
// }
// +1;
// func();
// function func() {
//   alert('!');
// }
// +1;
// function func() {
//   alert('!');
// }
// +1;
// +1;
// function func() {
//   alert('!');
// }
// +1;
// function func() {
//   alert('!');
// }
// +alert('!');

// ======================================================================135

// let arr = [
//   function () {
//     return 1;
//   },
//   function () {
//     return 2;
//   },
//   function () {
//     return 3;
//   },
// ];

// console.log(arr[2]() + arr[1]() + arr[0]());
// for (let item of arr) {
//   console.log(item());
// }

// ======================================================================136

// let obj = {
//   func1: function () {
//     return 1;
//   },
//   func2: function () {
//     return 2;
//   },
//   func3: function () {
//     return 3;
//   },
// };
// console.log(obj.func1() + obj.func2() + obj.func3());
// for (let key in obj) {
//   console.log(obj[key]());
// }

// let obj = {
//   func1: function (arr) {
//     let sum = 0;
//     for (let item of arr) {
//       sum += item;
//     }
//     return sum;
//   },
//   func2: function (arr) {
//     let sum = 0;
//     for (let item of arr) {
//       sum += item * item;
//     }
//     return sum;
//   },
//   func3: function (arr) {
//     let sum = 0;
//     for (let item of arr) {
//       sum += item * item * item;
//     }
//     return sum;
//   },
// };
// console.log(obj.func1([1, 2, 3]));
// console.log(obj.func2([1, 2, 3]));
// console.log(obj.func3([1, 2, 3]));

// ======================================================================137

// function test(func1, func2, func3) {
//   return func1() + func2() + func3();
// }
// function func1() {
//   return 1;
// }
// function func2() {
//   return 2;
// }
// function func3() {
//   return 3;
// }
// console.log(test(func1, func2, func3));

// function test(func) {
//   console.log(func(1, 2));
// }
// let func = function func(num1, num2) {
//   return num1 + num2;
// };
// test(func);

// function test(num, func1, func2) {
//   return func1(num) + func2(num);
// }
// function func1(num) {
//   return num * num;
// }
// function func2(num) {
//   return num * num * num;
// }
// console.log(test(2, func1, func2));

// function test(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     arr[i] = (function () {
//       return arr[i] * arr[i] * arr[i];
//     })();
//   }
//   return arr;
// }
// console.log(test([1, 2, 3]));

// ======================================================================138
// ======================================================================139

// function func(num1, num2) {
//   function square(num1) {
//     return num1 * num1;
//   }
//   function cube(num2) {
//     return num2 * num2 * num2;
//   }
//   return square(num1) + cube(num2);
// }
// console.log(func(2, 3));

// ======================================================================140

// function test() {
//   let num = 1;
//   function func() {
//     alert(num);
//   }
//   func();
// }
// test();

// function test() {
//   let num = 1;
//   function func() {
//     alert(num);
//   }
// }
// test();

// function test() {
//   let num = 1;
//   function func() {
//     alert(num);
//   }
//   func();
// }

// function test() {
//   let num;
//   function func() {
//     alert(num);
//   }
//   num = 1;
//   func();
//   num = 2;
//   func();
// }
// test();

// function test(num1, num2) {
//   function func() {
//     alert(num1 + num2);
//   }
//   func();
// }
// test(1, 2);

// function test(num1, num2) {
//   function func() {
//     alert(num1 + num2);
//   }
//   num1 = 2;
//   func();
// }
// test(1, 2);

// function test(num) {
//   function func(localNum) {
//     alert(localNum);
//   }
//   func(num);
// }
// test(1);

// function test(num) {
//   function func(localNum) {
//     alert(localNum);
//   }
//   func(num + 1);
// }
// test(1);

// function test(num) {
//   function func(localNum) {
//     alert(num);
//   }
//   func(num + 1);
// }
// test(1);

// function test(num) {
//   function func(localNum) {
//     localNum = 2;
//   }
//   func(num);
//   alert(num);
// }
// test(1);

// function test(num) {
//   function func(localNum) {
//     localNum = 2;
//   }
//   func(num);
//   alert(localNum);
// }
// test(1);

// function test(num) {
//   function func(localNum) {
//     num = 2;
//   }
//   func(num);
//   alert(num);
// }
// test(1);

// function test(num) {
//   function func(num) {
//     alert(num);
//   }
//   func(num);
// }
// test(1);

// function test(num) {
//   function func(num) {
//     num = 2;
//   }
//   func(num);
//   alert(num);
// }
// test(1);

// function test(num) {
//   function func(num) {
//     alert(num);
//   }
//   num = 2;
//   func(num);
// }
// test(1);

// function test(num) {
//   function func(num) {
//     alert(num);
//   }
//   func(num);
//   num = 2;
// }
// test(1);

// ======================================================================141

// function func() {
//   return function func1() {
//     return 1;
//   };
// }
// console.log(func()());

// function func(num1) {
//   return function func1(num2) {
//     return function func2(num3) {
//       return function func3(num4) {
//         return function () {
//           let arr = [];
//           arr.push(num1, num2, num3, num4);
//           return arr;
//         };
//       };
//     };
//   };
// }
// console.log(func(2)(3)(4)(5)());

// ======================================================================142

// function test() {
//   let num1 = 1;
//   let num2 = 2;
//   return function () {
//     return num1 + num2;
//   };
// }
// let func = test();
// alert(func());

// function test() {
//   let num1 = 1;
//   let num2 = 2;
//   return function () {
//     return num1 + num2;
//   };
// }
// alert(test()());

// function test() {
//   let num1 = 1;
//   return function () {
//     return num1 + num2;
//   };
// }
// let num2 = 2;
// let func = test();
// alert(func());

// function test() {
//   num = 2;
//   return function () {
//     return num;
//   };
// }
// let num = 1;
// let func = test();
// alert(func());

// ======================================================================143

// function test() {
//   let num = 1;
//   return function () {
//     console.log(num);
//     num++;
//   };
// }
// let func = test();
// let func2 = test();
// func(); //выведет 1
// func(); //выведет 2
// func(); //выведет 3
// func(); //выведет 4
// func(); //выведет 5
// func2();

// function func() {
//   let num = 10;
//   return function func2() {
//     console.log(num);
//     if (num > 0) {
//       num--;
//     } else {
//       num = 'end';
//     }
//   };
// }
// let fun = func();
// fun();
// fun();
// fun();
// fun();
// fun();
// fun();
// fun();
// fun();
// fun();
// fun();
// fun();
// fun();
// fun();
// fun();
// fun();

// function func() {
//   let num = 0;
//   return function () {
//     alert(num);
//     num++;
//   };
// }
// func()(); //0
// func()(); //0
// func()(); //0

// function func() {
//   let num = 0;
//   return function () {
//     alert(num);
//     num++;
//   };
// }
// let test = func;
// test()();
// test()();
// test()();

// let counter = 0;
// function test() {
//   return function () {
//     console.log(counter);
//     counter++;
//   };
// }
// let func = test;
// let func1 = func();
// let func2 = func();
// func1();
// func2();
// func1();
// func2();

// function test() {
//   let counter = 0;
//   return function () {
//     return function () {
//       console.log(counter);
//       counter++;
//     };
//   };
// }
// let func = test()();
// let func1 = func;
// let func2 = func;
// func1();
// func2();
// func1();
// func2();

// function test() {
//   let counter = 0;
//   return function () {
//     return function () {
//       console.log(counter);
//       counter++;
//     };
//   };
// }
// let func = test();
// let func1 = func();
// let func2 = func();
// func1();
// func2();
// func1();
// func2();

// ======================================================================144

// !(function () {
//   alert('!');
// })(); // !

// (function funk() {
//   alert('!');
// })();

// let result = (function () {
//   return '!';
// })();
// alert(result);

// let result = function () {
//   return '!';
// };
// alert(result);

// let result = function () {
//   return '!';
// };
// alert(result());

// let result =
//   (function () {
//     return 1;
//   })() +
//   (function () {
//     return 2;
//   })();
// alert(result);

// let result = (function () {
//   return '!';
// })();
// alert(result);

// let result = (function () {
//   return '!';
// })();
// alert(result);

// let result = function () {
//   return '!';
// };
// alert(result);

// (function (num1, num2) {
//   alert(num1 + num2);
// })(1, 2);

// (function () {
//   return function () {
//     return function () {
//       console.log('!');
//     };
//   };
// })()()();

// (function (num1) {
//   return function (num2) {
//     return console.log(num1 + num2);
//   };
// })(1)(2);

// let str = 'str';
// (function () {
//   alert(1);
// })();

// let str = 'str'(function () {
//   alert(1);
// })();

// ======================================================================145

// let func = (function () {
//   let num = 1;
//   return function () {
//     if (num <= 5) {
//       console.log(num);
//       num++;
//     } else {
//       num = 0;
//       num++;
//     }
//   };
// })();
// func();
// func();
// func();
// func();
// func();
// func();
// func();
// func();
// func();
// func();
// func();
// func();

// ======================================================================146

// function each(arr, callback) {
//   let result = [];
//   for (let elem of arr) {
//     result.push(callback(elem));
//   }
//   return result;
// }
// let result = each([1, 2, 3], function (num) {
//   return num * 2;
// });
// console.log(result);

// function each(arr, callback) {
//   let result = [];
//   for (let elem of arr) {
//     let newArr = elem.split('').reverse().join('');
//     result.push(callback(newArr));
//   }
//   return result;
// }
// let result = each(['abcd', 'abcd', 'abcd'], function (str) {
//   return str;
// });
// console.log(result);

// function each(arr, callback) {
//   let result = [];
//   for (let elem of arr) {
//     let str = elem[0].toUpperCase() + elem.slice(1, 4);
//     result.push(callback(str));
//   }
//   return result;
// }
// let result = each(['abcd', 'abcd', 'abcd'], function (str) {
//   return str;
// });
// console.log(result);

// function each(arr, callback) {
//   let result = [];
//   for (let elem of arr) {
//     result.push(callback(elem));
//   }
//   return result;
// }
// let result = each([1, 2, 3], cube);
// console.log(result);
// function cube(num) {
//   return num ** 3;
// }

// ======================================================================147

// let result = every([1, 2, 3, 4, 5], (elem) => elem > 0);
// let result = every([1, 2, 3, 4, 5], (elem, index) => elem * index > 10);
// let arr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// let result = each(arr, (elem, index) => elem * index > 10);

// ======================================================================148

// function func(arr) {
//   console.log(arr.shift(), arr);
//   if (arr.length != 0) {
//     func(arr);
//   }
// }
// func([1, 2, 3, 4, 5]);

// function getSum(arr) {
//   let sum = arr.shift();
//   if (arr.length !== 0) {
//     sum += getSum(arr);
//   }
//   return sum;
// }
// console.log(getSum([1, 2, 3, 4, 5]));

// ======================================================================149

// function func(obj) {
//   for (let elem in obj) {
//     if (typeof obj[elem] == 'object') {
//       func(obj[elem]);
//     } else {
//       console.log(elem);
//     }
//   }
// }
// func({
//   a: 1,
//   b: { c: 2, d: 3, e: 4 },
//   f: { g: 5, j: 6, k: { l: 7, m: { n: 8, o: 9 } } },
// });

// function func(arr) {
//   let newArr = [];
//   function func2(arr) {
//     for (let i = 0; i < arr.length; i++) {
//       if (typeof arr[i] == 'object') {
//         func2(arr[i]);
//       } else {
//         newArr.push(arr[i]);
//       }
//     }
//     return newArr;
//   }
//   console.log(func2(arr));
// }
// func([1, [2, 7, 8], [3, 4, [5, [6, 7]]]]);

// function func(arr) {
//   let sum = 0;
//   for (let elem of arr) {
//     if (typeof elem == 'object') {
//       sum += func(elem);
//     } else {
//       sum += elem;
//     }
//   }
//   return sum;
// }
// console.log(func([1, [2, 7, 8], [3, 4, [5, [6, 7]]]]));

// function func(obj) {
//   let sum = 0;
//   for (let elem in obj) {
//     if (typeof obj[elem] == 'object') {
//       sum += func(obj[elem]);
//     } else {
//       sum += obj[elem];
//     }
//   }
//   return sum;
// }
// console.log(
//   func({
//     a: 1,
//     b: { c: 2, d: 3, e: 4 },
//     f: { g: 5, j: 6, k: { l: 7, m: { n: 8, o: 9 } } },
//   })
// );

// function func(arr) {
//   let str = '';
//   for (let elem of arr) {
//     if (typeof elem == 'object') {
//       str += func(elem);
//     } else {
//       str += elem;
//     }
//   }
//   return str;
// }
// console.log(func(['a', ['b', 'c', 'd'], ['e', 'f', ['g', ['j', 'k']]]]));

// function func(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] == 'object') {
//       arr[i] = func(arr[i]);
//     } else {
//       arr[i] = arr[i] * arr[i];
//     }
//   }
//   return arr;
// }
// console.log(func([1, [2, 7, 8], [3, 4, [5, 6]]]));

// ======================================================================150
