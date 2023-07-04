const divEle = document.querySelector(".card-container");

const getUserCard = function (id, callback) {
  const req = new XMLHttpRequest();

  req.open("GET", `https://dummyjson.com/users/${id}`);
  req.send();

  req.addEventListener("load", function () {
    if (req.status === 404) {
      throw "Invalid URL";
      return;
    }
    const user = null;
    console.log(user);
    if (user) {
      callback(null, user, function(){
        
      });
    } else {
      callback(new Error("User does not exist"));
    }
    // displayUser(user);
    // callback(id + 1, getnextuser);
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
document.addEventListener("DOMContentLoaded", function () {
  getUserCard(1, function (error, user) {
    if (error) {
      alert(error.message);
    } else {
      displayUser(user);
    }
  });
});

//getUserCard(1, getnextuser);
// getUserCard(2);
// getUserCard(3);

setTimeout(() => {
  console.log("Load after 1 sec");
  setTimeout(() => {
    console.log("Load after 2 sec");
    setTimeout(() => {
      console.log("Load after 3 sec");
      setTimeout(() => {
        console.log("Load after 4 sec");
        setTimeout(() => {
          console.log("Load after 5 sec");
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
