// --- Declaración de variables con tipos primitivos ---
// 'number' para valores numéricos, tanto enteros como decimales.
var edad = 30; // Se declara una variable 'edad' de tipo número y se le asigna el valor 30.
var precio = 19.99; // Se declara una variable 'precio' de tipo número y se le asigna el valor 19.99.
// 'any' permite que la variable contenga cualquier tipo de valor. Es flexible pero se pierde la seguridad de tipos.
var valor = 123; // Se declara una variable 'valor' que puede contener cualquier tipo de dato.
// 'string' para cadenas de texto.
var saludo = "Hola"; // Se declara una variable 'saludo' de tipo cadena de texto.
// 'boolean' para valores de verdadero o falso.
var interruptor = true; // Se declara una variable 'interruptor' de tipo booleano.
// 'void' se usa en funciones que no devuelven ningún valor.
function saludar() {
    console.log("Hola"); // La función imprime "Hola" en la consola.
}
// 'null' y 'undefined' para representar la ausencia de valor o un valor no definido.
var vacio = null; // Se declara una variable 'vacio' y se le asigna explícitamente el valor nulo.
var sinDefinir = undefined; // Se declara una variable 'sinDefinir' y se le asigna explícitamente el valor indefinido.
// --- Declaración de tipos compuestos ---
// 'array' de números. Se define el tipo de los elementos seguido de [].
var numeros = [1, 2, 3, 4, 5]; // Se declara un arreglo 'numeros' que solo puede contener números.
// 'array' de cadenas de texto.
var nombres = ["Juan", "Pedro", "Maria"]; // Se declara un arreglo 'nombres' que solo puede contener cadenas de texto.
// 'tuple' es un array con un número fijo de elementos y tipos predefinidos.
var persona; // Se declara una tupla 'persona' que debe contener un string y luego un número.
persona = ["Juan", 30]; // Se asignan los valores a la tupla, respetando el orden y tipo.
// 'enum' permite definir un conjunto de constantes con nombre para mejorar la legibilidad.
var Color;
(function (Color) {
    Color[Color["Rojo"] = 0] = "Rojo";
    Color[Color["Verde"] = 1] = "Verde";
    Color[Color["Azul"] = 2] = "Azul"; // A 'Azul' se le asigna el valor 2.
})(Color || (Color = {}));
// Asignación de un valor del enum 'Color' a una variable.
var colorFavorito = Color.Verde; // Se declara una variable 'colorFavorito' y se le asigna el valor 'Verde' del enum.
// 'object' para colecciones de pares clave-valor.
var usuario = {
    nombre: "Juan", // Propiedad 'nombre' de tipo string.
    edad: 30 // Propiedad 'edad' de tipo number.
};
// 'class' es una plantilla para crear objetos (instancias).
var Persona = /** @class */ (function () {
    // El constructor se ejecuta al crear una nueva instancia de la clase.
    function Persona(nombre, edad) {
        this.nombre = nombre; // Se asigna el parámetro 'nombre' a la propiedad 'nombre' de la instancia.
        this.edad = edad; // Se asigna el parámetro 'edad' a la propiedad 'edad' de la instancia.
    }
    // Método de la clase.
    Persona.prototype.saludar = function () {
        console.log("Hola, me llamo ".concat(this.nombre)); // El método imprime un saludo usando la propiedad 'nombre' de la instancia.
    };
    return Persona;
}());
// --- Ejemplos de uso ---
saludar(); // Se llama a la función 'saludar'.
var persona1 = new Persona("Ana", 25); // Se crea una nueva instancia (objeto) de la clase Persona.
persona1.saludar(); // Se llama al método 'saludar' del objeto 'persona1'.
console.log("La edad es: ".concat(edad)); // Se imprime la variable 'edad' en la consola.
console.log("El color favorito es: ".concat(Color[colorFavorito])); // Se imprime el nombre del color ("Verde") a partir del valor del enum.
console.log("El usuario es: ".concat(usuario.nombre, " y tiene ").concat(usuario.edad, " a\u00F1os.")); // Se accede a las propiedades del objeto 'usuario' y se imprimen.
console.log("El primer nombre en la lista es: ".concat(nombres[0])); // Se accede al primer elemento del arreglo 'nombres'.
console.log("El interruptor est\u00E1: ".concat(interruptor)); // Se imprime el valor de la variable booleana 'interruptor'.
var usuario2 = {
    nombre: "Pedro", // Se asigna un valor a la propiedad 'nombre'.
    edad: 25 // Se asigna un valor a la propiedad 'edad'.
};
var userID = 123; // Se declara una variable 'userID' del tipo 'ID' y se le asigna un número.
var productID = "abc"; // Se declara una variable 'productID' del tipo 'ID' y se le asigna una cadena.
console.log("El ID del usuario es: ".concat(userID)); // Se imprime el ID del usuario.
console.log("El ID del producto es: ".concat(productID)); // Se imprime el ID del producto.
var usuario1 = {
    nombre: "Ana García", // Se asigna el nombre.
    edad: 28 // Se asigna la edad.
};
// Función que acepta un objeto de tipo 'Usuario' como parámetro y devuelve un string.
function saludarUsuario(usuario) {
    return "Hola ".concat(usuario.nombre, ", tienes ").concat(usuario.edad, " a\u00F1os."); // Retorna un saludo personalizado.
}
console.log(saludarUsuario(usuario1)); // Se llama a la función con 'usuario1' y se imprime el resultado.
// Se crea un array que solo puede contener objetos de tipo 'Usuario'.
var listaUsuarios = [
    { nombre: "Carlos Pérez", edad: 35 }, // Primer elemento del arreglo.
    { nombre: "María López", edad: 42 }, // Segundo elemento del arreglo.
    usuario1 // Se añade el objeto 'usuario1' previamente creado.
];
// Función que devuelve un objeto que cumple con la interfaz 'Usuario'.
function crearUsuario(nombre, edad) {
    return { nombre: nombre, edad: edad }; // Retorna un nuevo objeto con las propiedades recibidas.
}
var nuevoUsuario = crearUsuario("Pedro Sánchez", 31); // Se crea un nuevo usuario llamando a la función.
console.log(nuevoUsuario); // Se imprime el objeto del nuevo usuario.
// Se crea una variable 'posicion' que debe ser una tupla [number, number] según el tipo 'Coordenadas'.
var posicion = [10, 20]; // Se declara una variable 'posicion' con el tipo 'Coordenadas'.
// Función que acepta un parámetro del tipo 'Coordenadas' y devuelve un número.
function distanciaAlOrigen(punto) {
    var x = punto[0], y = punto[1]; // Se desestructura la tupla para obtener 'x' e 'y'.
    return Math.sqrt(x * x + y * y); // Se calcula y retorna la distancia euclidiana al origen.
}
console.log(distanciaAlOrigen(posicion)); // Se calcula la distancia para 'posicion' y se imprime.
// Se crea un array que solo puede contener elementos de tipo 'Coordenadas'.
var puntos = [
    [0, 0], // Primer punto.
    [5, 5], // Segundo punto.
    [3, -2], // Tercer punto.
    posicion // Se añade la variable 'posicion' previamente creada.
];
// Función que devuelve un valor de tipo 'Coordenadas'.
function crearPuntoAleatorio() {
    return [Math.random() * 100, Math.random() * 100]; // Retorna una tupla con dos números aleatorios.
}
var puntoAleatorio = crearPuntoAleatorio(); // Se crea un punto aleatorio.
console.log(puntoAleatorio); // Se imprime el punto aleatorio.
// Función que usa desestructuración en sus parámetros para más claridad.
function imprimirCoordenadas(coord) {
    var x = coord[0], y = coord[1]; // Se desestructura la tupla para obtener 'x' e 'y'.
    console.log("X: ".concat(x, ", Y: ").concat(y)); // Se imprimen las coordenadas.
}
imprimirCoordenadas([7, 3]); // Se llama a la función con una nueva tupla.
// Definición de una clase Pelicula con constructor.
var Pelicula = /** @class */ (function () {
    // El constructor inicializa las propiedades del objeto cuando se crea una instancia.
    function Pelicula(nombre, director, actores) {
        this.nombre = nombre; // Se asigna el nombre.
        this.director = director; // Se asigna el director.
        this.actores = actores; // Se asignan los actores.
    }
    return Pelicula;
}());
// --- Genéricos ---
// Función Genérica: puede trabajar con cualquier tipo de dato.
function identity(arg) {
    return arg; // La función devuelve el mismo argumento que recibió.
}
var output1 = identity("Hola"); // Se llama a la función especificando que 'T' es 'string'.
var output2 = identity(42); // Se llama a la función especificando que 'T' es 'number'.
// Clase Genérica: puede trabajar con un tipo de dato específico por instancia.
var Sorteo = /** @class */ (function () {
    function Sorteo(nombre) {
        this.nombre = nombre; // Se asigna el nombre a la propiedad de la clase.
    }
    Sorteo.prototype.getTicket = function () {
        return this.ticket; // Retorna el valor del ticket.
    };
    Sorteo.prototype.setTicket = function (ticket) {
        this.ticket = ticket; // Asigna el ticket recibido a la propiedad de la clase.
    };
    Sorteo.prototype.mostrarInfo = function () {
        return "Para ".concat(this.nombre, " el ticket es: ").concat(this.ticket); // Retorna una cadena con el nombre y el ticket.
    };
    return Sorteo;
}());
var sorteo = new Sorteo("Davinia"); // Se crea una instancia de 'Sorteo' para tickets de tipo 'number'.
sorteo.setTicket(7345); // Se le asigna un ticket numérico.
console.log(sorteo.mostrarInfo()); // Se muestra la información.
var sorteo2 = new Sorteo("Davinia"); // Se crea otra instancia de 'Sorteo' para tickets de tipo 'string'.
sorteo2.setTicket('ST7345'); // Se le asigna un ticket de tipo cadena de texto.
console.log(sorteo2.mostrarInfo()); // Se muestra la información.
// --- Inferencia de tipos ---
var array = [1, 2, 3]; // TypeScript infiere que 'array' es de tipo 'number[]' porque solo contiene números.
