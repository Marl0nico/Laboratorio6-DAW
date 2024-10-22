//Módulo para manejar local storage
// Función para guardar un item en Local Storage
export function guardarItem(clave, valor) {
    localStorage.setItem(clave, JSON.stringify(valor)); // Almacena el valor en formato JSON
}
// Función para obtener un item de Local Storage
export function obtenerItem(clave) {
    const valor=localStorage.getItem(clave); // Recupera el valor
    return valor? JSON.parse(valor): null; // Devuelve el valor parseado o null si no existe
}
// Función para eliminar un item de Local Storage
export function eliminarItem(clave) {
    localStorage.removeItem(clave); // Elimina el item del Local Storage
}
