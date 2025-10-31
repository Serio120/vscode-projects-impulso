// --- Declaración de variables con tipos primitivos ---

// 'number' para valores numéricos, tanto enteros como decimales.
let edad: number = 30; // Se declara una variable 'edad' de tipo número y se le asigna el valor 30.
let precio: number = 19.99; // Se declara una variable 'precio' de tipo número y se le asigna el valor 19.99.

// 'any' permite que la variable contenga cualquier tipo de valor. Es flexible pero se pierde la seguridad de tipos.
let valor: any = 123; // Se declara una variable 'valor' que puede contener cualquier tipo de dato.

// 'string' para cadenas de texto.
let saludo: string = "Hola"; // Se declara una variable 'saludo' de tipo cadena de texto.

// 'boolean' para valores de verdadero o falso.
let interruptor: boolean = true; // Se declara una variable 'interruptor' de tipo booleano.

// 'void' se usa en funciones que no devuelven ningún valor.
function saludar(): void { // Se define una función 'saludar' que no retorna ningún valor.
  console.log("Hola"); // La función imprime "Hola" en la consola.
}

// 'null' y 'undefined' para representar la ausencia de valor o un valor no definido.
let vacio: null = null; // Se declara una variable 'vacio' y se le asigna explícitamente el valor nulo.
let sinDefinir: undefined = undefined; // Se declara una variable 'sinDefinir' y se le asigna explícitamente el valor indefinido.

// --- Declaración de tipos compuestos ---

// 'array' de números. Se define el tipo de los elementos seguido de [].
let numeros: number[] = [1, 2, 3, 4, 5]; // Se declara un arreglo 'numeros' que solo puede contener números.

// 'array' de cadenas de texto.
let nombres: string[] = ["Juan", "Pedro", "Maria"]; // Se declara un arreglo 'nombres' que solo puede contener cadenas de texto.

// 'tuple' es un array con un número fijo de elementos y tipos predefinidos.
let persona: [string, number]; // Se declara una tupla 'persona' que debe contener un string y luego un número.
persona = ["Juan", 30]; // Se asignan los valores a la tupla, respetando el orden y tipo.

// 'enum' permite definir un conjunto de constantes con nombre para mejorar la legibilidad.
enum Color { // Se define una enumeración 'Color'.
  Rojo, // A 'Rojo' se le asigna el valor 0 por defecto.
  Verde, // A 'Verde' se le asigna el valor 1.
  Azul  // A 'Azul' se le asigna el valor 2.
}

// Asignación de un valor del enum 'Color' a una variable.
let colorFavorito: Color = Color.Verde; // Se declara una variable 'colorFavorito' y se le asigna el valor 'Verde' del enum.

// 'object' para colecciones de pares clave-valor.
let usuario: { nombre: string, edad: number } = { // Se define un objeto 'usuario' con una estructura específica.
  nombre: "Juan", // Propiedad 'nombre' de tipo string.
  edad: 30 // Propiedad 'edad' de tipo number.
};

// 'class' es una plantilla para crear objetos (instancias).
class Persona { // Se define la clase 'Persona'.
  nombre: string; // Se declara la propiedad 'nombre' de tipo string.
  edad: number; // Se declara la propiedad 'edad' de tipo number.

  // El constructor se ejecuta al crear una nueva instancia de la clase.
  constructor(nombre: string, edad: number) { // El constructor recibe 'nombre' y 'edad' como parámetros.
    this.nombre = nombre; // Se asigna el parámetro 'nombre' a la propiedad 'nombre' de la instancia.
    this.edad = edad; // Se asigna el parámetro 'edad' a la propiedad 'edad' de la instancia.
  }

  // Método de la clase.
  saludar(): void { // Se define un método 'saludar' que no retorna valor.
    console.log(`Hola, me llamo ${this.nombre}`); // El método imprime un saludo usando la propiedad 'nombre' de la instancia.
  }
}

// --- Ejemplos de uso ---

saludar(); // Se llama a la función 'saludar'.

const persona1 = new Persona("Ana", 25); // Se crea una nueva instancia (objeto) de la clase Persona.
persona1.saludar(); // Se llama al método 'saludar' del objeto 'persona1'.

