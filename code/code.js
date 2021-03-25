// alert("Я JavaScript!")
// let name = "Джон";
// let admin = "Джон";
// alert(admin);
// let ourPlanetName = "Земля"
// let currentUserName = "Пользователь"
// let name = prompt("Привет, как тебя зовут");
// alert(`Меня зовут ${name}`);
// let isBoss = confirm("Ты здесь главный?");
// alert(isBoss);
// let yourName = prompt("Как тебя зовут?");
// alert(`Меня зовут ${yourName}`);

// let a = 1, b = 1;
// let c = ++a; // 2
// let d = b++; // 1

// let a = 2;
// let x = 1 + (a *= 2); // a=4 x =5

// "" + 1 + 0 // 10 сложение со строкой преобразует в строку
// "" - 1 + 0 // -1 вычитание превращает строку в ноль
// true + false // 1
// 6 / "3" // 2
// "2" * "3" // 6
// 4 + 5 + "px" //9px
// "$" + 4 + 5 //$45
// "4" - 2 // 2
// "4px" - 2 //nan
// 7 / 0 //infinity
// "  -9  " + 5 //" -9 5"
// "  -9  " - 5 // -14
// null + 1 //1 null это ноль
// undefined + 1 //nan undefined становиться nan
// " \t \n" - 2  //-2

// let a = prompt("Первое число?", 1);
// let b = prompt("Второе число?", 2);

// alert(+a + +b); // 12

// 5 > 4 // true
// "ананас" > "яблоко" // false
// "2" > "12" // true
// undefined == null // true
// undefined === null //false
// null == "\n0\n" // false (null равен только undefined)
// null === +"\n0\n" // false (Строгое сравнение разных типов.)

// if ("0") {
//   alert('Привет');
// }

// let company = prompt("Какое 'официальное' название JavaScript?")
// if (company == "ECMAScript") {
//   alert("Правильно")
// } else {
//   alert("Не знаете? “ECMAScript”!")
// }

// let value = prompt("Введите число")
// if (value > 0) {
//   alert(1)
// } else if (value == 0) {
//   alert(0)
// } else if (value < 0) {
//   alert(-1)
// }

// let result = (a + b < 4) ? 'Мало' : 'Много';

// let message = (login == 'Сотрудник') ? 'Привет' :
//      (login == 'Директор') ? 'Здравствуйте' :
//      (login == '') ? 'Нет логина' : 
//      "";

// alert(null || 2 || undefined); //2
// alert(alert(1) || 2 || alert(3)); // 1 and 2
// alert(1 && null && 2); //null
// alert(alert(1) && alert(2)); // 1 and undefined
// alert(null || 2 && 3 || 4); //3 первое истинное значение

// let age = 50;
// if (age >= 14 && age <= 90) {
//   alert("Verno")
// }

// let age = 50;
// if (age < 14 || age > 90) {
//   alert("NeVerno")
// } else {
//   alert("Verno")
// }

// let age = 50;
// if (!(age >= 14 && age <= 90)) {
//   alert("Verno")
// }

// if (-1 || 0) alert('first'); // выполнится Результат -1 || 0 = -1, в логическом контексте true
// if (-1 && 0) alert('second'); //не выполнится -1 && 0 = 0,  в логическом контексте false
// if (null || -1 && 1) alert('third'); // выполниться вычисления: null || -1 && 1  ->  null || 1  ->  1

// let login = prompt("Введите логин");
// if (login == "Админ") {
//   let pass = prompt("Введите пароль")
//   if (pass == "Я Главный") {
//     alert("Здравствуйте!")
//   } else if (pass == "Отмена") {
//     alert("Отменено")
//   } else {
//     alert("я вас не знаю")
//   }
// } else if (login == "Отмена") {
//   alert("Отменено")
// } else {
//   alert("Я вас не знаю")
// }

// outer: for (let i = 0; i < 3; i++) {
//   for (let j = 0; j < 3; j++) {
//     let input = prompt(`Значение на координатах (${i},${j})`, '');
//     // если пустая строка или Отмена, то выйти из обоих циклов
//     if (!input) break outer; // (*)
//     // сделать что-нибудь со значениями...
//   }
// }
// alert('Готово!');

// let i = 3;
// while (i) {
//   alert(i--);
// } //вывод последний будет 1 на 0 остновиться

