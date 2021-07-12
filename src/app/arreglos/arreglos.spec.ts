import { obtenerRobots } from './arreglos';

describe('Pruebas de arreglos', () => {
  it('Debe de retonar al menos de items', () => {
    const result = obtenerRobots();
    expect(result.length).toBeGreaterThanOrEqual(3);
  });


  it('El array de robots debe contener a "Visión" y "Ultron', () => {
    const result = obtenerRobots();
    expect(result).toContain('Ultron');
    expect(result).toContain('Visión');
  })
});
