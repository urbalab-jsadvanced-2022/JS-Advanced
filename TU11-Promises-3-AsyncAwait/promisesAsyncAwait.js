async function programa() {
  // CON ASYNC
  async function helloWorld1() {
    return 'HelloWorld1';
  }

  async function getNumber() {
    return 1;
  }

  try {
    const resultado = await helloWorld1();
    console.log(resultado);

    const number = await getNumber();
    console.log(number);
  } catch (error) {
    console.log(error);
  }
}

programa();

// CON PROMESAS (código equivalente)
function helloWorld2() {
  return new Promise(function (resolve, reject) {
    resolve('HelloWorld2');
  });
}

const value = helloWorld2();

value
  .then((mensaje) => {
    console.log(mensaje);
    return 1;
  })
  .then((number) => {
    console.log(number);
  })
  .catch((error) => {
    console.log(error);
  });