console.log(`La edad es: ${edad}`); // Se imprime la variable 'edad' en la consola.
console.log(`El color favorito es: ${Color[colorFavorito]}`); // Se imprime el nombre del color ("Verde") a partir del valor del enum.
console.log(`El usuario es: ${usuario.nombre} y tiene ${usuario.edad} años.`); // Se accede a las propiedades del objeto 'usuario' y se imprimen.
console.log(`El primer nombre en la lista es: ${nombres[0]}`); // Se accede al primer elemento del arreglo 'nombres'.
console.log(`El interruptor está: ${interruptor}`); // Se imprime el valor de la variable booleana 'interruptor'.

// 'interface' define un "contrato" para la forma que debe tener un objeto.
interface Usuario { // Se define una interfaz 'Usuario'.
  nombre: string; // La interfaz exige una propiedad 'nombre' de tipo string.
  edad: number; // La interfaz exige una propiedad 'edad' de tipo number.
}

let usuario2: Usuario = { // Se declara una variable 'usuario2' que debe cumplir con la interfaz 'Usuario'.
  nombre: "Pedro", // Se asigna un valor a la propiedad 'nombre'.
  edad: 25 // Se asigna un valor a la propiedad 'edad'.
};

// 'type' permite crear un alias para un tipo. Aquí, ID puede ser un número o una cadena (unión de tipos).
type ID = number | string; // Se crea un alias de tipo 'ID' que puede ser un número o una cadena.

let userID: ID = 123; // Se declara una variable 'userID' del tipo 'ID' y se le asigna un número.
let productID: ID = "abc"; // Se declara una variable 'productID' del tipo 'ID' y se le asigna una cadena.

console.log(`El ID del usuario es: ${userID}`); // Se imprime el ID del usuario.
console.log(`El ID del producto es: ${productID}`); // Se imprime el ID del producto.

// Se define un tipo complejo 'Direccion' usando 'type' para describir la estructura de un objeto.
type Direccion = { // Se crea un alias de tipo 'Direccion' para un objeto.
  calle: string; // Propiedad 'calle' de tipo string.
  numero: number; // Propiedad 'numero' de tipo number.
  ciudad: string; // Propiedad 'ciudad' de tipo string.
  codigoPostal: string; // Propiedad 'codigoPostal' de tipo string.
  pais: string; // Propiedad 'pais' de tipo string.
};

// --- Más ejemplos de Interfaces y Types ---

// Se define un alias de tipo para una tupla que representa coordenadas X e Y.
type Coordenadas = [number, number]; // Se crea un alias de tipo 'Coordenadas' para una tupla de dos números.

const usuario1: Usuario = { // Se crea un objeto 'usuario1' que cumple con la interfaz 'Usuario'.
  nombre: "Ana García", // Se asigna el nombre.
  edad: 28 // Se asigna la edad.
};

// Función que acepta un objeto de tipo 'Usuario' como parámetro y devuelve un string.
function saludarUsuario(usuario: Usuario): string { // La función espera un argumento que cumpla con la interfaz 'Usuario'.
  return `Hola ${usuario.nombre}, tienes ${usuario.edad} años.`; // Retorna un saludo personalizado.
}

console.log(saludarUsuario(usuario1)); // Se llama a la función con 'usuario1' y se imprime el resultado.

// Se crea un array que solo puede contener objetos de tipo 'Usuario'.
const listaUsuarios: Usuario[] = [ // Se declara un arreglo que solo contendrá objetos de tipo 'Usuario'.
  { nombre: "Carlos Pérez", edad: 35 }, // Primer elemento del arreglo.
  { nombre: "María López", edad: 42 }, // Segundo elemento del arreglo.
  usuario1 // Se añade el objeto 'usuario1' previamente creado.
];

// Función que devuelve un objeto que cumple con la interfaz 'Usuario'.
function crearUsuario(nombre: string, edad: number): Usuario { // La función retorna un objeto de tipo 'Usuario'.
  return { nombre, edad }; // Retorna un nuevo objeto con las propiedades recibidas.
}

const nuevoUsuario = crearUsuario("Pedro Sánchez", 31); // Se crea un nuevo usuario llamando a la función.
console.log(nuevoUsuario); // Se imprime el objeto del nuevo usuario.

// Se crea una variable 'posicion' que debe ser una tupla [number, number] según el tipo 'Coordenadas'.
const posicion: Coordenadas = [10, 20]; // Se declara una variable 'posicion' con el tipo 'Coordenadas'.

// Función que acepta un parámetro del tipo 'Coordenadas' y devuelve un número.
function distanciaAlOrigen(punto: Coordenadas): number { // La función espera una tupla de tipo 'Coordenadas'.
  const [x, y] = punto; // Se desestructura la tupla para obtener 'x' e 'y'.
  return Math.sqrt(x * x + y * y); // Se calcula y retorna la distancia euclidiana al origen.
}

