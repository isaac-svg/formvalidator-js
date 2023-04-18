const form = document.querySelector(".form");
const fields = document.querySelectorAll(".field");
const userName = document.querySelector("#name");
const email = document.querySelector("#email");
const password1 = document.querySelector("#password1");
const password2 = document.querySelector("#password2");
const btn = document.querySelector(".btn");

// check if all functions are present

function checkAllInputs([userName, email, password1, password2]) {
  const Inputs = [userName, email, password1, password2];
  Inputs.forEach((input) => {
    if (!input.value) {
      showError(input, `${getFieldName(input)} is required `);
    } else {
      showSuccess(input);
    }
  });
}
// check username length
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(input, `${getFieldName(input)} must be greater than ${min}`);
  } else if (input.value.length > max) {
    showError(input, `${getFieldName(input)} must be less than ${max}`);
  } else {
    showSuccess(input);
  }
}
// check passWord
function checkPaswwordMatch(pass1, pass2) {
  if (!(pass1.value === pass2.value)) {
    showError(pass2, "Passwords do not match");
  }
}
// check email
function validateEmail(input) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, "Email is not valid");
  }
}
// showError
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "field error";
  const Small = formControl.querySelector("small");
  Small.innerText = message;
  Small.className = "error";
}
// show success
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "field success";
}
function getFieldName(input) {
  return input.id;
}
// event listeners
form.addEventListener("submit", checkInput);
function checkInput(e) {
  e.preventDefault();
  checkAllInputs([userName, email, password1, password2]);
  checkLength(userName, 3, 25);
  checkLength(password1, 8, 30);
  checkPaswwordMatch(password1, password2);
  validateEmail(email);
}
