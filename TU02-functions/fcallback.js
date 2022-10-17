sumar(5, 6, (resultado) => {
  console.log(resultado);
  return 0;
});

function alertResult(resultado) {
  alert(resultado);
}

function sumar(a, b, show) {
  console.log(show);
  const resultado = a + b;
  show(resultado);
}
