// Variables para almacenar los números y su suma
let numeros = [];
let suma = 0;
let indice = 0;
let intervalo;

// Función para generar una serie de números aleatorios
function generarNumeros() {
  numeros = Array.from({ length: Math.floor(Math.random() * 8) + 3 }, () =>
    Math.floor(Math.random() * 10) + 1
  );
  suma = numeros.reduce((acc, num) => acc + num, 0);
  indice = 0;

  // Mostrar números uno por uno
  document.getElementById("numeros").innerText = "Preparado...";
  document.getElementById("comenzar").classList.add("hidden");
  document.getElementById("listo").classList.add("hidden");
  document.getElementById("revisar").classList.add("hidden");
  document.getElementById("reiniciar").classList.add("hidden");
  document.getElementById("resultado").classList.add("hidden");
  document.getElementById("serie_completa").classList.add("hidden");

  // Iniciar el intervalo para mostrar los números
  intervalo = setInterval(mostrarNumero, 1000);
}

// función para mostrar números uno por uno causa
function mostrarNumero() {
  if (indice < numeros.length) {
    document.getElementById("numeros").innerText = numeros[indice];
    indice++;
  } else {
    clearInterval(intervalo); // Detener el intervalo 
    document.getElementById("numeros").innerText = "Serie completada.";
    document.getElementById("listo").classList.remove("hidden");
    document.getElementById("revisar").classList.remove("hidden");
    document.getElementById("reiniciar").classList.remove("hidden");
  }
}

// función para mostrar el resultado de la suma
function mostrarResultado() {
  document.getElementById("resultado").innerText = `Resultado: ${suma}`;
  document.getElementById("resultado").classList.remove("hidden");
}

// función para revisar toda la serie de números
function revisarSerie() {
  document.getElementById("serie_completa").innerText = `Serie completa: ${numeros.join(", ")}`;
  document.getElementById("serie_completa").classList.remove("hidden");
}

// Función para reiniciar todo
function reiniciar() {
  numeros = [];
  suma = 0;
  indice = 0;
  clearInterval(intervalo); // Detener cualquier intervalo activo

  // Restablecer los elementos de la página
  document.getElementById("numeros").innerText = "una mas";
  document.getElementById("comenzar").classList.remove("hidden");
  document.getElementById("listo").classList.add("hidden");
  document.getElementById("revisar").classList.add("hidden");
  document.getElementById("reiniciar").classList.add("hidden");
  document.getElementById("resultado").classList.add("hidden");
  document.getElementById("serie_completa").classList.add("hidden");
}

// eventos para los botones
document.getElementById("comenzar").addEventListener("click", generarNumeros);
document.getElementById("listo").addEventListener("click", mostrarResultado);
document.getElementById("revisar").addEventListener("click", revisarSerie);
document.getElementById("reiniciar").addEventListener("click", reiniciar);
