const divEle = document.querySelector('.card-container');

const getUserCard = function (id) {
  const req = new XMLHttpRequest();
  req.open('GET', `https://dummyjson.com/users/${id}`);
  req.send();

  req.addEventListener('load', function () {
    console.log(req);
    if (req.status === 404) return;
    const user = JSON.parse(this.responseText);
    console.log(user);
    displayUser(user, '', 'beforeend');

    const req2 = new XMLHttpRequest();

    req2.open('GET', `https://dummyjson.com/users/${id - 1}`);
    req2.send();

    req2.addEventListener('load', function () {
      if (id - 1 > 0) {
        if (req2.status === 404) return;
        const user = JSON.parse(this.responseText);
        console.log(user);
        displayUser(user, 'other', 'afterbegin');
      } else {
        console.log('No Previous user exist');
      }
      if (id + 1 > 100) return;

      const req3 = new XMLHttpRequest();

      req3.open('GET', `https://dummyjson.com/users/${id + 1}`);
      req3.send();

      req3.addEventListener('load', function () {
        if (req3.status === 404) return;
        const user = JSON.parse(this.responseText);
        console.log(user);
        displayUser(user, 'other', 'beforeend');
      });
    });
  });
};

function displayUser(user, className = '', pos) {
  const card = `<div class="user-card ${className}">
    <img src=${user.image} alt="Profile Image" />
        <h3>${user.firstName}</h3>
        <h3>${user.lastName}</h3>
        <p class="email">${user.email}</p>
        <button class="btn">View Profile</button></div>`;
  console.log(card);

  divEle.insertAdjacentHTML(pos, card);
}
getUserCard(4);
