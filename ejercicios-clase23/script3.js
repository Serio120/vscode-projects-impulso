    // Uso básico del operador ternario
    let n = 0;
    n == 7 ? console.log("Es igual a 7"):console.log("No es igual a 7");

    // Uso del operador ternario dentro de un bucle
    let stop = false;
    let edad = 15;
    while (!stop){
        edad < 18 ? (console.log("Tienes "+edad),edad++): (console.log("Ya eres mayor de edad"),stop=true)
    }

   // Operador Ternario anidado
   let hora = 10;
   let saludo = hora < 12 ? "Buenos días" : hora < 18 ? "Buenas tardes" : "Buenas noches";
   console.log(saludo);

    // Uso del operador ternario para asignar valores
    let numero = 4;
    let paridad = (numero % 2 === 0) ? "par" : "impar";
    console.log("El número " + numero + " es " + paridad);

    // Uso del operador ternario en funciones
    function evaluarEdad(edad) {
        return (edad >= 18) ? "Eres mayor de edad" : "Eres menor de edad";
    }
    console.log(evaluarEdad(20));
