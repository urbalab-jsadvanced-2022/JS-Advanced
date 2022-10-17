// Leer input EDAD
// Leer input TIPO_VEHICULO
function getFamilia() {
  return document.getElementById('familia2').value;
}

// LLAMO LN
const coste = calcularSeguro(getFamilia, edad, tipoVehiculo);

// Muestro resultado en pantall
