import { usuarioAutenticado } from './bolean';



describe('Prueba de booleans', () => {
  it('Debe verificar que el usuario este autenticado', () => {
    const result = usuarioAutenticado();
    expect(result).toBeTruthy();
    // expect(result).toBeFalsy();
    // expect(result).not.toBeTruthy();
    // expect(result).not.toBeFalsy();
  })
});
