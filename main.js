const myForm = document.getElementById("my-form");

const firstName = document.getElementById("userName");
const email = document.getElementById("email");

function saveContacts(e) {
  e.preventDefault();
  const person = {
    name: userName.value,
    email: email.value,
  };
  contacts.push(person);
  localStorage.setItem("contacts", JSON.stringify(contacts));
  let persons = JSON.parse(localStorage.getItem("contacts"));
}

myForm.addEventListener("submit", onSubmit);
