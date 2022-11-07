console.log('(1) Mi programa empieza a ejecutarse');

let promise = fetch('https://jsonplaceholder2.typicode.com/xavi.html');

console.log('(2) Se ha lanzado el fetch');

// Promesa CON THEN
// PASO 1 - obtener el response
promise
  .then((response) => {
    console.log('(4) El servidor me ha contestado');
    console.log(response);

    if (response.ok) {
      // PASO 2 - obtener el body
      let promiseBody = response.json();

      return promiseBody;
    } else {
      throw new Error('Error en la petición');
    }
  })
  .then((data) => {
    // AQUI YA TENGO EL BODY - que es la variable DATA
    //console.log(data);

    if (!data.completed) {
      console.log(data.title);
    }
  })
  .catch((error) => {
    console.log(error.name);
    console.log(error.message);
  });

console.log('(3) Mi programa sigue ejecutando cosas');

// await (async)
