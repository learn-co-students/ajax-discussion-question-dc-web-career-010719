document.addEventListener("DOMContentLoaded", () => {
  //add event listener to DOM after it has finished loading
  console.log("CONTENT LOADED!")
  document.querySelector("button").addEventListener("click", getUser)

})

function getUser() {
  //send get request to api for a new user
  fetch('https://randomuser.me/api/')
  .then(res => res.json())
  .then(json => appendUser(json))
}

function appendUser(json) {
  //extract person data from first index of returned json array and save as variable
  const person = json.results[0]
  
  //populate DOM with person details
  document.querySelector("#profile_picture").src = person.picture.large
  document.querySelector("#fullname").innerText = `${person.name["title"]} ${person.name["first"]} ${person.name["last"]}`
  document.querySelector("#email").innerText = person.email
  document.querySelector("#street").innerText = person.location.street
  document.querySelector("#city").innerText = person.location.city
  document.querySelector("#phone").innerText = person.phone
  document.querySelector("#state").innerText = person.location.state
  document.querySelector("#cell").innerText = person.cell
  document.querySelector("#date_of_birth").innerText = new Date(person.dob.date) //convert date to a readable format
  document.querySelector("#postcode").innerText = person.location.postcode 
}