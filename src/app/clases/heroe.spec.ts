import { Heore } from './heroe';



describe('Pruebas de clases', () => {

  const heroe = new Heore();

  // Ciclo de vida de las pruebas
  // beforeEach() -> Se ejecuta antes de que ejecuten todas las pruebas, solo se ejecuta una vez
  // beforeEach()
  // afterAll() -> Lo mismo que el beforeAll pero despues
  // afterEach() -> se ejecuta cada vez que se ejecuta una prueba


  beforeAll(() => {
    console.log('BeforeAll');
  })
  beforeEach(() => {
    console.log('BeforeEach');
    heroe.hp = 100;
  })
  afterAll(() => {
    console.log('AfterAll');
  })
  afterEach(() => {
    console.log('AfterEach');
  })



  it('Debe retornar 80 de hp si recibe 20 de daño', () => {
    const result = heroe.recibeAtaque(20);
    expect(result).toBe(80);
  });

  it('Debe retornar 50 de hp si recibe 50 de daño', () => {
    const result = heroe.recibeAtaque(50);
    expect(result).toBe(50);
  });

  it('Debe retornar 0 de hp si recibe 100 de daño', () => {
    const result = heroe.recibeAtaque(100);
    expect(result).toBe(0);
  });

})
