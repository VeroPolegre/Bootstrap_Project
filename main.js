const userName = document.getElementById("user-name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordRepeat = document.getElementById("password-repeat");
const validationAlert = document.getElementById("validation-alert");
const validationAlertMessage = document.getElementById(
  "validation-alert-message"
);
const userValidationSuccessAlert = document.getElementById(
  "user-validation-success-alert"
);
const signUpButton = document.getElementById("sign-up-button");

const users = JSON.parse(localStorage.getItem("users")) || [];
function saveUsers() {
  const user = {
    userName: userName.value,
    email: email.value,
    password: password.value,
    passwordRepeat: passwordRepeat.value,
  };

  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));
}

function userValidation() {
  const reEmail = /(\w+?@\w+?\x2E.+)/;
  if (
    userName.value === "" ||
    email.value === "" ||
    password.value === "" ||
    passwordRepeat.value === ""
  ) {
    validationAlert.classList.remove("hidden");
    validationAlertMessage.innerHTML =
      "Please, all the fields must be completed";
    return false;
  } else if (reEmail.test(email.value) === false) {
    validationAlert.classList.remove("hidden");
    validationAlertMessage.innerHTML = "Please, enter a valid email";

    return false;
  } else {
    return true;
  }
}

function passwordValidation() {
  if (password.value !== passwordRepeat.value) {
    validationAlert.classList.remove("hidden");
    validationAlertMessage.innerHTML = "Please, repeat the same password";
    return false;
  } else {
    return true;
  }
}

function createUser(e) {
  e.preventDefault();
  const isPasswordValid = passwordValidation();
  const isUserValid = userValidation();
  setTimeout(() => {
    validationAlert.classList.add("hidden");
  }, 3000);

  if (isUserValid && isPasswordValid) {
    validationAlert.classList.add("hidden");
    userValidationSuccessAlert.classList.remove("hidden");
    setTimeout(() => {
      userValidationSuccessAlert.classList.add("hidden");
    }, 3000);
    saveUsers();
  }
}
signUpButton.addEventListener("click", createUser);
