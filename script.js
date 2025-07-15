// Cargar materias marcadas desde localStorage al abrir la página
document.querySelectorAll('.materia').forEach(materia => {
  const nombre = materia.textContent.trim();
  const guardado = localStorage.getItem(nombre);

  if (guardado === 'cursada') {
    materia.classList.add('cursada');
  }

  materia.addEventListener('click', () => {
    materia.classList.toggle('cursada');
    // Guardar o eliminar del localStorage
    if (materia.classList.contains('cursada')) {
      localStorage.setItem(nombre, 'cursada');
    } else {
      localStorage.removeItem(nombre);
    }
  });
});
