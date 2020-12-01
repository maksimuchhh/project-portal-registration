const passwordInput = document.querySelector('.password-input');
const submitBtn = document.querySelector('.submit-register-button');
const confirmPassword = document.querySelector('.confirm-password');
const passwordCont = document.querySelector('.password-container');
const registerLogin = document.querySelector('.register-login-input');
const loginForm = document.querySelector('.login-form');
let errors;
function validatePassword() {
  const p = passwordInput.value;

  if (p.length < 8) {
    errors.push('Your password must be at least 8 characters');
  }
  if (p.search(/[a-z]/i) < 0) {
    errors.push('Your password must contain at least one letter.');
  }
  if (p.search(/[0-9]/) < 0) {
    errors.push('Your password must contain at least one digit.');
  }
  if (
    !(
      passwordInput.value === confirmPassword.value &&
      passwordInput.value.length > 1
    )
  ) {
    errors.push('Passwords do not match');
    redBorder(confirmPassword);
  } else {
    greenBorder(confirmPassword);
  }
}
function validateLogin() {
  if (registerLogin.value.length === 0) {
    errors.push('Enter login');
    redBorder(registerLogin);
  } else if (registerLogin.value.length <= 5) {
    errors.push('Your login must be at least 6 characters');
    redBorder(registerLogin);
  } else {
    greenBorder(registerLogin);
  }
}

function renderRegistrationErrors() {
  errors.map(el => {
    passwordCont.insertAdjacentHTML('beforeend', `<p>${el}</p>`);
  });
}

function greenBorder(el) {
  el.style.border = '2px outset #2CD131';
}

function redBorder(el) {
  el.style.border = '2px outset #FF0000';
}

function validation(evt) {
  errors = [];
  evt.preventDefault();
  passwordCont.innerHTML = '';
  validatePassword();
  validateLogin();

  if (errors.length > 0) {
    renderRegistrationErrors();
    if (errors.length === 1 && errors[0] === 'Passwords do not match') {
      redBorder(confirmPassword);
      greenBorder(passwordInput);
    } else {
      redBorder(passwordInput);
    }
    return false;
  }

  greenBorder(passwordInput);
  return true;
}

submitBtn.addEventListener('click', validation);
