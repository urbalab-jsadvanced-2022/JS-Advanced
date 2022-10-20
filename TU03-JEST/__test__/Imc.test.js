import { calculateImc } from '../imc.js';
describe('Tests de la funcion calculateImc', () => {
  test('que la funcion devuelva false cuando el IMC está por encima de 25', () => {
    const peso = 70;
    const altura = 1.65;
    expect(calculateImc(peso, altura)).toBeFalsy();
  });
  test('que la funcion devuelva true cuando el IMC este por debajo de 25', () => {
    const peso = 40;
    const altura = 1.65;
    expect(calculateImc(peso, altura)).toBeTruthy();
  });
  test('que la funcion devuelva NaN si el input es undefined', () => {
    let varUndefined;
    expect(calculateImc(varUndefined, 2)).toBeNaN();
  });
  test('que la funcion devuelva NaN si el input es null', () => {
    expect(calculateImc(80, null)).toBeNaN();
  });
});
