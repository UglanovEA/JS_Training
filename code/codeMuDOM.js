// let button = document.querySelector('#button');
// console.log(button);

// let p1 = document.querySelector('.elem1');
// let p2 = document.querySelector('.elem2');
// let p3 = document.querySelector('.elem3');
// console.log(p1);
// console.log(p2);
// console.log(p3);

// let elem = document.querySelector('#parent input');
// console.log(elem);

// let text = document.querySelector('#block p');
// console.log(text);

// let text = document.querySelector('.block p');
// console.log(text);

// let button1 = document.querySelector('#button1');

// button1.addEventListener('mouseout', function () {
//   alert('hey');
// });

// let button1 = document.querySelector('#button1');
// let button2 = document.querySelector('#button2');

// button1.addEventListener('click', func1);
// button2.addEventListener('click', func2);
// function func1() {
//   alert(1);
// }

// function func2() {
//   alert(2);
// }

// let text1 = document.querySelector('#elem1');
// let text2 = document.querySelector('#elem2');
// let text3 = document.querySelector('#elem3');
// let text4 = document.querySelector('#elem4');
// let text5 = document.querySelector('#elem5');

// text1.addEventListener('mouseover', func);
// text2.addEventListener('mouseover', func);
// text3.addEventListener('mouseover', func);
// text4.addEventListener('mouseover', func);
// text5.addEventListener('mouseover', func);
// function func() {
//   alert('message');
// }

// let button = document.querySelector('#button');

// button.addEventListener('click', func1);
// button.addEventListener('click', func2);

// function func1() {
//   alert('1');
// }

// function func2() {
//   alert('2');
// }

// let text1 = document.querySelector('#elem1');
// text1.addEventListener('click', func1);
// text1.addEventListener('click', func2);
// text1.addEventListener('click', func3);

// function func1() {
//   alert('1');
// }

// function func2() {
//   alert('2');
// }

// function func3() {
//   alert('3');
// }

// let text1 = document.querySelector('#elem1');

// text1.addEventListener('click', function () {
//   alert('1');
// });
// text1.addEventListener('click', function () {
//   alert('2');
// });
// text1.addEventListener('click', function () {
//   alert('3');
// });

// let button = document.querySelector('#button');
// let elem1 = document.querySelector('#elem1');
// let elem2 = document.querySelector('#elem2');
// button.addEventListener('click', function () {
//   alert(Number(elem1.innerHTML) + Number(elem2.innerHTML));
// });

// let button1 = document.querySelector('#button1');
// let button2 = document.querySelector('#button2');
// let elem1 = document.querySelector('#elem1');
// let elem2 = document.querySelector('#elem2');
// button1.addEventListener('click', function () {
//   elem1.innerHTML = 'привет';
//   alert(elem1.innerHTML);
// });
// button2.addEventListener('click', function () {
//   elem2.innerHTML = 'пока';
//   alert(elem2.innerHTML);
// });

// let button1 = document.querySelector('#button1');
// let elem1 = document.querySelector('#elem1');
// button1.addEventListener('click', function () {
//   elem1.innerHTML = '<b>жирный текст</b>';
// });

// let button1 = document.querySelector('#button1');
// let elem1 = document.querySelector('#elem1');
// button1.addEventListener('click', function () {
//   let item = elem1.innerHTML;
//   elem1.innerHTML = `<b>${item}</b>`;
// });

// ======================================================================159

// let button1 = document.querySelector('#button');
// let elem1 = document.querySelector('#elem');
// button1.addEventListener('click', function () {
//   console.log(elem1.type);
// });

// let button1 = document.querySelector('#button');
// let elem1 = document.querySelector('#elem');
// button1.addEventListener('click', function () {
//   elem1.type = 'submit';
// });

// let link = document.querySelector('.link');
// let text = document.querySelector('.text');
// let btn = document.querySelector('.btn');
// btn.addEventListener('click', function () {
//   text.innerHTML = link.getAttribute('href');
// });

