// const fullname = document.getElementById("fullname");
// console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");

  function fetchUser(){
    fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(json => renderUser(json))
  }
fetchUser()

function renderUser(json){
  let firstName = json['results'][0]['name']['first']
  let lastName = json['results'][0]['name']['last']
  let title = json['results'][0]['name']['title']
  let fullName = title + ' ' + firstName + " " + lastName
  let email = json['results'][0]['email']
  let street = json['results'][0]['location']["street"]
  let city = json['results'][0]['location']["city"]

  nameField = document.querySelector("#fullname")
  nameField.innerHTML = fullName

  emailField = document.querySelector("#email")
  emailField.innerHTML = email

  streetField = document.querySelector("#street")
  streetField.innerHTML = street

  cityField = document.querySelector("#city")
  cityField.innerHTML = city

}



});