// let i = 0;
// while (++i < 5) alert(i);// 1,2,3,4 Для каждого значения сначала происходит увеличение, а потом – сравнение, так как ++ стоит перед переменной.
// let i = 0;
// while (i++ < 5) alert(i);//1,2,3,4,5 Для каждого значения сначала происходит сравнение, а потом – увеличение, и затем срабатывание alert.

// for (let i = 0; i < 5; i++) alert(i); // 0,1,2,3,4
// for (let i = 0; i < 5; ++i) alert(i); // 0,1,2,3,4 Увеличение i++ выполняется отдельно от проверки условия (2), значение i при этом не используется, поэтому нет никакой разницы между i++ и ++i.

// for (let i = 2; i <= 10; i++) { //i=2 .тк начинаем с 2
//   if (i % 2 == 0) { //Для проверки на чётность мы здесь используем оператор получения остатка от деления %
//     alert(i)
//   }
// }

// for (let i = 0; i < 3; i++) {
//   alert( `number ${i}!` );
// }

// let i = 0;
// while (i < 3) {
//   alert(i++)
// }

// let num;
// do {
//   num = prompt("Введите число больше 100");
// } while (num <= 100 && num)

// let value = 1; // обозначаем переменную и стартовое значение
// let int = prompt("Введите размер интервала"); // вводим размер интервала
// allNum:
// for (let n = 2; n <= int; n++) { // начинаем первый цикл по отбору всех цифр в интервале
//   for (let i = 2; i < n; i++) { // начинаем цикл по проверки простое ли число
//     if (n % i == 0) continue allNum; // если число не простое (делится на другое без остатка), то пропускаем
//   }
//   value += `, ${n}` // число простое, дописываем его в строку через запятую
// }
// alert(`протсые числа: ${value}`) // выводим строку с результатом

// let a = 2 + 2;
// switch (a) {
//   case 4:
//     alert('Правильно!');
//     break;
//   case 3: // (*) группируем оба case
//   case 5:
//     alert('Неправильно!');
//     alert("Может вам посетить урок математики?");
//     break;

//   default:
//     alert('Результат выглядит странновато. Честно.');
// }

// let browser = prompt("Введите название браузера?")
// if (browser == 'Edge') {
//   alert("You've got the Edge!");
// } else if (browser == 'Chrome' 
// || browser == 'Firefox' 
// || browser == 'Safari' 
// || browser == 'Opera') {
//   alert('Okay we support these browsers too');
// } else { alert('We hope that this page looks ok!'); }

// const number = +prompt('Введите число между 0 и 3');
// switch (number) {
//   case 0:
//     alert('Вы ввели число 0');
//     break;
//   case 1:
//     alert('Вы ввели число 1');
//     break;
//   case 2:
//     alert('Вы ввели число 2');
//     break;
// }

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   }
//   // ...
//   return confirm('Родители разрешили?');
// }

// function checkAge(age) {
//   return (age > 18) ? true : confirm('Родители разрешили?')
// }

// function checkAge(age) {
//   return (age > 18) || confirm('Родители разрешили?')
// }

// function min(a, b) {
//   if (a < b) {
//     return (a)
//   } else (b < a) {
//     return (b)
//   }
// }

// function pow(x, n) {
//   let result = x;
//   for (let i = 1; i < n; i++) {
//     result *= x;
//   }
//   return result;
// }
// let x = prompt("x?", '');
// let n = prompt("n?", '');
// if (n < 1) {
//   alert(`Степень ${n} не поддерживается, используйте натуральное число`);
// } else {
//   alert(pow(x, n));
// }


// function ask(question, yes, no) {
//   if (confirm(question)) yes()
//   else no();
// }
// ask(
//   "Вы согласны?",
//   function () { alert("Вы согласились."); },
//   function () { alert("Вы отменили выполнение."); }
// );

// let ask = (question, yes, no) => {
//   if (confirm(question)) yes()
//   else no();
// }
// ask(
//   "Вы согласны?",
//   () => { alert("Вы согласились."); },
//   () => { alert("Вы отменили выполнение."); }
// );

// function pow(x, n) {
//   let result = 1;

//   for (let i = 0; i < n; i++) {
//     result *= x;
//   }

//   return result;
// }

// let x = prompt("x?", '');
// let n = prompt("n?", '');

