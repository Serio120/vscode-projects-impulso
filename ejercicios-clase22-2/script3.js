//<p>Hola</p>
//Pido al usuario que ingrese un texto
let textoUser = prompt("Ingrese un texto: ");
//1. Creo un párrafo
let etiquetaP = document.createElement("p");
//2. Creo un nodo de texto con el contenido "Hola"
let contenido = document.createTextNode(textoUser);
//3. Añado el nodo de texto al párrafo
etiquetaP.appendChild(contenido);
//4. Añado el paráfo a el div con id "miDiv"
document.getElementById("miDiv").appendChild(etiquetaP);