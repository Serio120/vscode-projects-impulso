/* Ejercicio
Utilizando objetos Boolean realiza un programa que indique si un array de 6 elementos
solicitado al usuario se encuentra ordenado de la siguiente forma (e1 > e3, e2 < e4 y e5 = e6) */

let arr = [];
for (let i = 0; i < 6; i++) { // Solicitar 6 elementos al usuario
  let elemento = parseInt(prompt(`Introduce el elemento ${i + 1} del array:`)); // Convertir a entero
  arr.push(elemento); // Añadir al array
}
console.log("Array introducido:", arr);
console.log("-----------------------");
// Evaluar las condiciones utilizando objetos Boolean
// e1 > e3, e2 < e4, e5 = e6
// arr[0] > arr[2], arr[1] < arr[3], arr[4] === arr[5]

console.log("Evaluando condiciones...");
console.log(`Condición 1 (e1 > e3): ${arr[0]} > ${arr[2]}`);
console.log(`Condición 2 (e2 < e4): ${arr[1]} < ${arr[3]}`);
console.log(`Condición 3 (e5 = e6): ${arr[4]} === ${arr[5]}`);


let condicion1 = new Boolean(arr[0] > arr[2]);
let condicion2 = new Boolean(arr[1] < arr[3]);
let condicion3 = new Boolean(arr[4] === arr[5]);
console.log("-----------------------");
// Verificar si todas las condiciones son verdaderas
if (condicion1.valueOf() && condicion2.valueOf() && condicion3.valueOf()) { 
  console.log("El array cumple las condiciones de orden.");
} else {
  console.log("El array no cumple las condiciones de orden.");
}
// Para que se cumplan las condiciones, un ejemplo de array podría ser: [5, 2, 3, 4, 7, 7]
// Para que no se cumplan las condiciones, un ejemplo de array podría ser: [1, 4, 2, 3, 5, 6]

console.log("-----------------------");
console.log(condicion1.valueOf(), condicion2.valueOf(), condicion3.valueOf());
console.log(condicion1 && condicion2 && condicion3);
// Explicación: Se solicita al usuario que introduzca 6 elementos para un array.
//  Luego, se crean tres objetos Boolean para evaluar las condiciones dadas (e1 > e3, e2 < e4, e5 = e6).
//  Finalmente, se verifica si todas las condiciones son verdaderas y se muestra el resultado en la consola.
