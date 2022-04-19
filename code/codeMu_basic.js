'use strict';
// ======================================================================9

// let a = 5 + 5 * 3;
// alert(a);

// let a = 5 + 5 * 3 + 3;
// alert(a);

// let a = 8 / 2 + 2;
// alert(a);

// let a = 8 + 2 / 2;
// alert(a);

// let a = (8 / 2) * 2;
// alert(a);

// let a = (8 * 4) / 2 / 2;
// alert(a);

// let a = (2 + 3) * (2 + 3);
// alert(a);

// ======================================================================10

// let a = 1.5;
// let b = 0.75;
// console.log(a + b);

// ======================================================================11

// let a = -100;
// console.log(a);

// ======================================================================12

// let a = 13;
// let b = 5;
// console.log(a % b);

// ======================================================================13

// let a = 2;
// console.log(a ** 10);

// let a = 3 * 2 ** 3;
// alert(a);

// let a = 3 * 2 ** (3 + 1);
// alert(a);

// let a = 2 ** 3 * 3;
// alert(a);

// let a = 3 * 2 ** 3 * 3;
// alert(a);

// ======================================================================14

// let str = 'uglanov';
// console.log(str);

// ======================================================================15

// let str = '!!!';
// console.log(str);

// let str2 = 'java';
// let str3 = 'script';
// console.log(str2 + str3);

// let str4 = 'hello';
// let str5 = 'world';
// console.log(str4 + ' ' + str5);

// ======================================================================16

// let str = 'hello';
// console.log(str.length);

// ======================================================================17

// let str1 = 'xxx';
// let str2 = 'yyy';
// let txt = `aaa ${str1} bbb ${str2} ccc`;
// console.log(txt);

// let str = `a,
// b,
// c`;
// console.log(str);

// ======================================================================18

// let a;
// console.log(a); //undefined

// let a = null;
// console.log(a); //null

// let a = true;
// console.log(a);

// let a = false;
// console.log(a);

// let str = 'abc';
// let str2 = 'abc';
// console.log(str * str2); //NAN

// let a = 10;
// console.log(a / 0);//Infinity

// let a = -10;
// console.log(a / 0);

// ======================================================================21

// let a = '5' + '2';
// alert(a);

// let a = '5' + 2;
// alert(a);

// let a = 5 + '2';
// alert(a);

// let a = 5 + 2;
// alert(a);

// let a = '5' * '2';
// alert(a);

// let a = '5' / '2';
// alert(a);

// let a = '5' % '2';
// alert(a);

// let a = '5s' * '2';
// alert(a);

// let a = '5s' + '2';
// alert(a);

// let a = -'5' + -'2';
// alert(a);

// let a = '5' * 1 + '2' * 1;
// alert(a);

// let a = '5' * '1' + '2' * '1';
// alert(a);

// let a = '' + 3 + 1;
// alert(a);

// ======================================================================22

// let a = '10';
// let b = '20';
// console.log(Number(a) + Number(b));

// alert(2 + Number('3'));

// ======================================================================23

// let a = '5px';
// let b = '6px';
// console.log(parseFloat(a) + parseFloat(b));//11

// let a = '5.5px';
// let b = '6.5px';
// console.log(parseFloat(a) + parseFloat(b));//12

// let a = '5.5px';
// let b = '6.5px';
// console.log(parseFloat(a) + parseFloat(b) + 'px'); //12

// ======================================================================24

// let a = 1;
// let b = 2;
// console.log(String(a) + String(b));

// let a = 123;
// console.log(String(a).length);

// let a = 123;
// let b = 123;
// console.log(String(a).length + String(b).length);

// ======================================================================25

// alert(true + 3);

// alert(true - true);

// alert(true + false);

// alert('1' + true);

// alert(String(true) + 1);

// alert(String(true) + Number(true));

// ======================================================================26

// let test = Boolean(3);
// alert(test);

// let test = Boolean(0);
// alert(test);

// let test = Boolean(-1);
// alert(test);

// let test = Boolean(+0);
// alert(test);

// let test = Boolean('abc');
// alert(test);

// let test = Boolean(true);
// alert(test);

// let test = Boolean(false);
// alert(test);

