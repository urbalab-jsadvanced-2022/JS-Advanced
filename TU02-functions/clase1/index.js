// // let coche = 'Volkswagen';
// console.log(suma(3, 4));

// // // Argumento
// // holaMundo();

// // Parámetros
// function printTexto(texto = 'Hola Mundo', num1, num2) {
//   console.log(texto);
//   return num1 + num2;
// }

// // Operacion vs Expresion vs Sentencia
// // let nuevoTexto = 'a' + 'b';

// // Function Expresion
// let imprimeTexto = printTexto;

// imprimeTexto('Hola Xavi');
// printTexto('Hola Xavi');

// if (a > 5) {
//   let suma = function (num1, num2) {
//     return num1 + num2;
//   };
// }

// function suma2(num1, num2) {
//   return num1 + num2;
// }

// CALLBACK

function operar(f1, num1, num2) {
  // Validar num1
  // Valido num2
  return f1(num1, num2);
}

//Decouple
operar(
  function (num1, num2) {
    return num2 - num1;
  },
  100,
  50
);
operar(suma, 100, 50);

function resta(num1, num2) {
  return num2 - num1;
}
