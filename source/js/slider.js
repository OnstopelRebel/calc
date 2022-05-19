const salarySlider = document.querySelector('.salary-slider');
const timeSlider = document.querySelector('.time-slider');
const salary = document.querySelector('.calc-form__input--salary');
const time = document.querySelector('.calc-form__input--hours');
const connect = document.querySelector('.noUi-connect');
const colorClasses = ['color-1', 'color-2'];

noUiSlider.create(salarySlider, {
  start: [30000],
  range: {
    'min': [10000],
    'max': [150000],
  },
  step: 100,
  connect: 'lower',
});

salarySlider.noUiSlider.on('update', (values, handle) => {
  salary.value = Math.floor(values[handle]);
});


noUiSlider.create(timeSlider, {
  start: [10],
  step: 1,
  range: {
    'min': [1],
    'max': [14],
  },
  connect: 'lower',
});

timeSlider.noUiSlider.on('update', (values, handle) => {
  time.value = Math.floor(values[handle]);
});


