function sliderFunction() {
  const data = [
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, magnam.',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, exercitationem repellat quisquam quia architecto optio esse beatae distinctio? Eveniet, mollitia.',
    'Lorem ipsum dolor sit amet.',
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat cupiditate tenetur iusto reprehenderit?',
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam nihil autem soluta itaque maiores molestiae aut amet magni.',
    ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam alias iure deserunt ad sit! Nihil, hic!',
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat cupiditate tenetur iusto reprehenderit?',
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat cupiditate tenetur iusto reprehenderit?',
  ];

  const bgColor = ['#00a4e4', '#7552cc', '#00205b', '#008eaa', '#1c79c0', '#0066a1', '#eb5424', '#2a5934'];
  const outField = document.querySelector('body');

  let count = 0;
  let slideCollection;


  createDivSlide();

  function createDivSlide() {
    for (let i = 0; i < data.length; i++) {
      let div = document.createElement('div');
      div.classList.add('slide');
      if (i !== 0) div.classList.add('hide');
      if (i === 0) div.style.background = bgColor[randomInteger(0, bgColor.length - 1)];
      let text = document.createElement('div');
      text.textContent = data[i];
      div.append(text);
      outField.append(div);
    }
    outField.onclick = nextSlide;
    slideCollection = document.querySelectorAll('.slide');
  }

  function nextSlide() {
    slideCollection[count].classList.add('hide');
    if (count + 1 < data.length) {
      count++;
    }
    else {
      count = 0;
    }
    slideCollection[count].classList.remove('hide');
    slideCollection[count].style.background = bgColor[randomInteger(0, bgColor.length - 1)];
  }

  function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }
}

document.addEventListener("DOMContentLoaded", sliderFunction);