// let link = document.querySelector('.link');
// let text = document.querySelector('.text');
// let btn = document.querySelector('.btn');
// btn.addEventListener('click', function () {
//   link.innerHTML = link.innerHTML + `(${link.getAttribute('href')})`;
// });

// let text = document.querySelector('.text');
// let btn = document.querySelector('.btn');
// let img = document.querySelector('.img');
// btn.addEventListener('click', function () {
//   text.innerHTML = img.getAttribute('src');
// });

// let btn = document.querySelector('.btn');
// let img = document.querySelector('.img');
// btn.addEventListener('click', function () {
//   img.style.width = 300 + 'px';
// });

// let btn = document.querySelector('.btn');
// let img = document.querySelector('.img');
// btn.addEventListener('click', function () {
//   img.width = img.width * 2;
// });

// let btn1 = document.querySelector('.btn1');
// let btn2 = document.querySelector('.btn2');
// let img1 = document.querySelector('.img1');
// let img2 = document.querySelector('.img2');
// btn1.addEventListener('click', function () {
//   img1.src = img2.src;
// });
// btn2.addEventListener('click', function () {
//   img2.src = img1.src;
// });

// ======================================================================160

// let elem = document.querySelector('#elem');
// let btn = document.querySelector('.btn');
// btn.addEventListener('click', function () {
//   alert(elem.value);
// });

// let elem = document.querySelector('#elem');
// let btn = document.querySelector('.btn');
// btn.addEventListener('click', function () {
//   elem.value = 'я новый текст';
// });

// let elem = document.querySelector('#elem');
// let btn = document.querySelector('.btn');
// let text = document.querySelector('.text');
// btn.addEventListener('click', function () {
//   text.innerHTML = elem.value;
// });

// let elem = document.querySelector('#elem');
// let btn = document.querySelector('.btn');
// let elem2 = document.querySelector('#elem2');
// btn.addEventListener('click', function () {
//   elem2.value = elem.value * 2;
// });

// let elem = document.querySelector('#elem');
// let btn = document.querySelector('.btn');
// let elem2 = document.querySelector('#elem2');
// btn.addEventListener('click', function () {
//   elem2.value = elem.value;
//   elem.value = elem2.value;
// });

// let elem = document.querySelector('#elem');
// let btn = document.querySelector('.btn');
// let elem2 = document.querySelector('#elem2');
// let text = document.querySelector('.text');
// btn.addEventListener('click', function () {
//   text.innerHTML = (Number(elem.value) + Number(elem2.value)) / 2;
// });

// ======================================================================161

// let elem = document.querySelector('#elem');
// elem.addEventListener('focus', function () {
//   console.log(elem.value);
// });

// let elem = document.querySelector('#elem');
// elem.addEventListener('focus', function () {
//   elem.value = 1;
// });
// elem.addEventListener('blur', function () {
//   elem.value = 2;
// });

// let elem = document.querySelector('#elem');
// elem.addEventListener('blur', function () {
//   elem.value = elem.value * 2;
// });

// let elem = document.querySelector('#elem');
// elem.addEventListener('focus', function () {
//   elem.value = '';
// });

// ======================================================================162

// let btn = document.querySelector('.btn');
// let elem = document.querySelector('#elem');
// btn.addEventListener('click', function () {
//   alert(elem.className);
// });

// let btn = document.querySelector('.btn');
// let elem = document.querySelector('#elem');
// btn.addEventListener('click', function () {
//   elem.className = 'text';
// });

// let btn = document.querySelector('.btn');
// let elem = document.querySelector('#elem');
// btn.addEventListener('click', function () {
//   let elems = elem.className;
//   let arr = elems.split(' ');
//   console.log(arr);
// });

// ======================================================================163

// console.log(document.querySelector('#image').src);

// console.log(document.querySelector('#image').src);
// console.log(document.querySelector('#image').width);
// console.log(document.querySelector('#image').height);

// let img = document.querySelector('#image');
// console.log(img.src);
// console.log(img.width);
// console.log(img.height);

// ======================================================================164

// let elem = document.querySelector('#elem');
// elem.addEventListener('blur', func);
// function func() {
//   this.value = '!!!';
// }

