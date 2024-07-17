const tabs = document.querySelector('.price__tabs');
const tab = tabs.querySelectorAll('.price__tab');
const priceTrainer = document.querySelector('.price-card__price--trainer');
const priceDay = document.querySelector('.price-card__price--day');
const priceFullDay = document.querySelector('.price-card__price--full-day');

tab.forEach((element) => {
  element.addEventListener('click', clickHandlerPrice);
});


function clickHandlerPrice(evt) {
  tab.forEach((item) => {
    item.classList.remove('price__tab--current');
  });
  evt.target.classList.add('price__tab--current');

  if (evt.target.innerHTML === '6&nbsp;месяцев') {
    priceTrainer.innerHTML = '30&nbsp;000';
    priceDay.innerHTML = '10&nbsp;200';
    priceFullDay.innerHTML = '16&nbsp;200';
  } else if (evt.target.innerHTML === '12&nbsp;месяцев') {
    priceTrainer.innerHTML = '60&nbsp;000';
    priceDay.innerHTML = '20&nbsp;400';
    priceFullDay.innerHTML = '32&nbsp;400';
  }
}
