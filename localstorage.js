let firstName = document.getElementById("fname");
let email = document.getElementById("email");
let text = document.getElementById("subject");
let btn = document.getElementById("btn");
let dataUsers = document.getElementById("datos");
btn.addEventListener("click", addUser); // when you click here do this funciton

function addUser() {
  var usersDb = localStorage.getItem("users"); //traemos la informacion del local storage a un var
  let database = JSON.parse(usersDb);   //creating var to store. necessary step to translate to js
  if (database == null) {
    database = [];
  }
  let user = {                 //declaring the key (object)
    firstName: firstName.value,
    email: email.value,
    text: text.value,
  };
  database.push(user);
  localStorage.setItem("users", JSON.stringify(database));
  drawLocalStorage();
}

function drawLocalStorage() {
  let usersDb = localStorage.getItem("users"); //nos traemos la informacion del local storage
  datos.innerHTML = ""; // limpia lo que pintamos si se vuelve a ejecutar la funcion

  if (usersDb != null) { // si hay algo lo pintas sino no no se pinta
    let database = JSON.parse(usersDb);// traducir a javascript
    for (let i = 0; i < database.length; i++) { // hacemos un bucle para pintar los datos de cada objeto
      //del array
      datos.innerHTML +=`<div>
        <p>${database[i].firstName}</p>
        <p>${database[i].email}</p>
        <p>${database[i].text}</p>
        <button onclick="removeItemFromArr('${database[i].email}')">X</button> 
        </div>`;
    }// cuando cliques el boton ejecutara la funcion removeItemFromArr y en la funcion le pasamos
    //el correo del usuario que queremos borrar
  }
}

drawLocalStorage();
function goingtoDelete() {
  localStorage.clear();
  drawLocalStorage();
}

function deleteUser() {
  localStorage.clear(users[i])
}

function removeItemFromArr (email) {
  let usersDb = localStorage.getItem("users");// nos traemos del local storage los usuarios
  let database = JSON.parse(usersDb); // traduce json a javascript
  let i = database.indexOf(email);// sacamos la posicion del usuario que queremos borrar
  database.splice( i, 1 ); // quitamos el usuario seleccionado del array
  localStorage.setItem("users",JSON.stringify(database))// volvemos a guardar los usuarios
  // sin el que hemos eliminado y lo traducimos javascript a json
  drawLocalStorage(); // volvemos a pintar los datos actualizados (como refrescar la pagina)
}
