const loginInput = document.querySelector('.login-input');
const array = [
  {
    name: '',
    login: '140201maks',
  },
];
function checkLogin(DOMelement, userLogin, arr) {
  arr.map(el => {
    if (el.login === userLogin) {
      DOMelement.style.border = '2px outset #2CD131';
    } else {
      DOMelement.style.border = '2px outset #FF0000';
    }
  });
}

loginInput.addEventListener('input', validate);
function validate(params) {
  console.log(checkLogin(loginInput, loginInput.value, array));
}