// if (n <= 0) {
//   alert(`Степень ${n} не поддерживается, 
//   введите целую степень, большую 0`);
// } else {
//   alert(pow(x, n));
// }


// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// };

// let sum = 0;
// for (let key in salaries) {
//   sum += salaries[key];
// }
// console.log(sum)




/* ======================================================================================== */
// let str = 'abcde'
// console.log(str[0])
// console.log(str[1])
// console.log(str[4])
/* ======================================================================================== */
// var num = 1;
// num += 12;
// num -= 14;
// num *= 5;
// num /= 7;
// num++;
// num--;
// console.log(num);
/* ======================================================================================== */
// let num = 3;
// alert(num)
/* ======================================================================================== */
// let a = 10 
// let b = 2
// console.log(a + b)
// console.log(a - b)
// console.log(a * b)
// console.log(a / b)
/* ======================================================================================== */
// let c = 15;
// let d = 2;
// result = c + d;
// console.log(result)
/* ======================================================================================== */
// let a = 10;
// let b = 2;
// let c = 5;
// console.log(a + b + c)
/* ======================================================================================== */
// let a = 17;
// let b = 10;
// let c = a - b;
// let d = 7;
// let result = c + d;
// console.log(result)
/* ======================================================================================== */
// let str = "Привет!"
// let name = "Привет!"
// console.log(str + str2)
/* ======================================================================================== */
// let iname = "John"
// let age = 16
// console.log('Hello ' + iname);
// console.log('i am ' + age + ' years old');
/* ======================================================================================== */
// let question = prompt("Enter your name")
// alert("Your name is " + question)
// let question = prompt("Enter number")
// alert("square of the number " + (question*2))
/* ======================================================================================== */
// let str = 'abcde'
// console.log(str[0])
// console.log(str[2])
// console.log(str[4])
// let num = '12345'
// console.log(num[0] * num[1] * num[2] * num[3] * num[4])
/* ======================================================================================== */
// console.log(120 * 60)
// console.log(7200 * 7)
// console.log(50400 * 30)

/* =======================================arr============================================= */
// var arr = ['Hello',' ','world']
// var str = arr[0] + arr[1] + arr[2]
// console.log(str)

// var arr = ['Hello',' ','world']
// arr[0] = 'Buy'
// var str = arr[0] + arr[1] + arr[2]
// console.log(str)

// var obj = {
//   'Коля':'1000', 
//   'Вася':'500', 
//   'Петя':'200'
// };
// console.log(obj['Коля'])

// var arr = [1, 2, 3, 4, 5];

// var arr = [];
// arr[0] = 1;
// arr[1] = 2;
// arr[2] = 3;
// arr[3] = 4;

// var arr = {
// 	'ru':['голубой', 'красный', 'зеленый'],
// 	'en':['blue', 'red', 'green'],
// };
// console.log(arr['ru'][0])

// var arr = ['a', 'b', 'c']
// console.log(arr[0] + '+' + arr[1])

// var arr = [2, 5, 3, 9]
// var umn = arr[0] * arr[1]
// var umn2 = arr[2] * arr[3]
// result = umn + umn2
// console.log(result)

// var obj = {
//   a: 1, 
//   b: 2, 
//   c: 3
// };
// console.log(obj['c'])
// console.log(obj.c)

// var obj = {
//   Коля: '1000', 
//   Вася: '500', 
//   Петя: '200'
// }
// console.log(obj['Коля'], obj['Петя'])

// var week = {
//   mo: 1,
//   tu: 2,
//   w: 3,
//   t: 4,
//   f: 5,
//   s: 6,
//   su: 7
// }
// var day = week.tu
// console.log(day)

// var arr = [ [1, 2, 3], [4, 5, 6], [7,8,9] ]
// console.log(arr[1][0])

// var obj = {
//   js:['jQuery', 'Angular'], 
//   php: 'hello', 
//   css: 'world'
// }
// console.log(obj.js[0])

// var arr = {
//   'ru': ['пон', 'вт', 'ср', 'чет', 'пят', 'суб', 'воск'],
//   'en': ['mon', 'tu', 'we', 't', 'f', 's', 'su']
// }
// var lang = arr['ru']
// var day = arr['ru'][2]
// // console.log(arr['ru'][0])
// // console.log(arr['en'][2])
// console.log(lang)

