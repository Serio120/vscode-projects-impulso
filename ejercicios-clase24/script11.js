function exitoCallback(resultado) {
  console.log("Archivo creado en la ruta " + resultado);
}
function falloCallback(error) {
  console.log("Error generando archivo " + error);
}

// Asumiendo que 'crearArchivoAsync' y 'configuracion' están definidos en otro lugar o son placeholders.
// Para que este código sea ejecutable, necesitaríamos una implementación de 'crearArchivoAsync'
// y una definición de 'configuracion'.
// crearArchivoAsync(configuracion, exitoCallback, falloCallback);

// const promesa = crearArchivoAsync(configuracion);
// promesa.then(exitoCallback, falloCallback);

//crearArchivoAsync(configuracion).then(exitoCallback, falloCallback);


///Ejecutar en consola///////
////// node script11.test.js///////