# TypeScript

## Instalaciones necesarias

- [NodeJS](https://nodejs.org/en/)

- [TypeScript](https://www.typescriptlang.org/download/)

```
npm install -g typescript
```

## ¿Qué es TypeScript?

TypeScript es un superconjunto tipado de JavaScript que se transpila a JavaScript puro.
Le da una nueva capa y más robustes al JavaScript.

Se basa en JavaScript, pero en este caso, es un lenguaje tipado, lo que lo hace más estricto pero menos flexible. Añade tipos estáticos opcionales y otras características avanzadas a JavaScript, permitiendo detectar errores en tiempo de compilación y mejorar el desarrollo de aplicaciones a gran escala.

El código TypeScript se transpila a JavaScript para poder ejecutarse en navegadores o entornos Node.js.

Cuando creamos un script con extensión *.ts, debemos convertirlo en JavaScript. Eso lo podemos realizar utilizando el siguiente comando: 
```bash 
tsc <nombre-script>.ts
```

## Modo Observador 
Es una característica propia de TypeScript que consiste en estar observando los cambios del fichero para que desde el momento en que se guarde algun cambio se genera la compilación a JavaScript.

Para "activar" este modo debemos ejecutar el comando:
```bash
tsc <nombre-script>.ts -w
```

Este comando sólo compila el fichero indicado con el nombre del script, así que si queremos que se actualicen todos los ficheros *.ts que tengamos en el proyecto. 

1. Inicializamos el proyecto como proyecto TypeScript:
```bash
tsc -init
```

2. Activamos el modo observador:
```bash
tsc -w
```

## Tipos de datos
### Tipos primitivos:
- number: Para valores numéricos (enteros y decimales)
```typescript
let edad: number = 30;
let precio: number = 19.99;
```

- string: Para cadenas de texto
```typescript
let nombre: string = "Juan";
let saludo: string = "Hola, mundo";
```

- boolean: Para valores true/false
```typescript
let esActivo: boolean = true;
let esMayorDeEdad: boolean = false;
```

### Tipos especiales:
- any: Permite asignar cualquier tipo de valor
```typescript
let valor: any = 123;
let valor = "Hola";
let valor = true;
```
- void: Generalmente usado para funciones que no retornan valor
```typescript
function saludar(): void {
  console.log("Hola");
}
```
- null y undefined: Representan valores nulos o no definidos
```typescript
let vacio: null = null;
let sinDefinir: undefined = undefined;
```

### Tipos compuestos:
- array: Para colecciones de elementos del mismo tipo
```typescript
let numeros: number[] = [1, 2, 3, 4, 5];
let nombres: string[] = ["Juan", "Pedro", "Maria"];
```

- tuple: Arrays de longitud fija con tipos conocidos
```typescript
let persona: [string, number];
persona = ["Juan", 30];
```

- enum: Para conjuntos de constantes con nombre
```typescript
enum Color {
  Rojo,
  Verde,
  Azul
}
let colorFavorito: Color = Color.Verde;
```

- objecto: Para colecciones de pares clave-valor 
```typescript
usuario: { nombre: string, edad: number } = {
  nombre: "Juan",
  edad: 30
};
```

### Tipos definidos por el usuario:
- class: Para definir plantillas de objetos con propiedades y métodos
```typescript
class Persona {
  nombre: string;
  edad: number;

  constructor(nombre: string, edad: number) {
    this.nombre = nombre;
    this.edad = edad;
  }

  saludar(): void {
    console.log(`Hola, me llamo ${this.nombre}`);
  }
}
```

- interface: Para definir la forma de un objeto, especificando sus propiedades y tipos
```typescript
interface Usuario {
  nombre: string;
  edad: number;
}

usuario: Usuario = {
  nombre: "Pedro",
  edad: 25
};
```

- type: 
```typescript
type ID = number | string;

let userID: ID = 123;
let productID: ID = "abc";
```

### Diferencias entre type e interface
Ambos conceptos se utilizan para definir la forma de los objetos y estrucuturas de datos. 

Las interfaces las usamos para definir estructuras de un objeto que será implementado por una clase. También para extender o fusionar interfases. 

El type lo usaremos para crear tipos complejos con uniores (|), intersecciones (&) o tuplas, para definir alias de tipos básicos o combinaciones. 


### Más ejemplos:
```ts
interface Usuario {
  nombre: string;
  edad: number;
}

type Coordenadas = [number, number];

// Ejemplo 1: Crear un objeto que cumple con la interfaz
const usuario1: Usuario = {
  nombre: "Ana García",
  edad: 28
};

// Ejemplo 2: Función que acepta un Usuario como parámetro
function saludarUsuario(usuario: Usuario): string {
  return `Hola ${usuario.nombre}, tienes ${usuario.edad} años.`;
}

console.log(saludarUsuario(usuario1)); // Output: Hola Ana García, tienes 28 años.

// Ejemplo 3: Array de Usuarios
const listaUsuarios: Usuario[] = [
  { nombre: "Carlos Pérez", edad: 35 },
  { nombre: "María López", edad: 42 },
  usuario1
];

// Ejemplo 4: Función que devuelve un Usuario
function crearUsuario(nombre: string, edad: number): Usuario {
  return { nombre, edad };
}

const nuevoUsuario = crearUsuario("Pedro Sánchez", 31);
console.log(nuevoUsuario); // Output: { nombre: "Pedro Sánchez", edad: 31 }

// Ejemplo 5: Crear una variable de tipo Coordenadas
const posicion: Coordenadas = [10, 20];

// Ejemplo 6: Función que acepta Coordenadas como parámetro
function distanciaAlOrigen(punto: Coordenadas): number {
  const [x, y] = punto;
  return Math.sqrt(x * x + y * y);
}

console.log(distanciaAlOrigen(posicion)); // Output: 22.360679774997898

// Ejemplo 7: Array de Coordenadas
const puntos: Coordenadas[] = [
  [0, 0],
  [5, 5],
  [3, -2],
  posicion
];

// Ejemplo 8: Función que devuelve Coordenadas
function crearPuntoAleatorio(): Coordenadas {
  return [Math.random() * 100, Math.random() * 100];
}

const puntoAleatorio = crearPuntoAleatorio();
console.log(puntoAleatorio); // Output: [algún número aleatorio, algún número aleatorio]

// Ejemplo 9: Desestructuración de Coordenadas
function imprimirCoordenadas(coord: Coordenadas): void {
  const [x, y] = coord;
  console.log(`X: ${x}, Y: ${y}`);
}

imprimirCoordenadas([7, 3]); // Output: X: 7, Y: 3

// Ejemplo 10: Definición de una clase película
class Pelicula{
  nombre ?: string;
  director ?: string;
  actores ?: string[];  
}

//?: Si no usamos esta sintaxis debemos inicializar los valores

// Ejemplo 11: Definición de una clase película con constructor
class Pelicula{
  nombre ?: string;
  director ?: string;
  actores ?: string[];

  constructor (nombre:string, director:string, actores:string[]){
    this.nombre = nombre;
    this.director = director;
    this.actores = actores;
  }
}
```

## Encapsulamiento y genéricos
El genérico es una herramienta poderosa que permite crear componentes reutilizables que funcionan con múltiples tipos de datos sin sacrificar la tipificación estática. Los genéricos proporcionan una forma de definir funciones, clases, interfaces y tipos que no están vinculados a un tipo específico, sino que pueden trabajar con cualquier tipo especificado en el momento de su uso.

```ts
//Función Genérica
function identity<T>(arg: T): T {
  return arg;
}

let output1 = identity<string>("Hola");
let output2 = identity<number>(42);

// Clase Genérica
class Sorteo<T>{
  private ticket ?: T;

  constructor(){
    private nombre:string
  }

  public getTicket(){
    return this.ticket;
  }

  public setTicket(ticket:T){
    this.ticket = ticket;
  }

  mostrarInfo(){
    return `Para ${this.nombre} el ticket es: ${this.ticket}`
  }
}

let sorteo = new Sorteo<number>("Davinia");
sorteo.setTicket(7345);
console.log(sorteo.mostrarInfo());

let sorteo = new Sorteo<string>("Davinia");
sorteo.setTicket('ST7345');
console.log(sorteo.mostrarInfo());
```

## Inferencia de tipos

Si no los especificamos TS lo infiere.

### Ejemplo

```ts
let array = [1, 2, 3]; // TypeScript infiere que es number[]
```