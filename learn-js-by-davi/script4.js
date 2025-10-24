function ejecutar() {
    let parrafoElegido = prompt(" Seleccione Párrafo (1,2,3): "); // Pedimos al usuario que seleccione un párrafo
    let parrafo = document.getElementById(parrafoElegido); // Obtenemos el párrafo seleccionado
    console.log(parrafo.id); // Mostramos en consola el id del párrafo seleccionado
    document.write(parrafo.innerHTML); // Escribimos directamente dentro del body (hay que usar innerHTML)
} 