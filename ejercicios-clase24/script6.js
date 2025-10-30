// Desestructuración de arrays
// La desestructuración de arrays permite extraer valores de un array y asignarlos a variables.
let [a, b] = [10, 20];
console.log(a); // Imprime 10
console.log(b); // Imprime 20

let list = [3, 5, 7, 6];
// Se puede omitir elementos del array usando comas.
let [a1, , , b2] = list; // Guarda a1=3 y b2=6
console.log(a1); // Imprime 3
console.log(b2); // Imprime 6
console.log(list); // Imprime [3, 5, 7, 6]

// Asignar nombres a elementos de objetos pasados por parámetro
// La desestructuración también se puede usar en los parámetros de una función.
function imprime([saludo, hora]) {
  console.log(`${saludo}, buenos ${hora}`);
}
imprime(["hola", "dias"]); // Imprime "hola, buenos dias"
// Si se quitan los corchetes en la llamada a la función, se pasará un solo argumento a la función.
// En este caso, el primer parámetro 'saludo' tomará el valor "hola" y el segundo 'hora' será undefined.

console.log("-------Sin Corchetes---------");
imprime("hola", "dias"); // El primer parámetro 'saludo' es la cadena "hola", y el segundo 'hora' es undefined.

let c, d;
let list2 = [33, 2, 5, 6];
// Se pueden asignar los valores de un array a variables previamente declaradas.
[a, b, c, d] = list2;

console.log(list2); // Imprime [33, 2, 5, 6]
console.log(a); // Imprime 33
console.log(b); // Imprime 2
console.log(c); // Imprime 5
console.log(d); // Imprime 6

list2 = [33, 2, , 6];
// Se pueden asignar valores por defecto a las variables.
// Si el valor en el array es undefined o no existe, se usará el valor por defecto.
[a, b, c = 9, d] = list2;
console.log(a); // Imprime 33
console.log(b); // Imprime 2
console.log(c); // Imprime 9 (valor por defecto porque el elemento en el array es undefined)
console.log(d); // Imprime 6

list2 = [33, 2];
// Si no hay suficientes elementos en el array, a las variables restantes se les asignará el valor por defecto si lo tienen, o undefined.
[a, b, c = 9, d] = list2;
console.log(a); // Imprime 33
console.log(b); // Imprime 2
console.log(c); // Imprime 9 (valor por defecto)
console.log(d); // Imprime undefined