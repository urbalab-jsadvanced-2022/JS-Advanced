// Object PROMISE - Es el mecanismo que permite que ROSALIA comunique a los FANS cuando ha acabado
function loadScript(location) {
  const promise = new Promise(function (resolve, reject) {
    // ROSALIA HACIENDO LA CANCIÓN - Tarda un tiempo
    const scriptElement = document.createElement('script');
    scriptElement.src = location;

    scriptElement.onload = () => {
      resolve(scriptElement.src);
    };

    scriptElement.onerror = () => {
      reject(new Error('Ha habido un error cargando script: ' + location));
    };

    document.head.append(scriptElement);
  });

  return promise;
}

// FAN  - ESTA ES LA FORMA MÁS HABITUAL
loadScript('./primero.js')
  .then((script) => {
    console.log(
      'Soy el FAN 1 - Todo ha ido bien, se ha cargado el script: ' + script
    );
    return loadScript('./segundo.js');
  })
  .then((script) => {
    console.log(
      'Soy el FAN 1 - Todo ha ido bien, se ha cargado el script: ' + script
    );
    return loadScript('./tercero.js');
  })
  .then((script) => {
    console.log(
      'Soy el FAN 1 - Todo ha ido bien, se ha cargado el script: ' + script
    );
  })
  .catch((error) => {
    // Esto se ejecuta cuando el script no se puede cargar
    console.log('Soy el FAN 1 - Ha habido un error');
    console.log(error.message);
  });

console.log('Aún no se ha cargado el script');
