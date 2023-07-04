const divEle = document.querySelector(".card-container");

const getUserCard = function (id, callback) {
  const req = new XMLHttpRequest();

  req.open("GET", `https://dummyjson.com/users/${id}`);
  req.send();

  req.addEventListener("load", function () {
    if (req.status === 404) return;
    const user = JSON.parse(this.responseText);
    console.log(user);

    displayUser(user);
    callback(id + 1);
  });
};

const getnextuser = function (id) {
  const req = new XMLHttpRequest();

  req.open("GET", `https://dummyjson.com/users/${id}`);
  req.send();

  req.addEventListener("load", function () {
    const user = JSON.parse(this.responseText);
    console.log(user);
    displayUser(user);
  });
};
function displayUser(user) {
  const card = `<div class="user-card">
    <img src=${user.image} alt="Profile Image" />
        <h3>${user.firstName}</h3>
        <h3>${user.lastName}</h3>
        <p class="email">${user.email}</p>
        <button class="btn">View Profile</button></div>`;

  divEle.insertAdjacentHTML("beforeend", card);
}
getUserCard(4, getnextuser);
// getUserCard(2);
// getUserCard(3);
