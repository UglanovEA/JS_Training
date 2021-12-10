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

// let elems = document.querySelectorAll('p');
// for (let elem of elems) {
//   elem.addEventListener('click', function func() {
//     alert(this.innerHTML);
//     this.removeEventListener('click', func);
//   });
// }

// ======================================================================170

// let elem = document.querySelector('#elem');
// let value = elem.getAttribute('value');
// console.log(value);

// let elem = document.querySelector('#elem');
// let value = elem.getAttribute('value');
// console.log(value);

// let elem = document.querySelector('#elem');
// let value = elem.getAttribute('class');
// console.log(value);

// let elem = document.querySelector('#elem');
// let value = elem.setAttribute('value', 'text');
// console.log(elem);

// let elem = document.querySelector('#elem');
// let value = elem.setAttribute('class', 'valid');
// console.log(elem);

// let elem = document.querySelector('#elem');
// let value = elem.removeAttribute('value');
// console.log(elem);

// let elem = document.querySelector('#elem');
// let value = elem.hasAttribute('value');
// console.log(value);

// ======================================================================171

// let elem = document.querySelector('#elem');
// elem.value = 'new'; // поменяли свойство
// let value = elem.getAttribute('value');
// console.log(value); // выведет 	'old' - свойство не поменялось

// let elem = document.querySelector('#elem');
// let btn = document.querySelector('.btn');
// elem.value = 'new';
// btn.addEventListener('click', function () {
//   if (elem.value === elem.getAttribute('value')) {
//     alert('no');
//   } else {
//     alert('yes');
//   }
// });

// elem.setAttribute('value', 'new');
// let value = elem.value;
// console.log(value); // выведет 'new'

// let elem = document.querySelector('#elem');
// let btn = document.querySelector('.btn');
// btn.addEventListener('click', function () {
//   elem.value = elem.getAttribute('value');
// });

// ======================================================================172

// let elem = document.querySelector('#elem');
// console.log(elem.classList.length);
// let lists = elem.classList;
// elem.classList.add('xxx');
// elem.classList.remove('www', 'zzz');
// console.log(elem.classList.contains('ggg'));
// elem.classList.toggle('www');
// for (let item of lists) {
//   document.write(item + '<br />');
// }

// ======================================================================173

// let elem = document.querySelector('#elem');
// elem.style.color = 'red';

// let btn = document.querySelector('.btn');
// let div = document.querySelector('.block');
// btn.addEventListener('click', function () {
//   elem.style.width = '200px';
//   elem.style.height = '200px';
//   elem.style.border = '1px solid';
//   elem.style.fontSize = '20px';
//   elem.style.backgroundColor = 'grey';
// });

// let btn = document.querySelector('.btn');
// let list = document.querySelectorAll('li');
// btn.addEventListener('click', function () {
//   for (let item of list) {
//     item.style.cssFloat = 'left';
//   }
// });

// ======================================================================174

// let elems = document.querySelectorAll('p');

// for (let elem of elems) {
//   elem.addEventListener('click', function () {
//     this.classList.add('colored'); // добавляем абзацу класс
//   });
// }

// let text = document.querySelector('.text');
// let btns = document.querySelectorAll('.btn');
// for (let item of btns) {
//   item.addEventListener('click', func);
// }
// function func() {
//   text.classList.add('col');
// }

// let elems = document.querySelectorAll('p');
// for (let elem of elems) {
//   elem.addEventListener('click', func);
//   function func() {
//     this.classList.toggle('colored');
//     this.removeEventListener('click', func);
//   }
// }

// let button = document.querySelector('#button');
// let elem = document.querySelector('#elem');

// button.addEventListener('click', function () {
//   elem.classList.toggle('active');
// });

// ======================================================================175

// let ul = document.querySelector('#elem');
// let text = ul.firstElementChild;
// text.style.color = 'red';

// let ul = document.querySelector('#elem');
// let text = ul.lastElementChild;
// text.style.color = 'red';

// let ul = document.querySelector('#elem');
// let texts = ul.children;
// for (let item of texts) {
//   item.innerHTML = item.innerHTML + '!';
// }

// let elem = document.querySelector('#elem');
// let parent = elem.parentElement;
// let parentParent = parent.parentElement;
// parentParent.style.border = '1px solid red';

// let elem = document.querySelector('#elem');
// let parent = elem.closest('div');
// console.log(parent);

// let elem = document.querySelector('#elem');
// let parent = elem.closest('.www');
// console.log(parent);

// let elem = document.querySelector('#elem');
// let prevElem = elem.previousElementSibling;
// let nextElem = elem.nextElementSibling;
// let saveElem = prevElem.innerHTML;
// prevElem.innerHTML = nextElem.innerHTML;
// nextElem.innerHTML = saveElem;

