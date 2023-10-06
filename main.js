const userName = document.getElementById("userName");
const email = document.getElementById("email");
const password1 = document.getElementById("password1");
const password2 = document.getElementById("password2");

const msg1 = document.getElementById("msg1");
const msg2 = document.getElementById("msg2");

const btn = document.getElementById("btn");

let allUsers = JSON.parse(localStorage.getItem("allUsers")) || [];
function saveContacts(e) {
  e.preventDefault();
  const user = {
    name: userName.value,
    email: email.value,
    password1: password1.value,
    password2: password2.value,
  };
  allUsers.push(user);
  localStorage.setItem("allUsers", JSON.stringify(allUsers));
  console.log(allUsers);
}
saveContacts();

// function validation1(e) {
//   e.preventDefault();
//   const reEmail = /(\w+?@\w+?\x2E.+)/;
//   if (
//     name.value == "" ||
//     email.value == "" ||
//     password1.value == "" ||
//     password2.value == ""
//   ) {
//     msg.innerText = "Rellena todos los campos";
//   } else if (reEmail.test(email.value) !== true) {
//     msg.innerText =
//       "Por favor inserte un correo correcto que contenga almenos un @";
//   } else {
//     msg.innerText = `Formulario enviado con éxito, ${name.value} ${email.value} `;
//   }
//   setTimeout(() => {
//     msg.innerText = "";
//   }, 3000);
// }

// function validation2(e) {
//   e.preventDefault();
//   if (password1 === password2) {
//     msg2.innerHTML = "Please repeat the same password";
//   }
//   setTimeout(() => {
//     msg.innerText = "";
//   }, 3000);
// }

btn.addEventListener("click", saveContacts);
