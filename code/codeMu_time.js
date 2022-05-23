'use strict';
// ======================================================================164

// let date = new Date();
// console.log(date.getFullYear()); // год
// console.log(date.getMonth()); // месяц
// console.log(date.getDate()); // день

// console.log(date.getHours()); // часы
// console.log(date.getMinutes()); // минуты
// console.log(date.getSeconds()); // секунды

// ======================================================================165

// let date = new Date();
// let day = date.getDay();
// let month = date.getMonth();
// let year = date.getFullYear();
// let hours = date.getHours();
// let minutes = date.getMinutes();
// let seconds = date.getSeconds();
// function addZero(num) {
//   return num > 0 && num < 9 ? '0' + num : num;
// }

// console.log(
//   addZero(hours) +
//     ':' +
//     addZero(minutes) +
//     ':' +
//     addZero(seconds) +
//     ' ' +
//     addZero(day) +
//     '.' +
//     addZero(month) +
//     '.' +
//     year
// );

// let str = '2025-12-31';
// let newStr = str.split('-').reverse().join('.');
// console.log(newStr);

// ======================================================================167

// let date = new Date();
// let day = date.getDay();
// let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
// console.log(days[day]);

// let date = new Date();
// let month = date.getMonth();
// let months = ['янв','фев','мар','апр','май','июн','июл', 'авг', 'сен', 'окт', 'ноя', 'дек', ];
// console.log(months[month]);

// ======================================================================168

// let date = new Date(1988, 10, 15);
// let day = date.getDay();
// let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];

// console.log(days[day]);

// ======================================================================169

// let date = new Date();
// console.log(date.getTime());

// let date = new Date(2015, 11, 4, 23, 59, 59);
// console.log(date.getTime());

// let date = new Date(2025, 1, 1);
// console.log(date.getTime());

// let date = new Date(1988, 3, 1);
// let date2 = new Date(2000, 1, 10);
// let diff = date2.getTime() - date.getTime();
// console.log(diff / (1000 * 60 * 60 * 24 * 30));

// let date = new Date(1988, 10, 15);
// let date2 = new Date();
// let diff = date2.getTime() - date.getTime();
// console.log(diff / (1000 * 60 * 60 * 24 * 30));

// ======================================================================170

// let now = new Date();
// let date = new Date(2015, 4, 25, 12, 59, 59);
// let diff = now - date;
// console.log(diff);

// let now = new Date(2010, 2, 15);
// let date = new Date(2000, 9, 1);
// let diff = now - date;
// console.log(diff);

// let now = new Date(2010, 2, 15);
// let date = new Date(2000, 9, 1);
// let diff = now - date;
// console.log(diff / (1000 * 60 * 60 * 24));
// console.log(diff / (1000 * 60 * 60 * 24 * 30));
// console.log(diff / (1000 * 60 * 60 * 24 * 30 * 12));

// ======================================================================171

// let date = new Date(2018, 1, 25);
// console.log(date);

// let date = new Date(2018, 5, 0);
// console.log(date); // какая дата будет?

// ======================================================================172

// function getDay(month, year) {
//   let date = new Date(year, month, 0);
//   return date.getDate();
// }
// console.log(getDay(5, 2025));

// ======================================================================173

// let year = 2025;
// let month = 0;
// let day = 31;
// let date = new Date(year, month, day);
// if (
//   date.getFullYear() == year &&
//   date.getMonth() == month &&
//   date.getDate() == day
// ) {
//   console.log('корректна');
// } else {
//   console.log('некорректна');
// }

// function checkDate(year, month, day) {
//   let date = new Date(year, month, day);
//   if (
//     date.getFullYear() == year &&
//     date.getMonth() == month &&
//     date.getDate() == day
//   ) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(checkDate(2025, 0, 31));
// console.log(checkDate(2025, 0, 32));

// ======================================================================174

// let now = new Date();
// let date = new Date(now.getFullYear(), 12, 0);
// console.log(date);

// let now = new Date();
// let date = new Date(now.getFullYear(), now.getMonth(), 1);
// console.log(date);

// ======================================================================175

// let date = new Date(2022, 4, 23, 9);
// let newDate = new Date();
// let lastDate = new Date(2022, 4, 23, 18);
// let newYear = new Date(2022, 12, 0);
// let diff = newYear - newDate;
// console.log(diff / (1000 * 60 * 60 * 24));

// ======================================================================176

// let date1 = '2012-11-31';
// let date2 = '2020-12-01';
// function func(date1, date2) {
//   return date1 > date2 ? console.log('больше') : console.log('меньше');
// }
// func(date1, date2);

// ======================================================================177

// let date = new Date();
// let date2 = new Date(
//   date.getFullYear(),
//   date.getMonth(),
//   date.getDate(),
//   date.getHours()
// );
// if (date2.getHours() > 12) {
//   console.log('полдень уже был');
// } else {
//   console.log('полденя не было');
// }

// ======================================================================178
