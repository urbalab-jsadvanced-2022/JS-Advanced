// // a y b -> Parámetros funcion SUMA
// function suma(a,b){
//   return a+b;
// }

// // 3 y 5 son los Argumentos)
// suma(3,5)

// // ... -> Argumento Funcion

// // ... -> Parámetro Funcion

// // Operador SPREAD
// suma(...xxx);

// // Operador REST
// function suma(...yyy) {

// }

// console.log(Math.max(5, 8, 10, 2, 25));

function suma(...listaNumeros) {
  console.log(listaNumeros);
  let sum = 0;
  for (let numero of listaNumeros) {
    sum += numero;
  }
  return sum;
}

//console.log(suma(5, 8, 9, 10, 11));
//suma(5, 8, 9, 10, 11);

// const num1 = 2;
// const num2 = 2;
// const arrayNums = [2, 2, 2, 2, 2];
// const arrayNums2 = [3, 3, 3];
// console.log(suma(...arrayNums, ...arrayNums2));

function sum2(a, b, c) {
  return a + b + c;
}

const listaNumeros = [1, 2, 3, 4, 5];
console.log(sum2(...listaNumeros));
