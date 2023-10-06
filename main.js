const userName = document.getElementById("userName");
const email = document.getElementById("email");
const password1 = document.getElementById("password1");
const password2 = document.getElementById("password2");

const msg1 = document.getElementById("msg1");
const msg2 = document.getElementById("msg2");

const btn = document.getElementById("btn");

function saveUsers() {
  const user = {
    name: userName.value,
    email: email.value,
    password1: password1.value,
    password2: password2.value,
  };
  localStorage.setItem("user", JSON.stringify(user));
}

function validation1(e) {
  e.preventDefault();
  const reEmail = /(\w+?@\w+?\x2E.+)/;
  if (
    userName.value == "" ||
    email.value == "" ||
    password1.value == "" ||
    password2.value == ""
  ) {
    msg1.innerText = "Rellena todos los campos";
  } else if (reEmail.test(email.value) !== true) {
    msg1.innerText =
      "Por favor inserte un correo correcto que contenga almenos un @";
  } else {
    msg1.innerText = `User created succesfully, ${userName.value} ${email.value} `;
  }
  setTimeout(() => {
    msg1.innerText = "";
  }, 3000);
}

function validation2(e) {
  e.preventDefault();
  if (password1 !== password2) {
    msg2.innerHTML = "Please repeat the same password";
  } else {
    msg2.innerHTML = "User created succesfully!";
  }
  setTimeout(() => {
    msg2.innerText = "";
  }, 3000);
}

btn.addEventListener("click", saveUsers);
