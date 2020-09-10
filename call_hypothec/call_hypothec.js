const CREDIT_MIN = 0;
const CREDIT_MAX = 15000000;
const YEARS_MIN = 0;
const YEARS_MAX = 15;

const formatterNumber = new Intl.NumberFormat("ru");
const formatterCurrency = new Intl.NumberFormat("ru", {
  style: "currency",
  currency: "RUB",
  minimumFractionDigits: 0,
});

function formatterYears(value) {
  const years = parseInt(value);
  let count = years % 100;
  let txt = null;

  if (count >= 5 && count <= 20) {
    txt = "лет";
  } else {
    count = years % 10;

    if (count == 1) {
      txt = "год";
    } else {
      if (count >= 2 && count <= 4) {
        txt = "года";
      } else {
        txt = "лет";
      }
    }
  }
  return value + " " + txt;
}

//-------------------Стоимость недвижимости------------
const creditText = document.querySelector("#creditText");
const creditRange = document.querySelector("#creditRange");

creditText.addEventListener("focus", function (event) {
  let number = "";
  for (const letter of this.value) {
    if ("0123456789".includes(letter)) {
      number += letter;
    }
  }
  number = parseInt(number);
  this.value = formatterNumber.format(number);
});

creditText.addEventListener("input", function inputHandler(event) {
  let number = "";
  for (const letter of this.value) {
    if ("0123456789".includes(letter)) {
      number += letter;
    }
  }
  number = parseInt(number);
  if (number < CREDIT_MIN) {
    number = CREDIT_MIN;
  }
  if (number > CREDIT_MAX) {
    number = CREDIT_MAX;
  }
  creditRange.value = number;

  number = formatterNumber.format(number);
  this.value = number;
});

creditText.addEventListener("blur", function (event) {
  let number = "";
  for (const letter of this.value) {
    if ("0123456789".includes(letter)) {
      number += letter;
    }
  }
  number = parseInt(number);
  this.value = formatterCurrency.format(number);
});

creditRange.addEventListener("input", function (event) {
  creditText.value = formatterCurrency.format(parseInt(this.value));
});

//-------------------Первоначальный взнос------------
const firstContributionText = document.querySelector("#firstContributionText");
const firstContributionRange = document.querySelector(
  "#firstContributionRange"
);

firstContributionText.addEventListener("focus", function (event) {
  let number = "";
  for (const letter of this.value) {
    if ("0123456789".includes(letter)) {
      number += letter;
    }
  }
  number = parseInt(number);
  this.value = formatterNumber.format(number);
});

firstContributionText.addEventListener("input", function inputHandler(event) {
  let number = "";
  for (const letter of this.value) {
    if ("0123456789".includes(letter)) {
      number += letter;
    }
  }
  number = parseInt(number);
  if (number < CREDIT_MIN) {
    number = CREDIT_MIN;
  }
  if (number > CREDIT_MAX) {
    number = CREDIT_MAX;
  }
  firstContributionRange.value = number;

  number = formatterNumber.format(number);
  this.value = number;
});

firstContributionText.addEventListener("blur", function (event) {
  let number = "";
  for (const letter of this.value) {
    if ("0123456789".includes(letter)) {
      number += letter;
    }
  }
  number = parseInt(number);
  this.value = formatterCurrency.format(number);
});

firstContributionRange.addEventListener("input", function (event) {
  firstContributionText.value = formatterCurrency.format(parseInt(this.value));
});

//-------------------Срок кредита------------
const returnPeriodText = document.querySelector("#returnPeriodText");
const returnPeriodRange = document.querySelector("#returnPeriodRange");

returnPeriodText.addEventListener("focus", function (event) {
  let number = "";
  for (const letter of this.value) {
    if ("0123456789".includes(letter)) {
      number += letter;
    }
  }
  number = parseInt(number);
  this.value = formatterNumber.format(number);
});

returnPeriodText.addEventListener("input", function inputHandler(event) {
  let number = "";
  for (const letter of this.value) {
    if ("0123456789".includes(letter)) {
      number += letter;
    }
  }
  number = parseInt(number);
  if (number < YEARS_MIN) {
    number = YEARS_MIN;
  }
  if (number > YEARS_MAX) {
    number = YEARS_MAX;
  }
  returnPeriodRange.value = number;

  number = formatterNumber.format(number);
  this.value = number;
});

returnPeriodText.addEventListener("blur", function (event) {
  let number = "";
  for (const letter of this.value) {
    if ("0123456789".includes(letter)) {
      number += letter;
    }
  }

  this.value = formatterYears(number);
});

returnPeriodRange.addEventListener("input", function (event) {
  returnPeriodText.value = formatterYears(this.value);
});