console.log(distanciaAlOrigen(posicion)); // Se calcula la distancia para 'posicion' y se imprime.

// Se crea un array que solo puede contener elementos de tipo 'Coordenadas'.
const puntos: Coordenadas[] = [ // Se declara un arreglo de tuplas de tipo 'Coordenadas'.
  [0, 0], // Primer punto.
  [5, 5], // Segundo punto.
  [3, -2], // Tercer punto.
  posicion // Se añade la variable 'posicion' previamente creada.
];

// Función que devuelve un valor de tipo 'Coordenadas'.
function crearPuntoAleatorio(): Coordenadas { // La función retorna una tupla de tipo 'Coordenadas'.
  return [Math.random() * 100, Math.random() * 100]; // Retorna una tupla con dos números aleatorios.
}

const puntoAleatorio = crearPuntoAleatorio(); // Se crea un punto aleatorio.
console.log(puntoAleatorio); // Se imprime el punto aleatorio.

// Función que usa desestructuración en sus parámetros para más claridad.
function imprimirCoordenadas(coord: Coordenadas): void { // La función recibe una tupla de tipo 'Coordenadas'.
  const [x, y] = coord; // Se desestructura la tupla para obtener 'x' e 'y'.
  console.log(`X: ${x}, Y: ${y}`); // Se imprimen las coordenadas.
}

imprimirCoordenadas([7, 3]); // Se llama a la función con una nueva tupla.

// Definición de una clase Pelicula con constructor.
class Pelicula { // Se define la clase 'Pelicula'.
  nombre ?: string; // La propiedad 'nombre' es opcional (puede no tener valor).
  director ?: string; // La propiedad 'director' es opcional.
  actores ?: string[]; // La propiedad 'actores' (un arreglo de strings) es opcional.

  // El constructor inicializa las propiedades del objeto cuando se crea una instancia.
  constructor (nombre:string, director:string, actores:string[]){ // El constructor recibe los datos de la película.
    this.nombre = nombre; // Se asigna el nombre.
    this.director = director; // Se asigna el director.
    this.actores = actores; // Se asignan los actores.
  }
}

// --- Genéricos ---

// Función Genérica: puede trabajar con cualquier tipo de dato.
function identity<T>(arg: T): T { // 'T' es un marcador de posición para el tipo que se especificará al llamar la función.
  return arg; // La función devuelve el mismo argumento que recibió.
}

let output1 = identity<string>("Hola"); // Se llama a la función especificando que 'T' es 'string'.
let output2 = identity<number>(42); // Se llama a la función especificando que 'T' es 'number'.

// Clase Genérica: puede trabajar con un tipo de dato específico por instancia.
class Sorteo<T>{ // 'T' es un tipo genérico para el ticket.
  private ticket?: T; // La propiedad 'ticket' será del tipo 'T'. Es opcional.
  private nombre: string; // Propiedad para almacenar el nombre del participante.

  constructor(nombre: string){ // El constructor recibe el nombre del participante.
    this.nombre = nombre; // Se asigna el nombre a la propiedad de la clase.
  }

  public getTicket(): T | undefined { // Método para obtener el ticket. Devuelve 'T' o 'undefined'.
    return this.ticket; // Retorna el valor del ticket.
  }

  public setTicket(ticket: T): void { // Método para asignar un valor al ticket.
    this.ticket = ticket; // Asigna el ticket recibido a la propiedad de la clase.
  }

  public mostrarInfo(): string { // Método para mostrar la información del sorteo.
    return `Para ${this.nombre} el ticket es: ${this.ticket}`; // Retorna una cadena con el nombre y el ticket.
  }
}

let sorteo = new Sorteo<number>("Davinia"); // Se crea una instancia de 'Sorteo' para tickets de tipo 'number'.
sorteo.setTicket(7345); // Se le asigna un ticket numérico.
console.log(sorteo.mostrarInfo()); // Se muestra la información.

let sorteo2 = new Sorteo<string>("Davinia"); // Se crea otra instancia de 'Sorteo' para tickets de tipo 'string'.
sorteo2.setTicket('ST7345'); // Se le asigna un ticket de tipo cadena de texto.
console.log(sorteo2.mostrarInfo()); // Se muestra la información.

// --- Inferencia de tipos ---

let array = [1, 2, 3]; // TypeScript infiere que 'array' es de tipo 'number[]' porque solo contiene números.