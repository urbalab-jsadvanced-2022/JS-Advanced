class CalculatorClass {
  // field
  num3 = 10;

  constructor(a, b) {
    // Data Property
    this.num1 = a;
    this.num2 = b;
  }

  sum() {
    return this.num1 + this.num2 + this.num3;
  }
}

let calc = new CalculatorClass(10, 5);
console.log(calc.sum());

function Calculator(a, b) {
  this.num1 = a;
  this.num2 = b;
  this.sum = function () {
    return this.num1 + this.num2;
  };
}

// const calculator = new Calculator(10, 5);
// console.log(calculator.sum());

// // MESA - Clase
// - numPatas
// - Uso
// - Color

// // Objeto ->
// num = 2
// Uso = dar clase
// COlor = gris

// Objeto -> Otra mesa de la sala
