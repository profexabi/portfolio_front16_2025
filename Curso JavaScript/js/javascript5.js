///////////////////
// JavaScript V //
// Objetos, clases y objetos globales. Almacenamiento persistente, e iteraciones

// Un array es una lista ORDENADA de valores
let personaArray = ["juan", 30, "desarrollador"];

// Un objeto es una coleccion de pares clave-valor
let personaObj = {
    nombre: "Juan",
    edad: 30,
    ocupacion: "desarrollador web"
};

console.log(personaObj.ocupacion);

setTimeout(() => console.log("Hola despues de 2 segundos"), 2000)
// setInterval

console.log(window.location.href);

localStorage.setItem("nombre", "Jorge");

console.log(localStorage.getItem("nombre"));