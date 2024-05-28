const form = document.querySelector('.hero__form')
const emailInputElem = document.querySelector('#emailInput');
const errorMsgContainer = form.querySelector('.hero__form-error-message');
let isValidEmail = false;

if (emailInputElem.value.length !== 0) {
  checkEmailValidity();
}

emailInputElem.addEventListener('input', checkEmailValidity);

form.addEventListener('submit', e => {
  e.preventDefault();
  
  if (isValidEmail) {
    form.reset();
    return;
  }

  showError();
});

function checkEmailValidity() {
  isValidEmail = validateEmail(emailInputElem.value.trim());
  if (!isValidEmail) {
    showError();
  } else {
    hideError();
  }
}

function validateEmail(email) {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
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