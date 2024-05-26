const form = document.querySelector('.hero__form')
const emailInputElem = document.querySelector('#emailInput');
const errorMsgContainer = form.querySelector('.hero__form-error-message');

form.addEventListener('submit', e => {
  e.preventDefault();
  const isValidEmail = validateEmail(emailInputElem.value.trim(""));
  
  if (!isValidEmail) {
    showError();
  } else {
    hideError();
    form.reset();
  }
})

function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function showError() {
  emailInputElem.classList.add('hero__input--invalid');
  errorMsgContainer.classList.remove('hero__form-error-message--hidden');
  errorMsgContainer.setAttribute('aria-hidden', 'false');
}

function hideError() {
  emailInputElem.classList.remove('hero__input--invalid');
  errorMsgContainer.classList.add('hero__form-error-message--hidden');
  errorMsgContainer.setAttribute('aria-hidden', 'true');
}