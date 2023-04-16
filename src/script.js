console.log('estoy en la consola js');
//Función para vista inicial
function comenzar() {
  document.getElementById("inicio").style.display = "block";
  document.getElementById("q1").style.display = "none";
  document.getElementById("q2").style.display = "none";
  document.getElementById("q3").style.display = "none";
  document.getElementById("vistaFinal").style.display = "none";
}
comenzar()

let botonInicial = document.getElementById("botonInicial")

botonInicial.addEventListener("click", jugar);
botonInicial.addEventListener("click", saludar);


function jugar() {
  document.getElementById("inicio").style.display = "none";
  document.getElementById("q1").style.display = "block";
  document.getElementById("q2").style.display = "none";
  document.getElementById("q3").style.display = "none";
  document.getElementById("vistaFinal").style.display = "none";
}

function saludar() {
  let nombre = document.getElementById("txtNombre").value;
  document.getElementById("salida").innerHTML = "Hola, " + nombre;
}
//Vista segunda pantalla
let p1 = document.getElementById("p1")

p1.addEventListener("click", displayRadioValue);
p1.addEventListener("click", vistaq1);

function displayRadioValue() {
  let pregunta1 = document.getElementById("ANCASH").checked;
  if (pregunta1 === true) {
    alert("bien!")
  } else {
    alert("Upss, la respuesta es Ancash")
  }
}

function vistaq1() {
  //ocultamos las pantallas y activamos la inicial
  document.getElementById("inicio").style.display = "none";
  document.getElementById("q1").style.display = "none";
  document.getElementById("q2").style.display = "block";
  document.getElementById("q3").style.display = "none";
  document.getElementById("vistaFinal").style.display = "none"
}
//Vista tercera pantalla
let p2 = document.getElementById("p2")

p2.addEventListener("click", displayRadioValue2);
p2.addEventListener("click", vistaq2);

function displayRadioValue2() {
  let pregunta2 = document.getElementById("SAN MARTIN").checked;
  if (pregunta2 === true) {
    alert("bien!")
  } else {
    alert("Upss, la respuesta es San Martín")
  }
}
function vistaq2() {
  document.getElementById("inicio").style.display = "none";
  document.getElementById("q1").style.display = "none";
  document.getElementById("q2").style.display = "none";
  document.getElementById("q3").style.display = "block";
  document.getElementById("vistaFinal").style.display = "none"
}
//Vista cuarta pantalla
let p3 = document.getElementById("p3")

p3.addEventListener("click", displayRadioValue3);
p3.addEventListener("click", vistaq3);

function displayRadioValue3() {
  let pregunta3 = document.getElementById("JUNIN").checked;
  if (pregunta3 === true) {
    alert("bien!")
  } else {
    alert("Upss, la respuesta es Junín")
  }
}
function vistaq3() {
  document.getElementById("inicio").style.display = "none";
  document.getElementById("q1").style.display = "none";
  document.getElementById("q2").style.display = "none";
  document.getElementById("q3").style.display = "none";
  document.getElementById("vistaFinal").style.display = "block"
}

//Vista quinta pantalla y retorno a la pantalla inicial
let botonFinal = document.getElementById("botonFinal")

botonFinal.addEventListener("click", volverJugar);
function volverJugar() {
  document.getElementById("inicio").style.display = "block";
  document.getElementById("q1").style.display = "none";
  document.getElementById("q2").style.display = "none";
  document.getElementById("q3").style.display = "none";
  document.getElementById("vistaFinal").style.display = "none"
}
