////////////////////
// JavaScript IV //
// Introduccion a arrays. Metodos de strings y arrays


////////////
// Array //
// Un array o arreglo es una lista ordenada de elementos, donde cada elemento tiene una posicion o indice.
// Dentro de un array podemos contener cualquier tipo de dato (numeros, cadenas, booleanos, otros arrays, objetos, funciones, etc)

let frutas = ["Banana", "Naranja", "Pera"];

// Recuerden que usamos notacion 0
console.log(frutas[0]);
console.log(frutas[1]);

console.log(frutas);
console.log(frutas.length);

for(let i = 0; i < frutas.length; i++) {
    console.log(`El valor ${i} de este array es ${frutas[i]}`);
}


/////////////////////////////////////////
// Metodos de manipulacion de strings //
let texto = "Esta clase es BASTANTE densa";
console.log(texto.toUpperCase());
console.log(texto.toLowerCase());


let nuevoTexto = texto.replace("densa", "copada!");
console.log(nuevoTexto);


// Metodos de strings: https://drive.google.com/drive/u/1/folders/1QJtNkPRSPVN4S2WCuwoeNcxrZbZkPH0y
// Metodos de arrays: https://drive.google.com/drive/u/1/folders/1QJtNkPRSPVN4S2WCuwoeNcxrZbZkPH0y