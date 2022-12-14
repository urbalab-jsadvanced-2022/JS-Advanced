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
    loadScript(
      // 1er
      './segundo.js',
      // 2o
      () => {
        // El script segundo.js se ha cargado
        loadScript(
          // 1er
          './tercero.js',
          // 2o
          () => {
            // El script tercero.js se ha cargado
          },
          // 3o
          () => {
            // El script tercero.js ha fallado
            // QUE HACES???
          }
        );
      },
      // 3er
      () => {
        // El script segundo.js ha fallado
      }
    );
  },
  // TERCER ARGUMENTO - La funcion a ejecutar SI la carga del script falla
  () => {
    // Esto se ejecuta cuando el script no se puede cargar
    console.log('Ha habido un error');
  }
);
