import { guardarNombre, obtenerNombre } from './storage.js';

const nombreInput = document.getElementById('nombreInput');
const guardarBtn = document.getElementById('guardarBtn');
const saludo = document.getElementById('saludo');

// Mostrar el nombre guardado si existe
const nombreGuardado = obtenerNombre();
if (nombreGuardado) {
  saludo.textContent = `¡Hola de nuevo, ${nombreGuardado}!`;
}

// Evento para guardar nombre
guardarBtn.addEventListener('click', () => {
  const nombre = nombreInput.value.trim();
  if (nombre) {
    guardarNombre(nombre);
    saludo.textContent = `¡Hola, ${nombre}! (nombre guardado)`;
  }
});
