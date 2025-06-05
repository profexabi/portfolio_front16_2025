/////////////////////
// JavaScript III //
// Scope y ambito, hoisting, funciones, tipos de funciones, parametros y argumentos y funciones flecha

////////////
// Scope //

// El ambito o contexto en el cual las variables y funciones son accesibles

// Global Scope o Ambito global
// Las variables declaradas fuera de cualquier funcion o bloque {} tienen alcance global
var globalVar = "Soy global";

function mostrarGlobal() {
    console.log(globalVar);
}

mostrarGlobal();

// Local Scope o Ambito de funcion
// Las variables declaradas dentro de una funcion son accesibles solamente DENTRO de esa funcion
function mostrarLocal() {
    var localVar = "Soy local";
    console.log(localVar);
}

mostrarLocal();
// console.log(localVar); //Uncaught ReferenceError: localVar is not defined

// Block Scope o Ambito de bloque
// A partir de ES6 (JavaScript 2015), tenemos nuevas variables, let y const con alcance de bloque, por lo que solo son accesibles dentro de las {}, que pueden estar en un if, un for, etc
if(true) {
    let bloqueLet = "Soy de bloque";
    console.log(bloqueLet);
}

// console.log(bloqueLet); // Uncaught ReferenceError: bloqueLet is not defined


// Diferencias entre Ambito de Funcion y Ambito de Bloque

// Ejemplo ambito de funcion, las variables declaradas con var, tienen ese ambito de funcion, entonces no estan limitadas por bloques dentro de la funcion
function scopeFunction() {
    if(true) {
        var funcionVar = "Soy de funcion"
    }

    console.log(funcionVar);
}

scopeFunction();



// Ambito de bloque, las variabels declaradas con let y const estan SI limitadas por el bloque en el que se declaran
function scopeBloque() {
    if(true) {
        let bloqueLet = "Soy de bloque";
        const bloqueConst = "Soy de bloque y constante";
    }

    // console.log(bloqueLet); // Uncaught ReferenceError: bloqueLet is not defined
    //console.log(bloqueConst); // Uncaught ReferenceError: bloqueConst is not defined
}

scopeBloque();


/*
///////////////
// Hoisting //

Hoisting o Elevacion se refiere a que las declaraciones y funciones en JavaScript se mueven hacia arriba en su contexto de ejecucion (scope). SOLO las variabels son eleevadas, NO las inicializaciones

- var:          se elevan y se inicializan con undefined
- let y const:  Se elevan pero NO se inicilizan, lo que lleva a un error
*/
console.log(elevadaVar);
var elevadaVar = "Soy elevada!";
console.log(elevadaVar);

// console.log(elevadaLet); // Uncaught ReferenceError: Cannot access 'elevadaLet' before initialization
let elevadaLet = "Soy elevada tambien";
console.log(elevadaLet);


/* Diferencias entre variables en javascript

- var: De ambito globhal o ambito de funcion, puede ser redeclarado y reasignado, tiene elevacion a nivel de funcion, por lo que podemos utilizarla antes de la declaracion

- let: Ambito de bloque -> {}, se puede volver a declarar pero no reasignar, tiene elevacion a nivel de bloque, por lo que no podemos acceder a la variable antes de declararla

- const: Ambito de bloque -> {} (dentro de un bucle, sentencia condicional o funcion), no se puede volver a declarar ni reasignar, tiene elevacion a nivel de bloque, por lo que no podemos acceder a la variable antes de declararla
*/

// const para variables de solo lectura, como objetos inmutables o valores constantes
const PI = 3.1416;

// let para variables que puedan cambiar con el tiempo
let contador = 0;
contador++;
console.log(contador);

// var no se recomienda


//////////////////////////////
// Funciones en JavaScript //

// Las funciones son simplemente bloques de codigo reutilizables, por lo que podremos usar un mismo codigo multiples veces

// Funcion declarada
// La forma mas comun de declarar una funcion en JavaScript, usamos la palabra clave funcion
function sumarSimple() {
    let resultado = 5 + 3;
    console.log(`El resultado es: ${resultado}`);
}
sumarSimple();

// Funciones con parametros
// Los parametros son variabels que definimos en la declaracion de la funcion
function sumar(a, b) { 
    let resultado = a + b;
    return a + b; // La palabra clave return retorna un valor
}

// Los argumentos son los valores que le pasamos a la funcion cuando la llamamos
sumar(5, 3); // Esto no se va a ver, simplemente va a retornar el valor y no se vera en ningun lado
console.log(sumar(5, 3));

// Los parametros pueden tener valores predeterminados en caso de no pasarle un argumento
function saludar(nombre = "maestro") { 
    console.log(`Como le va ${nombre}`);
}

saludar("Veronica"); // Como le va Veronica
saludar(); // Como le va maestro


// Funciones con multiples argumentos
function sumarTres(a, b, c) {
    return a + b + c;
}

let resultado = sumarTres(1, 2, 3);
console.log(resultado)


// Revisar los tipos de funciones y los tipos de funciones flecha en la grabacion del video