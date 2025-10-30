// Primero, definimos las funciones de callback que queremos probar.
function exitoCallback(resultado) {
  console.log("Archivo creado en la ruta " + resultado);
}
function falloCallback(error) {
  console.log("Error generando archivo " + error);
}

// --- Simulación de la función crearArchivoAsync ---

/**
 * Simula una función asíncrona que "crea un archivo".
 * @param {object} configuracion - Un objeto de configuración. Si `configuracion.debeFallar` es true, la promesa se rechazará.
 * @param {function} [callbackExito] - Callback para cuando la operación tiene éxito.
 * @param {function} [callbackFallo] - Callback para cuando la operación falla.
 * @returns {Promise<string>} Una promesa que se resuelve con la ruta del archivo o se rechaza con un error.
 */
function crearArchivoAsync(configuracion, callbackExito, callbackFallo) {
  console.log('Iniciando la creación del archivo...');

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (configuracion.debeFallar) {
        const error = 'Permisos insuficientes';
        console.log('La operación ha fallado.');
        // Si se usan callbacks, llamamos al de fallo
        if (callbackFallo) {
          callbackFallo(error);
        }
        // Rechazamos la promesa
        reject(error);
      } else {
        const resultado = '/ruta/simulada/mi-archivo.txt';
        console.log('La operación ha tenido éxito.');
        // Si se usan callbacks, llamamos al de éxito
        if (callbackExito) {
          callbackExito(resultado);
        }
        // Resolvemos la promesa
        resolve(resultado);
      }
    }, 1000); // Simulamos un retardo de 1 segundo
  });
}


// --- Pruebas ---

console.log('--- Iniciando Pruebas ---');

// Objeto de configuración para los tests
const configuracionExito = { debeFallar: false, nombre: 'mi-archivo.txt' };
const configuracionFallo = { debeFallar: true, nombre: 'archivo-protegido.txt' };

/**
 * Función de ayuda para probar la salida en consola.
 * Redirige temporalmente console.log para capturar lo que se imprime.
 */
function testearSalidaConsola(descripcion, test) {
    console.log(`\n--- Test: ${descripcion} ---`);
    const logs = [];
    const originalLog = console.log;
    console.log = (mensaje) => {
        logs.push(mensaje);
        originalLog(mensaje); // Opcional: seguir mostrando en consola durante el test
    };

    const afirmar = (condicion, mensaje) => {
        if (!condicion) {
            console.error(`❌ FALLO: ${mensaje}`);
        } else {
            originalLog(`✅ ÉXITO: ${mensaje}`);
        }
    };

    const fin = () => {
        console.log = originalLog; // Restaurar console.log
    };

    test(afirmar, logs, fin);
}

// Test 1: Probar el uso de callbacks con éxito
testearSalidaConsola('Callbacks con Éxito', (afirmar, logs, fin) => {
    crearArchivoAsync(configuracionExito, exitoCallback, falloCallback);

    setTimeout(() => {
        afirmar(
            logs.includes('Archivo creado en la ruta /ruta/simulada/mi-archivo.txt'),
            'Se llamó a exitoCallback con el mensaje correcto.'
        );
        fin();
    }, 1500);
});

// Test 2: Probar el uso de callbacks con fallo
testearSalidaConsola('Callbacks con Fallo', (afirmar, logs, fin) => {
    crearArchivoAsync(configuracionFallo, exitoCallback, falloCallback);

    setTimeout(() => {
        afirmar(
            logs.includes('Error generando archivo Permisos insuficientes'),
            'Se llamó a falloCallback con el mensaje de error correcto.'
        );
        fin();
    }, 1500);
});

// Test 3: Probar el uso de promesas con .then() con éxito
testearSalidaConsola('Promesas con .then() - Éxito', (afirmar, logs, fin) => {
    crearArchivoAsync(configuracionExito).then(exitoCallback, falloCallback);

    setTimeout(() => {
        afirmar(
            logs.includes('Archivo creado en la ruta /ruta/simulada/mi-archivo.txt'),
            'La promesa se resolvió y llamó a exitoCallback.'
        );
        fin();
    }, 1500);
});

// Test 4: Probar el uso de promesas con .then() con fallo
testearSalidaConsola('Promesas con .then() - Fallo', (afirmar, logs, fin) => {
    crearArchivoAsync(configuracionFallo).then(exitoCallback, falloCallback);

    setTimeout(() => {
        afirmar(
            logs.includes('Error generando archivo Permisos insuficientes'),
            'La promesa se rechazó y llamó a falloCallback.'
        );
        fin();
    }, 1500);
});

// Test 5: Probar el uso de promesas con .catch() para el fallo
testearSalidaConsola('Promesas con .catch() - Fallo', (afirmar, logs, fin) => {
    crearArchivoAsync(configuracionFallo)
        .then(exitoCallback)
        .catch(falloCallback);

    setTimeout(() => {
        afirmar(
            logs.includes('Error generando archivo Permisos insuficientes'),
            'La promesa se rechazó y fue capturada por .catch().'
        );
        fin();
    }, 1500);
});
