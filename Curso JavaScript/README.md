# Curso JavaScript IFTS 16

---

# JavaScript VI
```html
<!DOCTYPE html>
<html>
    <head>
        <title>Mi página</title>
    </head>
    <body>
        <h1>Bienvenidos</h1>
        <p>Este es un párrafo</p>
    </body>
</html>
<!-- 
Diagrama de arbol del DOM, para ver como sera representado este HTML

document
    html
        - head
            - title
    body
        - h1
        - p
 
-->
```

```js
///////////////////
// JavaScript VI //
// Manipulacion del DOM en JavaScript y events

/////////////////////////////////////////
// Seleccionando elementos en el DOM  //

/* getElementById()
    - Metodo que selecciona un unico elemento por su ID
    - Solo selecciona el primer elemento que coincida con el ID
*/

let titulo1 = document.getElementById("titulo");

console.log(titulo1)

/* querySelector() y querySelectorAll()

    - querySelector() -> Selecciona el PRIMER elemento que coincida con un selector CSS (por clase, id, nombre de etiqueta)

    - querySelectorAll() -> Selecciona TODOS los elementos que coincidan con el selector CSS
*/

let parrafos = document.querySelectorAll(".mensaje");

console.log(parrafos); // Nos devuelve una NodeList (similar a un array) iterable

console.log(parrafos[0]); // Seleccionamos el primer elemento

parrafos.forEach(parrafo => { // Iteramos nuestro array que contiene todas las etiquetas con la class mensaje
    console.log(parrafo.textContent)
});


//////////////////////////////////////
// Modificar contenido y atributos //
/*
    - textContent -> Modificar el texto dentro de un elemento
    - innerHTML -> Modificar el contenido HTML dentro de un elemento (con acceso a etiquetas)
    - setAttribute -> Modificar los atributos de un elmento
    - style -> cambiar el estilo CSS en linea de un elemento
*/

let parrafoSuelto = document.getElementById("parrafo");

// Cambiamos el contenido del texto
parrafoSuelto.textContent = "Este es un nuevo texto desde JavaScript!";

// Modificamos el contenido HTML
parrafoSuelto.innerHTML = `
    <strong>Soy un texto en negrita!!</strong>
`;

// Modificacion de atributos
let boton = document.getElementById("boton");

// Cambiar el atributo id
boton.setAttribute("id", "nuevoId");

// Cambiar estilo
boton.style.backgroundColor = "green";

/* Diferencias entre textContent e innerHMTL

- textContent: Reemplaza el texto interno, mas rapido y mas seguro. Solo trabaja con el texto plano del nodo.
Usemos textContent cuando solo necesitemos texto plano y querramos asegurar la maxima seguridad

- innerHTML: Inserta HTML, incluye etiquetas, un toque más lento y puede ser inseguro al estar la posibilidad de ejecutar script
Usemos innerHTML cuando necesitemos insertar o manipular HTML readl dentro del DOM


A nivel seguridad
- innerHTML puede ejecutar scripts maliciosos usando datos del usuario sin validar

- createElement y appendChild no interpretan HTML y evitan posibles inyecciones de codigo
*/

let container = document.getElementById("container");

// Usando innerHTML
container.innerHTML = `
    <p>Hola mundo</p>
`;

// Usando createElement + appendChild
let p = document.createElement("p");
p.textContent = "Hola mundo desde createElement + textContent + appendChild";

let contenedor = document.getElementById("contenedor");
contenedor.appendChild(p);


//////////////
// Eventos //
/*
Los eventos permiten a los desarrolladores detectar interacciones del usuario con la pagina web, como hacer click en un boton, mover el mouse, escribir en un campo de text, etc

Tipicos eventos comunes
- click: cuando el usuario hace click en un elemento
- mouseover: cuando pasamos el mouse sobre un elemento
- input: cuando el usuario introduce texto en un campo
- submit: cuando enviamos un formulario


Tipos de eventos
• Eventos de mouse: click , dblclick , mouseover , mouseout , mousemove
• Eventos de teclado: keydown , keyup , keypress
• Eventos de formulario: submit , change , input , focus
• Eventos de ventana: resize , scroll , load , unload
*/

let boton1 = document.getElementById("boton1");

// Le asignamos a nuestro elemento boton1, un escuchador de eventos con addEventListener
boton1.addEventListener("click", function() {
    console.log("Hiciste click en el boton!");
});


// Evento teclado
let input1 = document.getElementById("input1");

// Le asignamos a nustro elemento input un evento de pulsacion de tecla
input1.addEventListener("keydown", function(event) {
    console.log(`Tecla presionada: ${event.key}`);
});

// Entendiendo la propagacion de eventos
let padre = document.getElementById("padre");
let hijo = document.getElementById("hijo");

// Escucho el click en el div padre
padre.addEventListener("click", function() {
    console.log("Se hizo click en el div padre");
});

hijo.addEventListener("click", function(event) {
    event.stopPropagation(); // Para evitar que el evento de un elemento hijo active al del padre, usamos stopPropagation
    console.log("Se hizo click en el boton hijo")
});



// Para evitar el envio por defecto de los formularios HTML
let formulario = document.getElementById("formulario");

// event.preventDefault(); // Este metodo evita el comportamiento predeterminado al enviar info de un form (submit)
formulario.addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar que el formulario se envie
    console.log("El formulario no se envio!!");
})
```

---

# JavaScript III
```js
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
```

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