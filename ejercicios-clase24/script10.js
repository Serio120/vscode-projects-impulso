// Se declara una matriz (array de arrays) con diferentes tipos de datos.
var matriz = [
  [1, "Hola", 3],
  [4, 4, 4],
  [5, "Adios", 5],
];

// Esta función comprueba si alguno de los argumentos pasados es un string.
const tieneString = (...fila) => {
  // Usa el operador 'rest' para aceptar un número indefinido de argumentos como un array llamado 'fila'.
  let r = false; // Se inicializa una variable 'r' a 'false'. Esta variable actuará como bandera.
  // Se itera sobre cada 'element' en el array 'fila'.
  fila.forEach((element) => {
    // Para cada elemento, se comprueba si el tipo de dato es 'string'.
    // La expresión 'r || typeof element == "string"' hará que 'r' se vuelva 'true' si encuentra un string,
    // y permanecerá 'true' durante el resto de la iteración.
    r = r || typeof element == "string";
  });
  // La función devuelve 'true' si se encontró al menos un string, y 'false' en caso contrario.
  return r;
};

// Estas líneas muestran en la consola el resultado de llamar a 'tieneString' con diferentes argumentos.
console.log(tieneString(1, 2, 3));
console.log(tieneString(1, "Hola", 3));
console.log(tieneString(5, "Adios", 5));

// Se filtra la 'matriz' original.
const matrizParesString = matriz.filter(
  // El método 'filter' crea un nuevo array con todos los elementos que pasen la prueba implementada por la función dada.
  // 'element' es el elemento actual que se está procesando en el array (en este caso, una fila de la matriz).
  // 'index' es el índice del elemento actual.
  (element, index) => index % 2 == 0 && tieneString(...element) // Se usa el spread operator '...' para pasar los elementos de la fila como argumentos individuales a 'tieneString'
);

// Se inicializa un array vacío.
const array = [];
// Se comprueba si 'matrizParesString' tiene algún elemento.
if (matrizParesString.length > 0) {
  // Si tiene elementos, se itera sobre cada 'fila' de 'matrizParesString'.
  matrizParesString.forEach((fila) =>
    // Y para cada fila, se itera sobre cada 'elemento' de esa fila.
    fila.forEach((elemento) => array.push(elemento)) // Cada 'elemento' se añade al 'array'.
  );
}

// Se filtra el 'array' que ahora contiene todos los elementos de las filas filtradas.
const resultado = array.filter(
  // 'element' es el elemento actual y 'index' es su índice.
  (element, index) =>
    // Se filtran los elementos que son de tipo 'string'.
    typeof element == "string" &&
    // Y además, cuya posición original en la submatriz (columna) sea impar.
    // '(index % matriz[0].length)' calcula el índice de la columna original.
    // '% 2 == 1' comprueba si ese índice de columna es impar.
    (index % matriz[0].length) % 2 == 1
);

// Se muestra el resultado final en la consola.
console.log("El resultado final es:", resultado);

// module.exports = { matriz, tieneString, resultado };
