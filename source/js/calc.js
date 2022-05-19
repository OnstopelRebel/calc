let salary = document.querySelector('.calc-form__input--salary');
let form = document.querySelector('.calc-form');
let hours = document.querySelector('.calc-form__input--hours');
let nightCheck = document.querySelector('.night-check');
let month = document.querySelector('.calc-form__month');
let workDays = [16, 19, 22, 21, 18, 21, 21, 23, 22, 21, 21, 22];
let calcButton = document.querySelector('.calc-form__button');
let result = document.querySelector('.result-block__cost');

let overCalc = function() {
  let daySalary = salary.value / workDays[month.value - 1];
  let hourSalary = daySalary / 8 * 0.87;
  if (nightCheck.checked) {
    let nightSalary = hourSalary * 6.25 * 0.2;
    return ((hourSalary * hours.value * 2) + nightSalary).toFixed(2);
  }
  return (hourSalary * hours.value * 2).toFixed(2);
}

calcButton.addEventListener('click', () => {
  result.textContent = overCalc() + ' ₽';
})

