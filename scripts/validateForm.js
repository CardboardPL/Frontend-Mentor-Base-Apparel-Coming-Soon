const form = document.querySelector('.hero__form')
const emailInputElem = document.querySelector('#emailInput');

form.onsubmit = (event) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regex.test(emailInputElem.value)) {
    event.preventDefault();
  }
}