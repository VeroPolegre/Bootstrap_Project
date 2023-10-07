const userName = document.getElementById("userName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordRepeat = document.getElementById("passwordRepeat");
const userValidationAlert = document.getElementById("userValidationAlert");
const passwordValidationAlert = document.getElementById(
  "passwordValidationAlert"
);
const btn = document.getElementById("btn");

const people = JSON.parse(localStorage.getItem("people")) || [];
function saveUsers() {
  const user = {
    userName: userName.value,
    email: email.value,
    password: password.value,
    passwordRepeat: passwordRepeat.value,
  };

  people.push(user);
  localStorage.setItem("people", JSON.stringify(people));
}

function userValidation() {
  const reEmail = /(\w+?@\w+?\x2E.+)/;
  setTimeout(() => {
    userValidationAlert.innerText = "";
  }, 3000);
  if (
    userName.value == "" ||
    email.value == "" ||
    password.value == "" ||
    passwordRepeat.value == ""
  ) {
    userValidationAlert.innerText = "Please, all the fields must be completed";
    return false;
  } else if (reEmail.test(email.value) !== true) {
    userValidationAlert.innerText = "Please, enter a valid email";
    return false;
  } else {
    userValidationAlert.innerText = "";
    return true;
  }
}

function passwordValidation() {
  setTimeout(() => {
    passwordValidationAlert.innerText = "";
  }, 3000);
  if (password.value !== passwordRepeat.value) {
    passwordValidationAlert.innerHTML = "Please, repeat the same password";
    return false;
  } else {
    passwordValidationAlert.innerHTML = "";
    return true;
  }
}

function createUser(e) {
  e.preventDefault();

  const isUserValid = userValidation();
  const isPasswordValid = passwordValidation();

  if (isUserValid && isPasswordValid) {
    saveUsers();
    userValidationAlert.innerText = "User created successfully!!";
  }
}
btn.addEventListener("click", createUser);
