import { Jugador } from "./jugador";


describe("Pruebas a Eventos (Event Emitter)", () => {
  let jugador: Jugador;

  beforeEach(() => { jugador = new Jugador(); });

  it('Debe de emitir un nuevo evento cuando realiza una jugada y se queda sin resistencia', () => {

    let nuevaResistencia = 0;

    jugador.resistenciaCambia.subscribe(resistencia => {
      nuevaResistencia = resistencia;
    });

    jugador.realizaJugada(100);

    expect(nuevaResistencia).toBe(0)

  });

  it('Debe de emitir un nuevo evento cuando realiza una jugada y su resistencia debe ser <= 50', () => {

    let nuevaResistencia = 0;

    jugador.resistenciaCambia.subscribe(resistencia => {
      nuevaResistencia = resistencia;
    });

    jugador.realizaJugada(50);

    expect(nuevaResistencia).toBeLessThanOrEqual(50);

  });

});

