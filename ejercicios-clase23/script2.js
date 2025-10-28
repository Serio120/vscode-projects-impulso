
    //Ejemplos de JSON.parse esto convierte un string en un objeto de javascript
    console.log(JSON.parse('{}'));              // {}

    // Este es un JSON válido para un objeto booleano
    console.log(JSON.parse('true'));            // true

    // Este es un JSON válido para un string
    console.log(JSON.parse('"foo"'));           // "foo"

    // Este es un JSON válido para un número
    console.log(JSON.parse('3.1416'));          // 3.1416

    // Este es un JSON válido para un array
    console.log(JSON.parse('[1, 5, "false"]')); // [1, 5, "false"]

    // Este es un JSON válido para un valor nulo
    console.log(JSON.parse('null'));            // null

    // Este es un JSON válido para un objeto con propiedades
    console.log(JSON.parse('{"nombre": "Davinia", "apellido": "de la Rosa"}')); //{nombre: "Davinia", apellidos: "de la Rosa"}

    // Acceso a las propiedades del objeto
    console.log(JSON.parse('{"nombre": "Davinia", "apellido": "de la Rosa"}').nombre); //Davinia

    
    // Guardar el objeto en una variable para acceder a sus propiedades
    var objeto = JSON.parse('{"nombre": "Davinia", "apellido": "de la Rosa"}');

    //Formas de acceso equivalentes
    console.log(objeto.apellido);
    console.log(objeto["apellido"]);
