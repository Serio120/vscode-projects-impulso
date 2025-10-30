// Asignación básica de desestructuración de objetos.
    // Se crea un objeto 'user' con dos propiedades: 'id' y 'is_verified'.
    const user = {
        id: 42,
        is_verified: true
    };
    
    // Se extraen las propiedades 'id' y 'is_verified' del objeto 'user' y se asignan a dos constantes con el mismo nombre.
    const {id, is_verified} = user;
    
    // Se imprime el valor de la constante 'id'.
    console.log(id); // 42
    // Se imprime el valor de la constante 'is_verified'.
    console.log(is_verified); // true 

    // Asignar nuevos nombres de constantes que recojan los valores de 'o'.
    // Se crea un objeto 'o' con dos propiedades: 'p' y 'q'.
    const o = {p: 42, q: true};
    // Se extraen las propiedades 'p' y 'q' del objeto 'o' y se asignan a dos nuevas constantes llamadas 'foo' and 'bar'.
    const {p: foo, q: bar} = o;

    // Se imprime el valor de la constante 'foo'.
    console.log(foo); // 42 
    // Se imprime el valor de la constante 'bar'.
    console.log(bar); // true

    // Asignación de valores predeterminados a las constantes.
    // Se intenta desestructurar el objeto {a: 3} en las constantes 'a' y 'b'.
    // A 'a' se le asigna el valor 3 del objeto.
    // Como 'b' no está definida en el objeto, se le asigna el valor predeterminado de 5.
    const {a = 10, b = 5} = {a: 3};

    // Se imprime el valor de la constante 'a'.
    console.log(a); // 3
    // Se imprime el valor de la constante 'b'.
    console.log(b); // 5