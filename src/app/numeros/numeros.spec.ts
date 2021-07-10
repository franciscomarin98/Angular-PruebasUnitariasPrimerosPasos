import { increment } from './numero';

describe('Pruebas de numeros', () => {
  it('La funcion "increment" debe retornar 100 si el numero es mayor que 100', () => {
    const result = increment(300);
    expect(result).toBe(100);
  })

  it('La funcion "increment" debe retornar el numero ingresado + 1, si el numero es menor que 100', () => {
    const result = increment(50);
    expect(result).toBe(51);
  })
})
