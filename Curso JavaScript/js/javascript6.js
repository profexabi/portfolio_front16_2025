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