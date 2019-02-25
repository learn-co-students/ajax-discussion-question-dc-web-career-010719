const fullname = document.getElementById("fullname");
const email = document.getElementById("email");
const street = document.getElementById("street");
const city = document.getElementById("city");
const state = document.getElementById("state");
const postcode = document.getElementById("postcode");
const phone = document.getElementById("phone");
const cell = document.getElementById("cell");
const dob = document.getElementById("date_of_birth");
const button = document.querySelector("button")

document.addEventListener("DOMContentLoaded", () => {
  button.addEventListener("click", getUser)
});

function getUser() {
  fetch("https://randomuser.me/api/")
  .then(res => res.json())
  .then(userData => displayUser(userData))
}

function cap(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function capEach(infoString) {
  return infoString.split(' ').map(word => cap(word)).join(' ')
}

function displayUser(data) {
  let userInfo = data.results[0]
  fullname.innerText = `${cap(userInfo.name.title)} ${cap(userInfo.name.first)} ${cap(userInfo.name.last)}`
  email.innerText = userInfo.email
  street.innerText = capEach(userInfo.location.street)
  city.innerText = capEach(userInfo.location.city)
  state.innerText = capEach(userInfo.location.state)
  postcode.innerText = userInfo.location.postcode
  phone.innerText = userInfo.phone
  cell.innerText = userInfo.cell
  dob.innerText = userInfo.dob.date.slice(0,10)
}
