const divEle = document.querySelector('.card-container');

const getUserCard = function (id) {
  const req = new XMLHttpRequest();

  req.open('GET', `https://dummyjson.com/users/${id}`);
  req.send();

  req.addEventListener('load', function () {
    console.log(this.responseText);
    const data = JSON.parse(this.responseText);
    console.log(data);
    const card = `<div class="user-card">
    <img src="https://robohash.o rg/hicveldicta.png" alt="Profile Image" />
        <h3>${data.firstName}</h3>
        <h3>${data.lastName}</h3>
        <p class="email">${data.email}</p>
        <button class="btn">View Profile</button></div>`;

    divEle.insertAdjacentHTML('beforeend', card);
  });
};

getUserCard(10);
getUserCard(2);
getUserCard(3);
// req.onload = () => {
//   if (req.readyState === req.DONE) {
//     if (req.status === 200) {
//       console.log(req.response);
//       console.log(req.responseText);
//     }
//   }
// };
