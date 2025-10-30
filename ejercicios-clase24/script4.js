// Guardamos en el localStorage el nombre "Davinia" con la clave "name"
localStorage.setItem("name", "Davinia"); // op1 esto 
// Guardamos en el localStorage el apellido "de la Rosa" con la clave "surname"
localStorage.surname = "de la Rosa"; // op2

// Obtenemos el valor de la clave "name" del localStorage
let firstName = localStorage.getItem("name");
// Obtenemos el valor de la clave "surname" del localStorage
let lastName = localStorage.surname;
// Imprimimos por consola un saludo con el nombre y el apellido
console.log(`Hola, mi nombre es ${firstName} ${lastName}`);
// o también se puede hacer directamente sin variables
console.log(
  `Hola, mi nombre es ${localStorage.getItem("name")} ${localStorage.surname}`
);

// Esto nos muestra lo que tenemos en el locaStorage
// Recorremos todos los elementos del localStorage
for (let i = 0; i < localStorage.length; i++) {
  // Obtenemos la clave de la posición i
  let key = localStorage.key(i);
  // Mostramos por alerta la clave y el valor de cada elemento
  alert(`${key}: ${localStorage.getItem(key)}`);
}