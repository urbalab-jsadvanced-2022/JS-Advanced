function loadScript(location, afterScript, errorHandler) {
  const scriptElement = document.createElement('script');
  scriptElement.src = location;

  scriptElement.onload = (event) => {
    afterScript();
  };

  scriptElement.onerror = (event) => {
    errorHandler();
  };

  document.head.append(scriptElement);
}

// Callback function
loadScript(
  // PRIMER ARGUMENTO - El script a cargar
  './primero.js',
  // SEGUNDO ARGUMENTO - La funcion a ejecutar cuando el script se haya cargado
  () => {
    console.log('Todo ha ido bien');
  },
  // TERCER ARGUMENTO - La funcion a ejecutar SI la carga del script falla
  () => {
    // Esto se ejecuta cuando el script no se puede cargar
    console.log('Ha habido un error');
  }
);
