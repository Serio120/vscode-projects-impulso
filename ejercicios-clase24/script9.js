// La función "operacion" toma dos argumentos iniciales, x e y, y luego un número indefinido de argumentos adicionales que se agrupan en un array llamado "a" (gracias al operador rest ...a).
    function operacion (x, y, ...a) {
        // La función devuelve el resultado de sumar x e y, y luego multiplicar esa suma por el número de elementos en el array "a".
        return (x + y) * a.length
    }

    // Se llama a la función "operacion" con los argumentos 1, 2, 3 y 4.
    // x será 1, y será 2, y "a" será un array [3, 4].
    // La operación será (1 + 2) * 2, lo que da como resultado 6.
    console.log(operacion(1,2,3,4));//6

    // La función "sum" utiliza el operador rest (...a) para aceptar un número indefinido de argumentos y agruparlos en un array llamado "a".
    function sum(...a) {
        // El método "reduce" se utiliza para sumar todos los elementos del array "a".
        // "previous" acumula el valor de la suma, y "current" es el elemento actual que se está procesando.
        return a.reduce((previous, current) => {
            return previous + current;
        });
    }
    
    // Se llama a la función "sum" con los argumentos 1, 2 y 3. El resultado de la suma es 6.
    console.log(sum(1, 2, 3)); //6
    
    // Se llama a la función "sum" con los argumentos 1, 2, 3 y 4. El resultado de la suma es 10.
    console.log(sum(1, 2, 3, 4)); //10

    // La función "xyz" toma dos argumentos, x e y, y luego un número indefinido de argumentos adicionales que se agrupan en un array llamado "z" (usando el operador rest ...z).
    function xyz(x, y, ...z) {
        // Imprime los dos primeros argumentos, "hey" y "hello".
        console.log(x, ' ', y); // hey hello
    
        // Imprime el array "z", que contiene todos los argumentos restantes.
        console.log(z); // ["wassup", "goodmorning", "hi", "howdy"]
        // Imprime el primer elemento del array "z".
        console.log(z[0]); // wassup
        // Imprime la cantidad de elementos en el array "z".
        console.log(z.length); // 4
    }
  
    // Se llama a la función "xyz" con varios argumentos.
    // "x" será "hey", "y" será "hello", y "z" será el array ["wassup", "goodmorning", "hi", "howdy"].
    xyz("hey", "hello", "wassup", "goodmorning", "hi", "howdy")