// ======================================================================176

// let div = document.getElementById('elem');
// console.log(div);

// let elems = document.getElementsByTagName('li');
// console.log(elems);

// let elems = document.getElementsByClassName('www');
// console.log(elems);

// ======================================================================177

// let parent = document.querySelector('#parent');
// let elems1 = parent.querySelectorAll('.www');
// let elems2 = parent.querySelectorAll('.ggg');
// console.log(elems1);
// console.log(elems2);

// ======================================================================178

// let elem = document.querySelector('#elem');
// elem.addEventListener('click', function () {
//   elem.innerHTML += elem.dataset.text;
// });

// let elems = document.querySelectorAll('div');
// for (let elem of elems) {
//   elem.addEventListener('click', func);
// }
// function func() {
//   this.innerHTML += this.dataset.num;
// }

// let btn = document.querySelector('.btn');
// let span = document.querySelector('.view');

// btn.addEventListener('click', function () {
//   btn.dataset.num++;
// });
// btn.addEventListener('dblclick', function () {
//   span.innerHTML = btn.dataset.num;
// });

// let elem = document.querySelector('#elem');
// elem.addEventListener('blur', function () {
//   if (elem.value.length == elem.dataset.length) {
//     console.log('норм');
//   } else {
//     console.log('ошибка');
//   }
// });

// let elem = document.querySelector('#elem');
// elem.addEventListener('blur', function () {
//   if (
//     Number(elem.value) >= elem.dataset.min &&
//     Number(elem.value) <= elem.dataset.max
//   ) {
//     console.log('норм');
//   } else {
//     console.log('ошибка');
//   }
// });

// let elem = document.querySelector('#elem');
// elem.addEventListener('click', function () {
//   elem.innerHTML += elem.dataset.productPrice * elem.dataset.productAmount;
// });

// let elem = document.querySelector('#elem');
// alert(elem.getAttribute('data-num')); // выведет 1000
// alert(elem.getAttribute('data-my-num')); // выведет 2000

// let texts = document.querySelectorAll('.text');
// for (let i = 0; i < texts.length; i++) {
//   texts[i].setAttribute('data-num', i);
// }

// ======================================================================179

// let elem = document.querySelector('#elem');
// console.log(elem.firstChild); // комментарий
// console.log(elem.firstElementChild); // тег span

// let elem = document.querySelector('.parent');
// console.log(elem.lastChild);
// console.log(elem.lastElementChild);

// let elem = document.querySelector('.child');
// console.log(elem.nextSibling);
// console.log(elem.nextElementSibling);

// let elem = document.querySelector('.child');
// console.log(elem.previousSibling);
// console.log(elem.previousElementSibling);

// let elem = document.querySelector('#elem');
// for (let node of elem.childNodes) {
//   console.log(node);
// }

// let elem = document.querySelector('#elem');
// for (let node of elem.childNodes) {
//   if (node.nodeType == 3) {
//     console.log(node.textContent);
//   }
// }

// ======================================================================180

// let elem = document.querySelector('.elem');
// let text = document.querySelector('.text');
// elem.addEventListener('blur', function () {
//   text.innerHTML += elem.value;
// });

// let elems = document.querySelectorAll('.elem');
// let text = document.querySelector('.text');
// let btn = document.querySelector('.btn');
// let sum = 0;
// for (let elem of elems) {
//   sum += Number(elem.value);
// }
// btn.addEventListener('click', function () {
//   text.innerHTML = sum;
// });

// let elem = document.querySelector('.elem');
// elem.addEventListener('blur', function () {
//   let str = elem.value;
//   let arr = str.split('');
//   let sum = 0;
//   for (let item of arr) {
//     sum += Number(item);
//   }
// });

// let elem = document.querySelector('.elem');
// elem.addEventListener('blur', function () {
//   let str = elem.value;
//   let arr = str.split(',');
//   let sum = 0;
//   let sred = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += Number(arr[i]);
//     sred = sum / arr.length;
//   }
//   console.log(sred);
// });

// let fullName = document.querySelector('.fullName');
// let name = document.querySelector('.name');
// let surname = document.querySelector('.surname');
// let patronymic = document.querySelector('.patronymic');
// fullName.addEventListener('blur', function () {
//   let str = fullName.value;
//   let arr = str.split(' ');
//   name.value = arr[1];
//   surname.value = arr[0];
//   patronymic.value = arr[2];
// });

// let fullName = document.querySelector('.fullName');
// function upCase(str) {
//   let arr = str.split(' ');
//   for (let i = 0; i < arr.length; i++) {
//     arr[i] = arr[i].split('');
//     arr[i][0] = arr[i][0].toUpperCase();
//     arr[i] = arr[i].join('');
//   }
//   str = arr.join(' ');
//   return str;
// }
// fullName.addEventListener('blur', function () {
//   fullName.value = upCase(fullName.value);
// });

