console.log("This is script 2");

let parrafos = document.getElementsByTagName("p"); // Nos devuelve una colección HTML, TagName nos permite seleccionar por etiquetas
//[p1, p2, p3]
console.log(parrafos);
console.log(parrafos[0]);

alert(parrafos[0]); // Nos muestra el elemento HTML completo
alert(parrafos[0].innerText); // Nos muestra solo el texto, sin etiquetas HTML
alert(parrafos[0].innerHTML); // Nos muestra el contenido HTML dentro de la etiqueta

parrafos[0].innerText = "Texto modificado desde JavaScript"; // Modificamos el texto del primer párrafo