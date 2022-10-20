function calculateImc(weight, height) {
  if (weight && height) {
    let imc = weight / height ** 2;
    return imc < 25;
  }
  return NaN;
}
export { calculateImc };
