import { mensaje } from './string';
describe('String File', () => {

  it('La funcion "mensaje" debe retornar un string', () => {
    const result = mensaje('ESTO ES UN TEST');
    expect(typeof result).toBe('string');
  })

  it('La funcion "mensaje" debe retornar un string incluyendo el parametro que se le envia', () => {
    const parametro = 'Este es otro test';
    const result = mensaje(parametro);
    expect(result).toContain(parametro);
  })

})
