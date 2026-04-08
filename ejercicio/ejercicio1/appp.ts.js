"use strict";
const boton = document.getElementById('btnSaludar');
const inputNombre = document.getElementById('nombre');
const parrafoSaludo = document.getElementById('saludo');
boton.addEventListener('click', () => {
    const nombre = inputNombre.value;
    parrafoSaludo.textContent = `Hola, ${nombre}`;
});
