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
loadScript('./primero.js', () => {
  loadScript(
    './segundo.js',
    () => {
      loadScript(
        './tercero.js',
        () => {
          console.log(suma(2, 3));
        },
        () => {
          console.log('Ha habido un error al cargar el tercer script');
        }
      );
    },
    () => {
      console.log('Ha habido un error al cargar el segundo script');
    }
  );
});

loadScript(
  './segundo.js',
  () => {
    console.log('El script se ha cargado');
  },
  () => {
    console.log('No puedo cargar el script');
  }
);
