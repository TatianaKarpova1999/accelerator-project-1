const form = document.querySelector('.form__content');
const formInput = form.querySelectorAll('.form__input');
const submitButton = document.querySelector('.form__button');

submitButton.addEventListener('click', () => {
  formInput.forEach ((input) => {
    if(!input.checkValidity()) {
      input.nextElementSibling.style.display = 'block';
      input.classList.add('form__input--error');
    } else {
      input.nextElementSibling.style.display = 'none';
      input.classList.remove('form__input--error');
    }
  });
});
