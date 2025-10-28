let x1 = new Boolean(false);
let x2 = new Boolean(false);
console.log(typeof(Boolean)+" "+x1); // Respuesta booleana de un objeto llamado Boolean
console.log(x1.valueOf+" "+x1);

console.log("---------------");

if (x1) {
  //Dirección de memoria
  console.log(x1 + " Entro en el if"); //Siempre va a entrar porque el objeto existe
} else {
  console.log(x1 + " No entro en el if"); // Nunca va a entrar porque el objeto existe
}

console.log(x1 == false); // Comprueba valor | dato de dato 
console.log(x1 === false); // Comprueba tipo y valor | dato y valor de dato
console.log(x1 == true);
console.log(x1 == x2); //Direcciones de memoria
console.log(x1 === x2); //Direcciones de memoria
console.log(JSON.stringify(x1) == JSON.stringify(x2)); //Pasamos el objeto a string y comparamos

console.log("------------------------------");

let x3 = false;
if (x3) {
  //false
  console.log("Entro en el if"); //Nunca va a entrar porque el dato es false
} else {
  console.log("No entro en el if"); // Siempre va a entrar porque el dato es false
}


console.log(x2.toString());
console.log("------------------------------");
let x4 = x2.toString(); //Convierte a cadena de caracteres
console.log(
  x4[0] + " " + x4[1] + " " + x4.charAt(2) + // charAt es un método de los strings que devuelve el carácter en la posición indicada
  " " + x4.charAt(3) +
  ` ${x4[4]}` // Esta sintaxis se llama template strings las comillas invertidas permiten incluir expresiones dentro de una cadena 
);
console.log("------------------------------");
console.log(x2.valueOf());
console.log("------------------------------");
console.log(typeof x1); //Devuelve object porque es un objeto Boolean
console.log(typeof x3); //Devuelve boolean porque es un dato primitivo
console.log("-------------------------------");
console.log(typeof x2.valueOf); //Devuelve la función valueOf. valueOf es un método que devuelve el valor primitivo del objeto Boolean
console.log(typeof x2.valueOf()); //Devuelve el valor primitivo del objeto Boolean 
