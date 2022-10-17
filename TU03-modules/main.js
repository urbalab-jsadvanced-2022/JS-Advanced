// BROWSER
import operator from './calculadora.js';

let resultado1 = operator(10, 2, (a, b) => a + b);
// RESULTADO ESPERADO -> 12
let resultado2 = operator(10, -2, (a, b) => a + b);
// RESULTADO ESPERADO -> 8

// let resultado2 = operator(10, 2, (a, b) => a - b);
// let resultado3 = operator(10, 2, (a, b) => a * b);
// let resultado4 = operator(10, 2, (a, b) => a / b);

console.log(resultado1);
console.log(resultado2);
console.log(resultado3);
console.log(resultado4);
// console.log(PI);
