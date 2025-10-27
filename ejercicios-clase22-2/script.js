console.log("----- Ejercicio -----");

// Obtener todos los enlaces de la página
const enlaces = document.getElementsByTagName("a");
console.log("Número de enlaces de la página:", enlaces.length);

// Dirección a la que enlaza el penúltimo enlace
if (enlaces.length >= 2) {
  const penultimo = enlaces[enlaces.length - 2];
  console.log("Dirección del penúltimo enlace:", penultimo.href);
}

// Número de enlaces que enlazan a "http://prueba"
let contadorPrueba = 0;
for (let i = 0; i < enlaces.length; i++) {
  if (enlaces[i].href === "http://prueba/") { // Hay que poner la barra diagonal al final si es necesario
    contadorPrueba++;
  }
}
console.log("Número de enlaces que enlazan a 'http://prueba':", contadorPrueba);

// Número de enlaces del tercer párrafo
const parrafos = document.getElementsByTagName("p");
if (parrafos.length >= 3) {
  const tercerParrafo = parrafos[2];
  const enlacesTercerParrafo = tercerParrafo.getElementsByTagName("a");
  console.log("Número de enlaces del tercer párrafo:", enlacesTercerParrafo.length);
}

// Otras formas de hacerlo
let NenlacesP3 = document.getElementsByTagName("p")[2].getElementsByTagName("a").length;
console.log("Número de enlaces del tercer párrafo (otra forma):", NenlacesP3);

