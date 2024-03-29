const UL = document.querySelectorAll('ul>li>span');

document.querySelector('table').addEventListener('click', function (event) {
  if (event.target.tagName !== 'TD') return false;
  let data = [...event.target.parentNode.children];
  let text = getDataFromTd(data);
  outText(text);
});

function getDataFromTd(tdArr) {
  // return tdArr.map(item => item.textContent);
  let arr = [];
  for (let i = 0; i < tdArr.length; i++) {
    arr.push(tdArr[i].textContent);
  }
  return arr;
}

function outText(text) {
  // text.forEach((item, index) => UL[index].textContent = item);
  for (let i = 0; i < text.length; i++) {
    UL[i].textContent = text[i];
  }
}