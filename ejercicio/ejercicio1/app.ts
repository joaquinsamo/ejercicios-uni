const boton = document.getElementById('btnSaludar') as HTMLButtonElement;
const inputNombre = document.getElementById('nombre') as HTMLInputElement;
const parrafoSaludo = document.getElementById('saludo') as HTMLParagraphElement;

// Mostrar el nombre al cargar la página
const nombreInicial = inputNombre.value;
parrafoSaludo.textContent = `Hola, ${nombreInicial}`;

// Actualizar cuando se haga click
boton.addEventListener('click', () => {
    const nombre = inputNombre.value;
    parrafoSaludo.textContent = `Hola, ${nombre}`;
});