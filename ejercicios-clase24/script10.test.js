const { tieneString, resultado } = require('./script10.js');

// Pruebas para la función tieneString
console.log('Corriendo pruebas para tieneString...');
console.assert(tieneString(1, 2, 3) === false, 'Test 1 Fallido: Debería devolver false para [1, 2, 3]');
console.assert(tieneString(1, 'Hola', 3) === true, 'Test 2 Fallido: Debería devolver true para [1, "Hola", 3]');
console.assert(tieneString('Adios', 5, 5) === true, 'Test 3 Fallido: Debería devolver true para ["Adios", 5, 5]');
console.assert(tieneString(true, false, 1) === false, 'Test 4 Fallido: Debería devolver false para [true, false, 1]');
console.log('Pruebas para tieneString completadas.');

// Pruebas para la variable resultado
console.log('Corriendo pruebas para el resultado final...');
const expectedResult = ['Hola', 'Adios'];
console.assert(JSON.stringify(resultado) === JSON.stringify(expectedResult), 'Test 5 Fallido: El resultado final no es el esperado');
console.log('Pruebas para el resultado final completadas.');

console.log('Todas las pruebas han pasado.');