/* =======================================if-else============================================= */
// var a = -3;
// if (a == 0) {
//   console.log('True')
// } else {
//   console.log('False')
// }

// var a = 1;
// if (a === '1') {
//     console.log('True')
//   } else {
//     console.log('False')
//   }

// var test = true;
// if (test !== true) {
//       console.log('True')
//     } else {
//       console.log('False')
//     }

// var a = 5
// if (a == 0 || a == 7) {
//   console.log(a + 7)
// } else {
//   console.log(a / 10)
// }

// var a = -2
// var b = 4
// if (a <= 1 || b >= 3) {
//   console.log(a + b)
// } else {
//   console.log(a - b)
// }

// var day = 23;
// if (day <= 10) {
//   console.log("decada 1")
// } else if (day >= 10, day <= 20) {
//   console.log("decada 2")
// } else if (day >=20, day <= 30) {
//   console.log("decada 3")
// };

// var month = 9;
// if (month <= 3 && month >= 1) {
//   console.log("winter")
// } else if (month <= 6 && month >= 4) {
//   console.log("spring")
// } else if (month <= 9 && month >= 7) {
//   console.log("summer")
// } else if (month <= 12 && month >= 10) {
//   console.log("autunm")
// };

// var str = 'abcde'
// if (str[0] == 'a') {
//   console.log('true')
// } else { 
//   console.log('false')
// }

// var str = '12345'
// if (str[0] == '1') {
//   console.log('true')
// } else { 
//   console.log('false')
// }

// var str = '123';
// console.log(Number(str[0]) + Number(str[1]) + Number(str[2]))

// var str = '123456'
// sum1 = Number(str[0]) + Number(str[1]) + Number(str[2])
// sum2 = Number(str[3]) + Number(str[4]) + Number(str[5])
// if (sum1 == sum2) {
//   console.log('true')
// } else {
//   console.log('false')
// }

/* =======================================for/hile============================================= */
// var arr = [1, 2, 3, 4, 5];
// for (var i = 0; i < arr.length; i++) {
// 	console.log(arr[i]); //выведет 1, 2, 3, 4, 5
// }

// var i = 1;
// while (i <= 50) {
// 	document.write(i + '<br>');
// 	i++;
// }
// for (var i = 1; i <= 50; i++) {
// 	document.write(i + '<br>');
// }

// var a = 1;
// while (a <= 100) {
//   document.write(a + '<br>');
//   a++;
// }

// for (var a = 1; a <= 100; a++) {
//   console.log(a)
// }

// var a = 11;
// while (a <= 33) {
//   document.write(a + '<br>')
//   a++
// }
// for (var a = 11; a <= 33; a++)
//   console.log(a)

// for (var i = 0; i <= 100; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }

// var result = 0
// for (var i = 1; i <= 100; i++) {
//   result += i;
// }
// console.log(result)

// var sum = 0;
// var arr = [1, 2, 3, 4, 5];
// for (i = 0; i < arr.length; i++) {
//   sum += arr[i]
//   console.log(sum)
// }

// var obj = {
//   green: 'зеленый',
//   red: 'красный',
//   blue: 'голубой'
// }
// for (var key in obj) {
//   console.log(key)
// }

// var obj = {
//   Коля: '200',
//   Вася: '300',
//   Петя: '400',
// }
// for (key in obj) {
//   console.log(key + ' - зарплата ' + obj[key] + ' долларов')
// }

// var arr = [2, 5, 9, 15, 0, 4];
// for (i = 0; i < arr.length; i++) {
//   if (arr[i] > 3 && arr[i] < 10) {
//     console.log(arr[i])
//   }
// }

// var arr = [2, -5, 9, -15, 0, 4];
// var sum = 0;
// for (i = 0; i < arr.length; i++) {
//   if (arr[i] > 0) {
//     sum = sum + arr[i]
//     console.log(sum)
//   }
// }

// var arr = [1, 2, 5, 9, 4, 13, 4, 10]
// for (i = 0; i < arr.length; i++) {
//   if (arr[i] === 3) {
//     console.log('true')
//   } else {
//     console.log('false')
//   }
// }

// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// var str = '';
// for (i = 1; i <= arr.length; i++) {
//   str = str + '-' + i
// }
// str = str + '-'
// console.log(str)