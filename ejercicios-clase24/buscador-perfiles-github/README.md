# 1. El HTML (La Estructura)
Tienes una página HTML básica con un <div> principal que actúa como una "tarjeta" (el contenedor blanco centrado).

Dentro de esa tarjeta, hay:

Un título `<h1>` ("Buscador de Perfiles de GitHub").


Un campo de texto `<input>` con el id="usernameInput" para que el usuario escriba.


Un botón `<button>` con el id="searchButton" para iniciar la búsqueda.


Un `<div>` vacío con id="userInfo" que servirá como contenedor para mostrar los resultados.

Otro `<div>` vacío con id="messageArea" para mostrar mensajes de error (como "usuario no encontrado").


# 2. El JavaScript (La Lógica de la Aplicación)

Aquí es donde ocurre toda la magia, dentro de la etiqueta `<script>`:

Obtener Referencias (Líneas 63-66):

Primero, el script guarda en variables los elementos HTML que necesita controlar (el botón, el input y los contenedores de resultados y mensajes).

Añadir "Escuchadores" de Eventos (Líneas 147-154):

El código le dice al navegador: "Oye, vigila este botón (searchButton)". Cuando alguien haga clic en él, ejecuta la función llamada fetchGitHubUser.

También vigila el campo de texto (usernameInput). Si el usuario presiona la tecla "Enter", también ejecuta la función fetchGitHubUser.

La Función Principal: fetchGitHubUser (Líneas 69-111):


Esta función es async, lo que significa que puede usar await para esperar a que la API responda sin bloquear el navegador.

Limpia: Borra cualquier resultado o error anterior `(userInfoDiv.innerHTML = '').`

Obtiene el valor: Coge el texto del usernameInput y lo limpia (con .trim()).

Valida: Comprueba si el campo está vacío. Si lo está, muestra un error en messageArea y se detiene.

Cargando: Muestra un mensaje de "Cargando...".

Intenta la Petición (try...catch):

try (Intentar): Construye la URL de la API (https://api.github.com/users/...) y usa await fetch() para hacer la llamada.

Espera la respuesta y comprueba si fue exitosa (if (!response.ok)). Si no lo fue (ej. error 404), lanza un error.


Si tiene éxito, convierte la respuesta en un objeto JSON (await response.json()).

Imprime la información requerida en la consola (console.log(...)).

Llama a la función displayUserData(data) para mostrar los datos en la pantalla.

catch (Atrapar error): Si algo en el try falla (como un error 404 o un error de red), se ejecuta este bloque. Limpia el "Cargando..." y muestra el mensaje de error en messageArea.


La Función de Visualización: displayUserData (Líneas 114-144):

Esta función se encarga de "pintar" los datos en la pantalla.

Recibe el objeto data que vino de la API.

Crea Elementos: Usa document.createElement('img'), createElement('h2'), etc., para crear nuevos elementos HTML en la memoria.

Asigna Datos y Estilos: Les da contenido (ej. avatar.src = data.avatar_url) y les añade las clases de Tailwind para que se vean bien (ej. avatar.classList.add(...)).

Añade al DOM: Finalmente, usa userInfoDiv.appendChild(...) para añadir esos nuevos elementos creados a la página, haciéndolos visibles.

En resumen: El usuario escribe un nombre, pulsa "Buscar" (o "Enter"), el script llama a la API de GitHub, espera la respuesta y, si todo va bien, crea y añade los elementos del perfil (avatar, nombre, repos) a la página.