const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('button').addEventListener('click', fetchUser)
});

function fetchUser(e) {
  fetch('https://randomuser.me/api/')
    .then( res => res.json() )
    .then(displayUser)
}

function displayUser(user) {
  document.querySelector('img#profile_picture').src = user.picture.large

  document.querySelector('#fullname').innerText = `${user.name.first} ${user.name.last}`
  document.querySelector('#email').innerText = user.email;

  document.querySelector('#street').innerText = user.location.street;
  document.querySelector('#city').innerText = user.location.city;
  document.querySelector('#state').innerText = user.location.state;
  document.querySelector('#postcode').innerText = user.location.postcode;
  
  document.querySelector('#phone').innerText = user.phone;
  document.querySelector('#cell').innerText = user.cell;
  
  
  document.querySelector('#date_of_birth').innerText = user.dob.date;
}
