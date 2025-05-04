export function guardarNombre(nombre) {
    localStorage.setItem('nombreUsuario', nombre);
  }
  
  export function obtenerNombre() {
    return localStorage.getItem('nombreUsuario');
  }
  