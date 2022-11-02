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

const promise = loadScript('./primero.js');

// FAN 1
promise.then(
  () => {
    console.log('Soy el FAN 1 - Todo ha ido bien');
  },
  () => {
    // Esto se ejecuta cuando el script no se puede cargar
    console.log('Soy el FAN 1 - Ha habido un error');
  }
);

// FAN 2 - ESTA ES LA FORMA MÁS HABITUAL
promise
  .then(() => {
    console.log('Soy el FAN 2 - Todo ha ido bien');
  })
  .catch(() => {
    // Esto se ejecuta cuando el script no se puede cargar
    console.log('Soy el FAN 2 - Ha habido un error');
  });

// FAN 3 - ESTA ES LA FORMA MÁS HABITUAL
document.querySelector('span').textContent = 'Loading';
promise
  .then((nombreScript) => {
    console.log(
      'Soy el FAN 3 - Todo ha ido bien cargando el script = ' + nombreScript
    );
  })
  .finally(() => {
    console.log('Soy el FAN 3 - Y este código se ejecuta siempre');
    document.querySelector('span').textContent = '';
  })
  .catch(() => {
    // Esto se ejecuta cuando el script no se puede cargar
    console.log('Soy el FAN 3 - Ha habido un error');
  });

promise
  .then(() => {
    console.log('Soy el FAN 4 - Todo ha ido bien');
    return loadScript('./segundo.js');
  })
  .then(() => {
    console.log('Soy el FAN 4 - Todo ha ido bien');
    return loadScript('./tercero.js');
  })
  .then(() => {
    console.log('Soy el FAN 4 - Todo ha ido bien');
    console.log('YA NO HAY NADA MÁS QUE CARGAR');
  })
  .catch(() => {
    // Esto se ejecuta cuando el script no se puede cargar
    console.log('Soy el FAN 4 - Ha habido un error');
  });

console.log('Aún no se ha cargado el script');
