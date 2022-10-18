import { avg } from '../avg.js';

describe('Tests de la funcion Avg', () => {
  test('que la media de dos numeros enteros es correcta', function () {
    // Definir Input
    const a = 10;
    const b = 6;

    // Definir Resultado Esperado
    const expected = 8;

    // Validaré Resultado // assert
    const result = avg(a, b);
    expect(result).toEqual(expected);
  });
  test('que la media de dos numeros con decimales es correcta', () => {
    const a = 7.5;
    const b = 13.2;
    expect(avg(a, b)).toEqual(10.35);
  });
  test('que la media de dos numeros negativos NaN', () => {
    const a = -2;
    const b = -6;
    expect(avg(a, b)).toBeNaN();
  });
  test('que la media de un valor alfanumerico da como resultado 0', () => {
    expect(avg(2, 'a')).toEqual(0);
  });
});
