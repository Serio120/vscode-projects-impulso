// Define una función llamada 'sum' que toma tres argumentos (x, y, z) y devuelve su suma.
function sum(x, y, z) {
    return x + y + z;
}

// Crea un array de números.
const numbers = [1, 2, 3];

// Llama a la función 'sum' usando el operador de propagación (...) para pasar los elementos del array 'numbers' como argumentos individuales.
// Imprime el resultado en la consola.
console.log(sum(...numbers)); // 6

// Llama a la función 'sum' usando el método 'apply'. El primer argumento 'this' es el contexto, y el segundo es un array de argumentos.
// Imprime el resultado en la consola.
console.log(sum.apply(this, [4, 5, 6])); //15

// Crea otro array de números.
const numbers2 = [1, 2, 3, 5];
// Llama a la función 'sum' con el operador de propagación. La función solo tomará los primeros 3 elementos.
// Imprime el resultado en la consola.
console.log(sum(...numbers2)); // 6

// Crea un array de números.
let miArray = [2, 5, 7, 1, 9];
// Usa el operador de propagación para pasar los elementos del array como argumentos a Math.min y encontrar el valor mínimo.
let minimo = Math.min(...miArray);
// Imprime el valor mínimo en la consola.
console.log(minimo);

// Crea un array de strings con conocimientos.
let misConocimientos = ['variables', 'operadores', 'estructuras de control', 'funciones'];
// Crea otro array de strings con conocimientos aprendidos.
let aprendido = ['spread', 'local storage'];
// Combina los dos arrays anteriores y añade un nuevo elemento usando el operador de propagación.
let misConocimientosAmpliados = [...misConocimientos, ...aprendido, 'otra cosa más'];
// Imprime el nuevo array combinado en la consola.
console.log(misConocimientosAmpliados);

// Crea un objeto 'user1' con propiedades 'name' y 'age'.
const user1 = { 
    name: 'Jen', 
    age: 22, 
}; 

// Crea un objeto 'user2' con propiedades 'name' y 'location'.
const user2 = { 
    name: "Andrew", 
    location: "Philadelphia" 
}; 

// Combina las propiedades de 'user1' y 'user2' en un nuevo objeto 'mergedUsers'.
// Si hay propiedades con el mismo nombre, el valor del último objeto prevalecerá.
const mergedUsers = {...user1, ...user2}; 
// Imprime el objeto combinado en la consola.
console.log(mergedUsers)