let firstName = document.getElementById("fname");
let email = document.getElementById("email");
let text = document.getElementById("subject");
let btn = document.getElementById("btn");
let dataUsers = document.getElementById("datos");
btn.addEventListener("click", addUser);

function addUser() {
  var usersDb = localStorage.getItem("users");
  let database = JSON.parse(usersDb);
  if (database == null) {
    database = [];
  }
  let user = {
    firstName: firstName.value,
    email: email.value,
    text: text.value,
  };
  database.push(user);
  localStorage.setItem("users", JSON.stringify(database));
  drawLocalStorage();
}

function drawLocalStorage() {
  let usersDb = localStorage.getItem("users");
  datos.innerHTML = "";

  if (usersDb != null) {
    let database = JSON.parse(usersDb);
    for (let i = 0; i < database.length; i++) {
      datos.innerHTML += `<div>
        <p>${database[i].firstName}</p>
        <p>${database[i].email}</p>
        <p>${database[i].text}</p>
        </div>`;
    }
  }
}

drawLocalStorage();
function goingtoDelete() {
  localStorage.clear();
  drawLocalStorage();
}
//console.log("ee",datos)

// const showusers = () => {
//     let data = JSON.parse(localStorage.getItem("users"));
//     for (let i = 0; i < data.length; i++) {
//         usuarios.innerHTML += `<p>${data[i]}</p>`
//     }
// }
// const x = document.forms["frm1"];
// let text2 = "";
// for (let i = 0; i < x.length; i++) {
//   text2 += x.elements[i].value + "<br>";
// }
// document.getElementById("usuario").innerHTML = text;
