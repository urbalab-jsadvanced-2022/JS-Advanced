function Calculator(a, b) {
  this.num1 = a;

  this.suma = function () {
    return this.num1;
  };
}

let calc = new Calculator(10, 5);

let resultado = calc.suma();
