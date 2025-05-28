///////////////////
// JavaScript I //

/* JavaScript es el lenguaje de programacion rey de la web
 Puede ejecutarse en cualquier navegador web, sin tener que instalar nada adicional
 Lo usaremos tanto en frontend como en backend
*/

let nombreArchivo1 = "javascript1.js";

console.log(`Hola, soy un mensaje por consola 
    desde ${nombreArchivo1}`);

/* Tipos de datos primitivos

    - Numeros: valores numericos
    - Cadena: Texto encerrado entre comillas simples o dobles
    - Booleanos: true o false
    - null: Representa un valor incencionalmente vacio
    - undefined: Una variable declarada pero que no tiene valor
*/

let numero = 42;
let texto = "Hola";
let verdadero = true;
let vacio = null;
let indefinido;

console.log(numero);
console.log(texto);
console.log(verdadero);
console.log(vacio);
console.log(indefinido);


// Operadores en JavaScript: https://www.w3schools.com/js/js_operators.asp

// Declaracion historica de variables
var nombreVariable = "Soy una variable historica, ya no me usan";

// Declaracion moderna de variables, let y const
let variableLet = "Soy una variable moderna, puedo ser cambiada y reasignada";
const variableConst = "Soy una variable constante";
const pi = 3.1416;

let nombreArchivo2 = "javascript2.js";

// Concatenando con el operador +
// console.log('Soy un mensaje desde el archivo ' + nombreArchivo);

// Template literals, usamos backticks o comillas invertidas ``
console.log(`Soy un mensaje desde el archivo ${nombreArchivo2}`);