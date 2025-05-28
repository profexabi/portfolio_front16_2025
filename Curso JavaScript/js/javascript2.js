////////////////////
// JavaScript II //
// Control de flujo, estructuras de control, condicionales y bucles

/* El control de flujo en JavaScript determina como se ejecutan las instrucciones de un programa

    Condicionales
    - if, else if, else
    - Operadores logicos &&, ||, !
    - Operadores ternarios

    Bucles
    - for, while, do..while

    Control de flujo avanzado
    - break
    - continue
    - switch
*/

/* Condicional if

    if (condicion) {
        // Codigo que se ejecuta si la condicion es verdadera
    }
*/

let numero = 0;

if (numero > 0) { // Si la condicion 1 es verdadera
    console.log("El numero es positivo");

} else if( numero < 0 ){ // Si la condicion 2 es verdadera
    console.log("El numero es negativo");

} else { // Si ninguna condicion es verdadera
    console.log("El numero es cero")
}

let hora = 14;

// Verificamos si es mañana, tarde o noche
if( hora < 12 ) {
    console.log("Es de mañana");
} else if (hora >= 12 && hora < 18) {
    console.log("Es de tarde");
} else {
    console.log("Es de noche");
}


/////////////////////////
// Operadores logicos //
/*
AND (&&): Ambas condiciones deben ser verdaderas

OR (||): Al menos UNA condicion debe ser verdadera

NOT (!): Niega el valor de una condicion. El operador de negacion logica
*/

let edad = 25;
let tieneLicencia = true;

if( edad >= 18 && tieneLicencia) {
    console.log("Puede manejar");
}

if( edad < 18 || !tieneLicencia) {
    console.log("No puede manejar!");
}

/* Bloque EXTRA: Valores truthy y falsy en JavaScript

En JavaScript, los valores verdaderos y falsos se utilizan para determinar el contexto booleano de las expresiones sin convertirlas explícitamente en booleanas mediante la función `Boolean()` o la doble negación (`!!`). Un valor verdadero es cualquier valor que se evalúe como verdadero en un contexto booleano, mientras que un valor falso se evalúa como falso.

Los siguientes valores se consideran falsos en JavaScript:
- `false` (falso)
- `0` (cero)
- `-0` (cero negativo)
- `""` (cadena vacía)
- nulo
- `undefined` (indefinido)
- NaN` (no es un número)
- `0n` (cero BigInt)

Todos los demás valores se consideran verdaderos, incluidos los números distintos de cero, las cadenas no vacías, los objetos, las matrices y cualquier otro valor no falso.

Cuando JavaScript evalúa una expresión en un contexto booleano, como dentro de una sentencia `if`, convierte implícitamente el valor en verdadero o falso en función de si es verdadero o falso Este concepto es especialmente útil en sentencias condicionales, ya que permite un código más conciso y legible

Por ejemplo, una cadena vacía es falsa, por lo que el siguiente código no ejecutará el bloque dentro de la sentencia `if`:
``javascript
let usuario = "";
if (usuario) {
  console.log(«El usuario está presente»);
}
```
Sin embargo, una cadena no vacía o cualquier otro valor verdadero ejecutará el bloque dentro de la sentencia `if`:
```javascript
let usuario = «Juan Pérez»;
if (usuario) {
  console.log(«Usuario presente»);
}
```
*/

// Ejemplo de toggle con el operador ! (funcion interruptor)

let estado = true;

function alternarEstado() {
    estado = !estado;
    console.log(`Nuevo estado: ${estado}`);
}

alternarEstado(); // false
alternarEstado(); // true
alternarEstado(); // false
alternarEstado(); // true

// Verificamos con !, si una variable es falsy
let valor1 = 0; // Numero 0
let valor2 = "Hola"; // Cadena no vacia

console.log(!valor1);
console.log(!valor2);


////////////////////////
// Operador ternario //
// Es una forma mas compacta de escribir una condicion if..else
let edad2 = 20;
let mensaje = (edad >= 18) ? "Sos mayor de edad!" : "Sos menor de edad";



////////////////
// Bucle for // 
/*
    for(inicializacion; condicion; incremento) {
        // Codigo a ejecutar en cada iteracion
    }
*/

for(let i = 0; i < 5; i++) {
    console.log(`Iteracion: ${i}`);
}

console.log("Otro mensaje");


for(let i = 0; i < 3; i++) {
 
    for(let j = 0; j < 3; j++) {
        console.log(i + " - " + j);
    }

}

console.log("Otro mensaje 2");

// EJERCICIO PROPUESTO 1: Hagan una tabla de multiplicar del 1 al 5 (y luego del 1 al 10)
// Tabla del 1
// 1 x 1 = 1
// ...


//////////////////
// Bucle while //
/* Ejecuta el bloque de codigo mientras la condicion sea verdadera

    while (condicion) {
        // Codigo a ejecutar mientras la condicion sea verdadera
    }
*/

let x = 0;

while(x < 5) {
    console.log(`Iteracion while: ${x}`);
    x++;
}



/////////////////////
// Bucle do while //

/* Similar al bucle while, pero la condicion se evalua despues de ejecutarse el bloque de codigo

    do {
        // Codigo a ejecutar
    } while (condicion);
*/

let contador = 0;

do {
    console.log(`Iteracion do...while: ${contador}`);
    contador++;
} while (contador < 5);


////////////////////////////////
// Control de flujo avanzado //

// Con break salimos inmediatamente del bucle o de la estructura de control
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break; // Salimos del bucle cuando i sea 5
    }
    console.log(`Iteracion: ${i}`);
}

//  Con continue salta a la siguiente iteracion del bucle omitiendo el codigo restante para esa iteracion
for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        continue; // Saltamos la iteracion cuando i sea par
    }

    console.log(`Numero impar: ${i}`);
}


/////////////
// Switch //

/* Switch es otra estructura de control que permite evaluar una expresion y ejecutar el bloque de codigo correspondiente al caso que sea

    switch (expresion) {
        case valor1:
            // Se ejecuta este codigo si la expresion es igual a valor1
            break;

        case valor2:
            // Se ejecuta este codigo si la expresion es igual a valor2
            break;

        default:
            // codigo que se ejecuta si ninguno de los casos coincide
    }

*/

// Usamos una variable con camelCase
// Parsear implica convertir datos, en este caso, prompt devuelve un string y queremos convertirlo a entero (int)
let diaSemana = parseInt(prompt("Escribi el dia de la semana"));

console.log(typeof diaSemana); // Con typeof tengo el tipo de dato


// Verificamos con switch que dia de la semana es
switch (diaSemana) {

    case 1:
        console.log("Es lunes")
        break;

    case 2:
        console.log("Es martes")
        break;

    case 3:
        console.log("Miercoles")
        break;

    case 4:
        console.log("Es jueves")
        break;

    case 5:
        console.log("Es viernes")
        break;

    default:
        console.log("Fin de semana!!!");
}

// EJERCICIO PROPUESTO 2: Hagan una calculadora por consola
// Va a pedir datos al usuario con un prompt
// Hara la conversion a entero del valor de ese prompt
// Con condicionales desechara valores que no sea numeros y que no sean positivos
// Devolvera el resultado de la suma, resta, multiplicacion o division de dos numeros