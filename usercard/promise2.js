const divEle = document.querySelector(".card-container");

const getUserCard = function (id) {
  fetch(`https://dummyjson.com/users/${id}`)
    .then((response) => {
      if (response.status === 404) return;
      return response.json();
    })
    .then((user) => {
      console.log(user);
      displayUser(user, "", "beforeend");

      if (id - 1 < 0) {
        return;
      }

      return fetch(`https://dummyjson.com/users/${id - 1}`);
    })
    .then((response) => {
      if (response.status === 404) return;
      return response.json();
    })
    .then((user) => {
      console.log(user);
      displayUser(user, "other", "afterbegin");
    })
    .catch((error) => {
      console.log("Error fetching user:", error);
    });
};

function displayUser(user, className = "", pos) {
  const card = `<div class="user-card ${className}">
    <img src=${user.image} alt="Profile Image" />
    <h3>${user.firstName}</h3>
    <h3>${user.lastName}</h3>
    <p class="email">${user.email}</p>
    <button class="btn">View Profile</button>
  </div>`;
  console.log(card);

  divEle.insertAdjacentHTML(pos, card);
}

getUserCard(1);
