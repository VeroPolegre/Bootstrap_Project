const cardContainer = document.getElementById("card-container");

const users = JSON.parse(localStorage.getItem("users")) || [];
function showUsers() {
  users.forEach((user) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `<div class="card-body">
    <h5 class="card-title">${user.userName}</h5>
    <h6 class="card-subtitle mb-2 text-muted">${user.email}</h6>
  </div>`;
    cardContainer.appendChild(card);
  });
}

showUsers();
