const button = document.querySelector('.hero-content__button');
const price = document.querySelector('.price');

button.addEventListener('click', () => {
  price.scrollIntoView({
    block: 'center',
    behavior: 'smooth',
  });
});
