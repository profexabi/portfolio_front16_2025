# Curso JavaScript IFTS 16

---

# JavaScript II
```js
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
```

---

# JavaScript I
#### [Repasar operadores](https://www.w3schools.com/js/js_operators.asp)
```js
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
```

---

# Markdown

### [Guia Markdown 1](https://www.markdownguide.org/basic-syntax/)
### Machete Markdown
Markdown Cheat Sheet

Markdown is a simple way to write and format text using plain text symbols, making it easy to create nicely formatted text without complex coding Here are some key components and their syntax:

* **Headings**: Use the hash symbol (#) to create headings. The number of hashes corresponds to the heading level. For example, to create a heading level three, use three hashes (### Heading 3)

* **Bold and Italic**: To make text bold, surround it with double asterisks or double underscores (e.g., **bold text** or __bold text__). To italicize text, use single asterisks or underscores (e.g., *italic text* or _italic text_). For bold-italic text, use triple asterisks or underscores (e.g., ***bold-italic text*** or ___bold-italic text___)

* **Blockquotes**: To create a blockquote, add a greater-than symbol (>) in front of a paragraph (e.g., > Dorothy followed her through many of the beautiful rooms in her castle)

* **Lists**: Unordered lists can be created by starting each line with a hyphen (-), plus (+), or asterisk (*), followed by a space. Ordered lists can be created by starting each line with a number followed by a period (e.g., 1. First item)

* **Links**: To create a link, use square brackets for the display text followed by parentheses for the URL (e.g., [text](http://example.com))

* **Code**: To display inline code, enclose the text in backticks (`). For a code block, start each line with four spaces or use three backticks (```) before and after the code block. Optionally, specify the language after the opening backticks for syntax highlighting (e.g., ```python)

* **Tables**: Tables can be created using pipes (|) and hyphens (-) to define columns and rows. Align the values of the columns to the left, center, or right using the :--:, :--, or --: symbols, respectively

* **Horizontal Rules**: Create a horizontal rule by placing three or more hyphens, asterisks, or underscores on a line by themselves (e.g., ---)

* **Comments**: In Markdown, you can use HTML comments by enclosing them in `<!-- -->` tags

Markdown is widely used for creating formatted text in a simple and readable way, suitable for documentation, README files, and more

---

## Muestra markdown
### Se vienen cositas
- *Texto en cursiva*

- **Texto en negrita**
    - Sublista

### Bloque de codigo, mira que puedo hacer en javascript
```js
let titulo = document.getElementById("titulo");
titulo.innerHTML = `<ul>
                        <li>Lista 1</li>
                        <li>Lista 2</li>
                        <li>Lista 3</li>
                    </ul>
`;
```

```py
print("Hola mundo desde python")
```

![Silicon Valley](https://imgs.search.brave.com/RK9HxLlwHuTu6SHXK4xKQR2E3Cs9ieaInjvoB0FoOg4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5hbWJpdG8uY29t/L3AvZDA1MDk1MTZk/Mzg0YzBiY2UyYTZi/MzYwOTJlMzliOWEv/YWRqdW50b3MvMjM5/L2ltYWdlbmVzLzA0/MS83NzgvMDA0MTc3/ODE3NC82NTV4MzY4/L3NtYXJ0L3NpbGlj/b24tdmFsbGV5LXNl/cmllanBnLmpwZw)

```sh
sudo apt update && sudo apt upgrade
npm install --production
NODE_ENV=production node app
```

```js
console.log("test");
alert("hola!")
```

---

<h1>Curso JavaScript 2</h1>
<p align="center">
    <img src="https://imgs.search.brave.com/RK9HxLlwHuTu6SHXK4xKQR2E3Cs9ieaInjvoB0FoOg4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5hbWJpdG8uY29t/L3AvZDA1MDk1MTZk/Mzg0YzBiY2UyYTZi/MzYwOTJlMzliOWEv/YWRqdW50b3MvMjM5/L2ltYWdlbmVzLzA0/MS83NzgvMDA0MTc3/ODE3NC82NTV4MzY4/L3NtYXJ0L3NpbGlj/b24tdmFsbGV5LXNl/cmllanBnLmpwZw" alt="silicon valley">
</p>