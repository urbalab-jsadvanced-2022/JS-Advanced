function Calculator(a, b) {
  this.num1 = a;
  this.num2 = b;
  this.sum = function () {
    return this.num1 + this.num2;
  };
}

const calculator = new Calculator(10, 5);
console.log(calculator.sum());
