const CREDIT_MIN = 0;
const CREDIT_MAX = 15000000;
const FIRST_CONTRIBUTION_MIN = 0;
const FIRST_CONTRIBUTION_MAX = 15000000;
const RETURN_PERIOD_MIN = 1;
const RETURN_PERIOD_MAX = 50;

const creditText = document.querySelector("#creditText");
const creditRange = document.querySelector("#creditRange");
const firstContributionText = document.querySelector("#firstContributionText");
const firstContributionRange = document.querySelector(
  "#firstContributionRange"
);
const returnPeriodText = document.querySelector("#returnPeriodText");
const returnPeriodRange = document.querySelector("#returnPeriodRange");

const formatterNumber = new Intl.NumberFormat("ru");
const formatterCurrency = new Intl.NumberFormat("ru", {
  style: "currency",
  currency: "RUB",
  minimumFractionDigits: 0,
});
const formatterDate = new Intl.DateTimeFormat("ru", {
  year: "2-digit",
});

setDoubleDependencies(
  creditText,
  creditRange,
  formatterNumber,
  formatterCurrency,
  CREDIT_MIN,
  CREDIT_MAX
);
setDoubleDependencies(
  firstContributionText,
  firstContributionRange,
  formatterNumber,
  formatterCurrency,
  FIRST_CONTRIBUTION_MIN,
  FIRST_CONTRIBUTION_MAX
);
setDoubleDependencies(
  returnPeriodText,
  returnPeriodRange,
  formatterNumber,
  formatterDate,
  RETURN_PERIOD_MIN,
  RETURN_PERIOD_MAX
);

function setDoubleDependencies(
  textElement,
  rangeElement,
  formatterNumber,
  formatterGoal
) {
  textElement.addEventListener("focus", function (event) {
    let number = "";
    for (const letter of this.value) {
      if ("0123456789".includes(letter)) {
        number += letter;
      }
    }
    number = parseInt(number);
    this.value = formatterNumber.format(number);
  });

  textElement.addEventListener("input", function inputHandler(event) {
    let number = "";
    for (const letter of this.value) {
      if ("0123456789".includes(letter)) {
        number += letter;
      }
    }
    number = parseInt(number);
    if (number < min) {
      number = min;
    }
    if (number > max) {
      number = max;
    }
    rangeElement.value = number;

    number = formatterNumber.format(number);
    this.value = number;
  });

  textElement.addEventListener("blur", function (event) {
    let number = "";
    for (const letter of this.value) {
      if ("0123456789".includes(letter)) {
        number += letter;
      }
    }
    number = parseInt(number);
    this.value = formatterGoal.format(number);
  });

  rangeElement.addEventListener("input", function (event) {
    textElement.value = formatterGoal.format(parseInt(this.value));
  });
}
