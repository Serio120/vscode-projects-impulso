class Rectangulo {
  //definicion de la clase
  constructor(alto, ancho) {
    //metodo constructor un constructor es una funcion especial que se llama cuando se crea un objeto los parametros del constructor son las propiedades del objeto
    this.alto = alto; //propiedad alto, this se refiere al objeto que se esta creando es una referencia al objeto actual
    this.ancho = ancho; //propiedad ancho
  }
}
/*
        json analogo de este objeto
        {
            "alto": alto,
            "ancho": ancho
        }
        */

let r = new Rectangulo(3, 4); //creacion de un objeto de la clase Rectangulo, new es una palabra reservada que se usa para crear un objeto a partir de una clase
console.log(r.alto + " " + r.ancho);
console.log(r);

// Meter una clase dentro de una variable
let MiClase = class {
  constructor(nombre) {
    this.nombre = nombre;
  }
};
let obj = new MiClase("Juan");
console.log(obj.nombre);

console.log("-----------------");

// Getters y Setters esto es para crear metodos que acceden a los atributos de la clase
class Cuadrado {
  constructor(alto, ancho) {
    this.alto = alto;
    this.ancho = ancho;
  }
  // Get -> Crea un Atributo nuevo
  get altoAncho() {
    return "Alto: " + this.alto + " Ancho: " + this.ancho;
  }
  //Set -> Modifica un Atributo existente
  set altoAncho(dimensiones) {
    this.alto = dimensiones[0];
    this.ancho = dimensiones[1];
  }
  //Otro método de la clase 
  calcArea() {
    return this.alto * this.ancho;
  }
}

const c = new Cuadrado(20, 10);
console.log(c.alto); // 20
console.log(c.ancho); // 10
console.log(c.altoAncho); // Alto: 20 Ancho: 10

r.altoAncho = [30, 40]; // Cambiamos alto y ancho
console.log(c.altoAncho); // Alto: 30 Ancho: 40
console.log(c.calcArea()); // 1200
