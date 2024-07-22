const button = document.querySelector('.hero-content__button');
const price = document.querySelector('.price');

button.addEventListener('click', () => {
  price.scrollIntoView({
    block: 'start',
    behavior: 'smooth',
  });
});
