console.log("----- Funciones -----");

const saludar2 = () => {
  console.log("Hola desde la función flecha saludar2");
};

saludar2();

// Funcion anónima autoejecutable
(() => {
  console.log("Hola desde la función anónima autoejecutable");
})();

// Función declarada
function saludar(nombre) {
  console.log(`Hola, ${nombre}`);
} 

// Función anónima asignada a una variable
const despedir = function(nombre) {
  console.log(`Adiós, ${nombre}`);
};
saludar("Impulso");
despedir("Impulso");

(nombre) => {
  console.log(`Hola, ${nombre}`);
};
saludar("Impulso");
despedir("Impulso");
saludar2();

const saludar3 = (nombre, apellido) => {
  return `Hola, ${nombre} ${apellido}`;
}
console.log(saludar3("Juan", "Pérez"));

const saludar4 = (nombre, apellido) => `Hola, ${nombre} ${apellido}`;
console.log(saludar4("Ana", "García"));

