const faqTabs = document.querySelector('.faq__tabs');
const faqTab = faqTabs.querySelectorAll('.faq__tab');
const faqCenter = document.querySelector('.faq__content--center');
const faqSubscription = document.querySelector('.faq__content--subscription');
const faqServices = document.querySelector('.faq__content--services');
const faqRules = document.querySelector('.faq__content--rules');
const faq = document.querySelector('.faq');
const faqInteractive = faq.querySelectorAll('.faq__item');

faqTab.forEach((element) => {
  element.addEventListener('click', clickHandlerFaq);
});

function clickHandlerFaq(evt) {
  faqTab.forEach((item) => {
    item.classList.remove('faq__tab--current');
  });
  evt.target.classList.add('faq__tab--current');

  switch (evt.target.innerHTML) {
    case 'Центр':
      faqCenter.style.display = 'block';
      faqSubscription.style.display = 'none';
      faqServices.style.display = 'none';
      faqRules.style.display = 'none';
      break;
    case 'Абонемент':
      faqCenter.style.display = 'none';
      faqSubscription.style.display = 'block';
      faqServices.style.display = 'none';
      faqRules.style.display = 'none';
      break;
    case 'Услуги':
      faqCenter.style.display = 'none';
      faqSubscription.style.display = 'none';
      faqServices.style.display = 'block';
      faqRules.style.display = 'none';
      break;
    default:
      faqCenter.style.display = 'none';
      faqSubscription.style.display = 'none';
      faqServices.style.display = 'none';
      faqRules.style.display = 'block';
  }
}

faqInteractive.forEach((item) => {
  item.addEventListener('click', () => {

    if (item.className === 'faq__item faq__item--opened') {
      item.children[item.children.length - 1].classList.remove('faq__button--opened');
      item.children[item.children.length - 1].classList.add('faq__button--closed');
      item.classList.remove('faq__item--opened');
    } else {
      item.children[item.children.length - 1].classList.remove('faq__button--closed');
      item.children[item.children.length - 1].classList.add('faq__button--opened');
      item.classList.add('faq__item--opened');
    }
  });
});
