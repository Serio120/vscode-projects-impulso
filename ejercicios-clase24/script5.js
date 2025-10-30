// Define a function named 'f' that takes three arguments:
// 'x' is a required argument.
// 'y' has a default value of 3 if not provided.
// 'z' has a default value of 22 if not provided.
function f(x, y = 3, z = 22) {
  // Return the sum of x, y, and z.
  return x + y + z;
}

// Call the function 'f' with only one argument.
// x will be 3, y will be 3 (default), and z will be 22 (default).
// The result (3 + 3 + 22 = 28) will be printed to the console.
console.log(f(3));

// Call the function 'f' with two arguments.
// x will be 3, y will be 0, and z will be 22 (default).
// The result (3 + 0 + 22 = 25) will be printed to the console.
console.log(f(3, 0));

// Call the function 'f' with three arguments.
// x will be 3, y will be 0, and z will be 0.
// The result (3 + 0 + 0 = 3) will be printed to the console.
console.log(f(3, 0, 0));

// Define a function named 'registro' that takes four arguments:
// 'nombre' and 'dni' are required arguments.
// 'email' has a default value of "Sin email" if not provided.
// 'telefono' has a default value of "Sin teléfono" if not provided.
function registro (nombre, dni, email="Sin email", telefono="Sin teléfono") {
        // Create an array named 'datos' containing the provided arguments.
        var datos = [nombre, dni, email, telefono]
        // Display an alert box with a message including the registered data.
        alert(`Ha sido registrado con los datos:
 ${datos}`);
    }
// Call the function 'registro' with two arguments.
// 'nombre' will be "Davinia de la Rosa", 'dni' will be "11111111A",
// 'email' will be "Sin email" (default), and 'telefono' will be "Sin teléfono" (default).
registro("Davinia de la Rosa", "11111111A");
