# Curso JavaScript IFTS 16

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