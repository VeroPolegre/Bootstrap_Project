const userName = document.getElementById("userName");
const email = document.getElementById("email");
const password1 = document.getElementById("password1");
const password2 = document.getElementById("password2");
const msg1 = document.getElementById("msg1");
const msg2 = document.getElementById("msg2");
const btn = document.getElementById("btn");


const people = JSON.parse(localStorage.getItem("people")) || [];
function saveUsers() {
  const user = {
    userName: userName.value,
    email: email.value,
    password1: password1.value,
    password2: password2.value,
  };

  people.push(user);
  localStorage.setItem("people", JSON.stringify(people));
}

function userValidation() {
  const reEmail = /(\w+?@\w+?\x2E.+)/;
  if (
    userName.value == "" ||
    email.value == "" ||
    password1.value == "" ||
    password2.value == ""
  ) {
    msg1.innerText = "Please, all the fields must be completed";
  } else if (reEmail.test(email.value) !== true) {
    msg1.innerText = "Please, enter a valid email";
  } else {
    msg1.innerText = "User created succesfully!!";
  }
  setTimeout(() => {
    msg1.innerText = "";
  }, 3000);
}

function passwordValidation() {
  if (password1.value != password2.value) {
    msg2.innerHTML = "Please, repeat the same password";
  } else {
    msg2.innerHTML = "";
  }
  setTimeout(() => {
    msg2.innerText = "";
  }, 3000);
}

function createUser(e) {
  e.preventDefault();
  saveUsers();
  userValidation();
  passwordValidation();
}

btn.addEventListener("click", createUser);