// let fullName = document.querySelector('.fullName');
// fullName.addEventListener('blur', function () {
//   let str = fullName.value;
//   let arr = str.split(' ');
//   console.log(arr.length);
// });

// let fullName = document.querySelector('.fullName');
// fullName.addEventListener('blur', function () {
//   let str = fullName.value;
//   let arr = str.split('.').reverse();
//   fullName.value = arr.join('-');
// });

// let fullName = document.querySelector('.fullName');
// fullName.addEventListener('blur', function () {
//   let str = fullName.value;
//   let arr1 = str.split('');
//   let arr2 = str.split('').reverse();
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] !== arr2[i]) {
//       console.log('это не палиндром');
//       return;
//     }
//     console.log('это палиндром');
//   }
// });

// let fullName = document.querySelector('.fullName');
// let flag = false;
// fullName.addEventListener('blur', func);
// function func() {
//   let str = fullName.value;
//   let arr = str.split('');
//   for (let i = 0; i < arr.length; i++) {
//     if (Number(arr[i]) == 3) {
//       flag = true;
//       break;
//     }
//   }
//   if (flag === true) {
//     console.log('есть');
//   } else {
//     console.log('нет');
//   }
// }

// let texts = document.querySelectorAll('.text');
// let btn = document.querySelector('.btn');
// btn.addEventListener('click', function () {
//   for (let i = 0; i < texts.length; i++) {
//     texts[i].innerHTML = texts[i].innerHTML + (i + 1);
//   }
// });

// let texts = document.querySelectorAll('.link');
// let btn = document.querySelector('.btn');
// btn.addEventListener('click', function () {
//   for (let i = 0; i < texts.length; i++) {
//     texts[i].innerHTML = texts[i].innerHTML + texts[i].getAttribute('href');
//   }
// });

// let texts = document.querySelectorAll('.link');
// let btn = document.querySelector('.btn');
// btn.addEventListener('click', function () {
//   for (const elem of texts) {
//     if (elem.getAttribute('href').includes('http://')) {
//       texts.innerHTML += ` ${'&rarr;'}`;
//     }
//   }
// });

// let texts = document.querySelectorAll('.text');
// for (let text of texts) {
//   text.addEventListener('click', function () {
//     text.innerHTML = text.innerHTML ** 2;
//   });
// }

// ======================================================================181

// let elem = document.querySelector('#elem');
// console.log(elem.value); // выведет 'text'

// let elem = document.querySelector('#elem');
// let text = document.querySelector('.text');
// elem.addEventListener('blur', function () {
//   text.innerHTML = elem.value;
// });

// ======================================================================182

// let elem = document.querySelector('#elem');
// console.log(elem.disabled); // выведет true
// elem.disabled = false;

// let elem = document.querySelector('.elem');
// let btn = document.querySelector('.btn');
// btn.addEventListener('click', function () {
//   elem.disabled = false;
// });

// let elem = document.querySelector('.elem');
// let unbtn = document.querySelector('.btn1');
// let blbtn = document.querySelector('.btn2');
// unbtn.addEventListener('click', function () {
//   elem.disabled = false;
// });
// blbtn.addEventListener('click', function () {
//   elem.disabled = true;
// });

// let elem = document.querySelector('.elem');
// let btn = document.querySelector('.btn1');
// btn.addEventListener('click', function () {
//   if (elem.disabled == false) {
//     alert('Input разблокирован');
//   } else {
//     alert('Input заблокирован');
//   }
// });

// ======================================================================183

// let elem = document.querySelector('#elem');
// console.log(elem.checked);

// let elem = document.querySelector('#elem');
// let unbtn = document.querySelector('.btn1');
// let blbtn = document.querySelector('.btn2');
// unbtn.addEventListener('click', function () {
//   elem.checked = true;
// });
// blbtn.addEventListener('click', function () {
//   elem.checked = false;
// });

// let elem = document.querySelector('#elem');
// let btn = document.querySelector('.btn');
// let text = document.querySelector('.text');
// btn.addEventListener('click', function () {
//   if (elem.checked) {
//     text.innerHTML = 'Привет';
//   } else {
//     text.innerHTML = 'Пока';
//   }
// });

// ======================================================================184

// let elem = document.querySelector('#elem');
// let button = document.querySelector('#button');
// button.addEventListener('click', function () {
//   elem.disabled = !elem.disabled;
// });

// let elem = document.querySelector('#elem');
// let button = document.querySelector('#button');
// button.addEventListener('click', function () {
//   elem.checked = !elem.checked;
// });

// ======================================================================185
