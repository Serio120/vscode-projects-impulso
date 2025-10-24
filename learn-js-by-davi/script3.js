function ejecutar() {
    let parrafos = document.getElementsByTagName("p"); // Obtiene todos los elementos <p> del documento
    for (let i = 0; i < parrafos.length; i++) { // Itera sobre cada elemento <p>
        let parrafo = parrafos[i].innerHTML; // Obtiene el contenido HTML del párrafo actual
        alert(parrafo); // Muestra una alerta con el contenido del párrafo
    }
} 