//Importar el módulo de Local Storage
import {guardarItem, obtenerItem, eliminarItem} from './Módulo1.js';
//Guardar un objeto en Local Storage
const usuario={nombre: 'Marlon', edad: 24 };
guardarItem('usuario', usuario);
//Obtener el objeto del Local Storage
const usuarioGuardado=obtenerItem('usuario');
console.log('Usuario guardado:', usuarioGuardado);
//Eliminar el objeto del Local Storage
eliminarItem('usuario');
console.log('Usuario eliminado de Local Storage');
