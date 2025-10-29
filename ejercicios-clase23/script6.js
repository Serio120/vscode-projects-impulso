let frutas = ["Manzana", "Banana"]; // Tiene un tamaño de 2
let frutasObject = new Array("Fresa", "Piña"); // Tiene un tamaño de 2
let frutasObject2 = new Array(["Fresa", "Piña"]); // Tiene un tamaño de 1, ya que se le pasa un array como único elemento.
//  Es un array dentro de otro array.
let frutasObject3 = new Array(["Fresa", "Piña"], [3, 4]); // Tiene un tamaño de 2, ya que se le pasan dos arrays como elementos.

console.log(frutas); // Devuelve ["Manzana", "Banana"]
console.log(frutasObject); // Devuelve ["Fresa", "Piña"]
console.log(frutasObject2); // Devuelve [["Fresa", "Piña"]]
console.log(frutas.length); // Devuelve 2
console.log(frutasObject.length); // Devuelve 2
console.log(frutasObject2.length); // Devuelve 1
console.log(frutas[0]);

console.log("---------------------------------");
console.log(typeof frutas);
console.log(typeof frutas[0]); // Esto es un array de strings
console.log(typeof frutasObject); // Esto es un array de strings
console.log(typeof frutasObject[0]); // Esto es un string
console.log(typeof frutasObject2);  // Esto es un array de arrays
console.log(typeof frutasObject2[0]);   // Esto es un array
console.log(typeof frutasObject[0][1]); // Esto es un string

console.log("---------------------------------");
console.log(frutasObject3); // Devuelve [ [ 'Fresa', 'Piña' ], [ 3, 4 ] ]
console.log(frutasObject3.length); // Devuelve 2
console.log(typeof frutasObject3); // Esto es un array de arrays
console.log(typeof frutasObject3[0]); // Esto es un array
console.log(typeof frutasObject3[1]); // Esto es un array
console.log(typeof frutasObject3[0][0]); // Esto es un string

//Javascript es un lenguaje de tipado dinámico, por lo que no es necesario especificar el tipo de dato al declarar una variable.
//Los arrays en Javascript son dinámicos, por lo que pueden crecer y decrecer en tamaño según se necesite.

// Javascript no tiene char y utiliza strings para representar caracteres individuales.
let letra = 'A';
console.log(typeof letra); // Devuelve 'string'
console.log(letra); // Devuelve 'A'
console.log(letra.length); // Devuelve 1
console.log(letra[0]); // Devuelve 'A'
console.log("---------------------------------");

// Ejemplo de array multidimensional
let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(matriz); // Devuelve [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]
console.log(matriz.length); // Devuelve 3
console.log(matriz[0]);
console.log(matriz[0].length); // Devuelve 3
console.log(matriz[1][2]);
// Accede al elemento en la segunda fila, tercera columna (valor 6)
console.log(typeof matriz); // Esto es un array de arrays
console.log(typeof matriz[0]);
console.log(typeof matriz[0][0]);
console.log("---------------------------------");
// Ejemplo de array mixto
let mixto = [1, "Dos", true, [3, 4], { clave: "valor" }];
console.log(mixto); // Devuelve [ 1, 'Dos', true, [ 3, 4 ], { clave: 'valor' } ]
console.log(mixto.length); // Devuelve 5
console.log(typeof mixto); // Esto es un array
console.log(typeof mixto[0]); // Esto es un number
console.log(typeof mixto[1]);
console.log(typeof mixto[2]); // Esto es un boolean
console.log(typeof mixto[3]); // Esto es un array
console.log(typeof mixto[4]); // Esto es un object

