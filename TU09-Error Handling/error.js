const objecto = null;

// 1er argumento - funcion callback
// 2on argumento - num milisegundos
// ASINCRONO
setTimeout(
  (obj) => {
    try {
      const resultado = obj.num1 + obj.num2;

      console.log(resultado);
    } catch (error) {
      // AQUI PONER CODIGO CUANDO LAS COSAS VAN MAL
      console.log('El sistema no está operativo en estos momentos');
      console.log(error.message);
    }
  },
  3000,
  objecto
);

console.log('TODO HA IDO BIEN');
