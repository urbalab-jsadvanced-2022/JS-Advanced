function suma(obj) {
  if (obj.a === null) {
    throw new Error('a es nulo');
  }

  return obj.a + obj.b;
}

function intentaSumar(obj) {
  try {
    const resultado = suma(obj);

    console.log(resultado);
  } catch (error) {
    if (error.name === 'Error') {
      console.log('Bobo, has llamado a suma con el 1er parametro a null');
    } else {
      throw error;
    }
  }
}

const obj = null;

try {
  intentaSumar(obj);
} catch (error) {
  console.log('Error inesperado');
}
