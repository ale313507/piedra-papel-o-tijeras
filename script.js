
let nombreJugador = "";

function empezarJuego() {
    // Obtener el nombre del jugador
    nombreJugador = document.getElementById("nombre").value;

    // Verificar si el nombre no está vacío
    if (nombreJugador.trim() !== "") {
        // Mostrar el saludo y el juego, ocultar la sección de nombre
        document.getElementById("saludo").textContent = `Hola, ${nombreJugador}, elige tu jugada:`;
        document.getElementById("name-section").style.display = "none";
        document.getElementById("game").style.display = "block";
    } else {
        alert("Por favor, ingresa tu nombre");
    }
}

function jugar(eleccionUsuario) {
    const opciones = ["Piedra", "Papel", "Tijera"];
    const eleccionComputadora = opciones[Math.floor(Math.random() * 3)];
    let resultado = "";

    if (eleccionUsuario === eleccionComputadora) {
        resultado = "Empate";
    } else if (
        (eleccionUsuario === "Piedra" && eleccionComputadora === "Tijera") ||
        (eleccionUsuario === "Papel" && eleccionComputadora === "Piedra") ||
        (eleccionUsuario === "Tijera" && eleccionComputadora === "Papel")
    ) {
        resultado = "¡Ganaste!";
    } else {
        resultado = "Perdiste";
    }

    // Mostrar el resultado con el nombre del jugador
    document.getElementById("resultado").innerHTML = `
        ${nombreJugador}, tú elegiste: ${eleccionUsuario} <br>
        Computadora eligió: ${eleccionComputadora} <br>
        ${resultado}
    `;
}
