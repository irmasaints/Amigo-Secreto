// Challenge Amigo Secreto by Irma Nayeli Sánchez Santos

// Crear el arreglo vacío para almacenar los nombres
let amigos = [];

// Definir la función para agregar amigos
function agregarAmigo() {
    // Capturar el valor del campo de entrada
    let inputNombre = document.getElementById("amigo");
    let nombre = inputNombre.value.trim(); // Eliminar espacios en blanco al inicio y al final

    // Validar que la entrada no esté vacía
    if (nombre === "") {
        alert("Por favor, inserte un nombre válido.");
        return; // Salimos de la función si el nombre no es válido
    }

    // Agregar el nombre al arreglo
    amigos.push(nombre);

    // Limpiar el campo de entrada después de agregar el nombre
    inputNombre.value = "";

    actualizarListaAmigos();
}

function actualizarListaAmigos() {
    // Obtener el elemento de la lista donde se mostrarán los amigos
    let lista = document.getElementById("listaAmigos");

    // Limpiar la lista existente para evitar duplicados
    lista.innerHTML = "";

    // Recorrer el arreglo de amigos y crear elementos <li> para cada nombre
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li"); // Crear un nuevo elemento <li>
        li.textContent = amigos[i]; // Asignar el nombre del amigo como texto
        lista.appendChild(li); // Agregar el <li> a la lista
    }
}

function sortearAmigo() {
    // Validar que haya al menos un amigo en la lista
    if (amigos.length === 0) {
        alert("No hay amigos en la lista. Agrega al menos uno antes de sortear.");
        return;
    }

    // Generar un índice aleatorio dentro del rango del array
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre sorteado
    let amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado en la lista de resultados
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>El amigo secreto sorteado es: <strong>${amigoSorteado}</strong></li>`;
}


