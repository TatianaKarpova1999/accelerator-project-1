const faqTabs = document.querySelector('.faq__tabs');
const faqTab = faqTabs.querySelectorAll('.faq__tab');
const faqCenter = document.querySelector('.faq__content--center');
const faqSubscription = document.querySelector('.faq__content--subscription');
const faqServices = document.querySelector('.faq__content--services');
const faqRules = document.querySelector('.faq__content--rules');
const faq = document.querySelector('.faq');
const faqButton = faq.querySelectorAll('.faq__button');

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

faqButton.forEach((item) => {
  item.addEventListener('click', (evt) => {
    const faqItem = evt.target.parentNode;
    const faqContent = faqItem.children[1];
    if (evt.target.className === 'faq__button faq__button--closed') {
      evt.target.classList.remove('faq__button--closed');
      evt.target.classList.add('faq__button--opened');
      faqContent.style.display = 'block';
    } else {
      evt.target.classList.add('faq__button--closed');
      evt.target.classList.remove('faq__button--opened');
      faqContent.style.display = 'none';
    }
  }
  );
});