// let elem = document.querySelector('#elem');
// elem.addEventListener('focus', function () {
//   this.value = 1;
// });
// elem.addEventListener('blur', function () {
//   this.value = 2;
// });

// let btn = document.querySelector('.btn');
// btn.addEventListener('click', function () {
//   this.innerHTML = ++this.innerHTML;
// });

// let text1 = document.querySelector('.text1');
// let text2 = document.querySelector('.text2');
// let text3 = document.querySelector('.text3');
// text1.addEventListener('click', func);
// text2.addEventListener('click', func);
// text3.addEventListener('click', func);
// function func() {
//   this.innerHTML = this.innerHTML + '!';
// }

// let inp1 = document.querySelector('.inp1');
// let inp2 = document.querySelector('.inp2');
// let inp3 = document.querySelector('.inp3');
// inp1.addEventListener('blur', func);
// inp2.addEventListener('blur', func);
// inp3.addEventListener('blur', func);
// function func() {
//   this.value *= 2;
// }

// ======================================================================165

// let elems = document.querySelectorAll('.www');
// let btn = document.querySelector('.btn');
// btn.addEventListener('click', func);
// function func() {
//   for (let elem of elems) {
//     elem.innerHTML = 'text';
//   }
// }

// let elems = document.querySelectorAll('.www');
// let btn = document.querySelector('.btn');
// btn.addEventListener('click', func);
// function func() {
//   for (let i = 0; i < elems.length; i++) {
//     elems[i].innerHTML += i;
//   }
// }

// let elems = document.querySelectorAll('.www');
// let btn = document.querySelector('.btn');
// let text = document.querySelector('.text');
// btn.addEventListener('click', func);
// function func() {
//   let sum = 0;
//   for (elem of elems) {
//     sum += Number(elem.innerHTML);
//   }
//   text.innerHTML = sum;
// }

// ======================================================================166

// let elems = document.querySelectorAll('p');
// for (let elem of elems) {
//   elem.addEventListener('click', func);
// }
// function func() {
//   alert(this.innerHTML);
// }

// let elems = document.querySelectorAll('.in');
// function func() {
//   this.value = Number(this.value) + 1;
// }
// for (let elem of elems) {
//   elem.addEventListener('blur', func);
// }

// let elems = document.querySelectorAll('p');
// for (let elem of elems) {
//   elem.addEventListener('click', func);
// }
// function func() {
//   this.innerHTML = Number(this.innerHTML) ** 2;
// }

// let elems = document.querySelectorAll('p');
// for (let elem of elems) {
//   elem.addEventListener('click', function () {
//     alert(this.innerHTML);
//   });
// }

// let divs = document.querySelectorAll('div');
// for (let div of divs) {
//   div.addEventListener('click', function () {
//     this.innerHTML++;
//   });
// }

// ======================================================================167

// let button = document.querySelector('.btn');
// button.addEventListener('click', func);
// function func() {
//   alert('!!!');
//   this.removeEventListener('click', func);
// }

// let link = document.querySelector('.link');
// link.addEventListener('click', func);
// link.preventDefault();
// function func() {
//   this.innerHTML = this.innerHTML + `(${link.href})`;
//   this.removeEventListener('click', func);
// }

// let btn = document.querySelector('.btn');
// btn.addEventListener('click', func);
// function func() {
//   this.innerHTML = Number(this.innerHTML) + 1;
//   if (this.innerHTML >= 10) {
//     this.removeEventListener('click', func);
//   }
// }

// ======================================================================168

// let elems = document.querySelectorAll('p');
// for (let elem of elems) {
//   elem.addEventListener('click', func);
// }
// function func() {
//   alert(this.innerHTML);
//   this.removeEventListener('click', func); // отвязываем обработчик
// }

// let elems = document.querySelectorAll('p');
// for (let elem of elems) {
//   elem.addEventListener('click', func);
// }
// function func() {
//   this.innerHTML = this.innerHTML + '!';
//   this.removeEventListener('click', func); // отвязываем обработчик
// }

// ======================================================================169