// let test = Boolean(3 * 'abc');
// alert(test);

// ======================================================================27

// let str = 'abcde';
// console.log(str[0]);
// console.log(str[2]);
// console.log(str[4]);

// let str = 'abcde';
// let str2 = str[4] + str[3] + str[2] + str[1] + str[0];
// console.log(str2);

// let str = 'abcde';
// let num = 3;
// console.log(str[num]);

// let str = 'abcde';
// str[0] = '!';
// console.log(str);

// ======================================================================28

// let str = 'abcde';
// console.log(str[str.length - 1]);

// let str = 'abcde';
// console.log(str[str.length - 2]);

// let str = 'abcde';
// console.log(str[str.length - 3]);

// ======================================================================29

// let str = '123';
// console.log(Number(str[0]) + Number(str[1]) + Number(str[2]));

// let num = 123;
// let str = String(num);
// console.log(Number(str[0]) + Number(str[1]) + Number(str[2]));

// let num = 123;
// let str = String(num);
// console.log(str[0] * str[1] * str[2]);

// let num = 123;
// let str = String(num);
// console.log(str[2] + str[1] + str[0]);

// ======================================================================30

// let num = 1;
// num = num + 1;
// num = num + 1;
// alert(num);

// let num = 1;
// num = num + 2;
// num = num + 3;
// alert(num);

// let num = 47;
// num += 7;
// num -= 18;
// num *= 10;
// num /= 15;
// alert(num);

// ======================================================================31

// let num = 3;
// alert(++num);

// let num = 3;
// alert(num++);

// let num = 3;
// alert(--num);

// let num = 3;
// alert(num--);

// let num1 = 3;
// let num2 = ++num1;
// alert(num1);
// alert(num2);

// let num1 = 3;
// let num2 = num1++;
// alert(num1);
// alert(num2);

// let num1 = 3;
// let num2 = --num1;
// alert(num1);
// alert(num2);

// let num1 = 3;
// let num2 = num1--;
// alert(num1);
// alert(num2);

// let num1 = 3;
// num1++;
// let num2 = num1--;
// alert(num1++);
// alert(--num2);

// ======================================================================32

// let a = 0.1 + 0.2;
// console.log(+a.toFixed(2));

// alert(0.1 * 0.2);

// alert(0.3 - 0.1);

// ======================================================================34

// document.write(123);
// document.write('text');
// document.write('<b>text</b>');
// let str = 'text';
// document.write(str);
// let str = 'text';
// document.write('<b>' + str + '</b>');
// document.write('text <br> text');

// document.write('text1<br>');
// document.write('text2<br>');
// document.write('text3<br>');

// document.write('text');
// document.write('<br>');
// document.write('text');

// document.write('<i>text</i>');

// let str = 'text';
// document.write('<i>' + str + '</i>');

// ======================================================================35

// let num1 = 1;
// let num2 = 2;
// console.log('сумма: ' + (num1 + num2));

// let a = 1;
// let b = 2;
// let c = 3;
// console.log(a + b + c);

// let num = '123';
// let sum = Number(num[0]) + Number(num[1]) + Number(num[2]);
// console.log(sum);

// let num = 123;
// let str = String(num);
// console.log(str[0]);

// let a = 0;
// console.log(++a);

// let num = 123;
// console.log(String(num).length);

// let a = 24 * 60 * 60;
// console.log(a);

// let num = 123;
// let str = String(num);
// console.log(str.length);

// let num = 123;
// let str = String(num);
// console.log(str[str.length - 1]);

// let num = 123;
// let str = String(num);
// console.log(str.length);

// let num = 123;
// let str = String(num);
// console.log(str[str.length - 1]);

// let a = '123';
// let b = '456';
// let s = Number(a) + Number(b);
// console.log(s);

// let aaa = 1;
// let bbb = 2;
// let ccc = 3;
// console.log(aaa + bbb + ccc);

// ======================================================================36

// let a = 24 * 60 * 60;
// console.log(a);

// let a = 30 * 24 * 60 * 60;
// console.log(a);

// let a = 30 * 24 * 60 * 60;
// console.log(a);

// let a = 365 * 24 * 60 * 60;
// console.log(a);

// ======================================================================37
