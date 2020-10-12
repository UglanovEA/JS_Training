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
//   function() { alert("Вы согласились."); },
//   function() { alert("Вы отменили выполнение."); }
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