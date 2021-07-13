import { EventEmitter } from "@angular/core";


export class Jugador {
  resistencia: number;
  resistenciaCambia = new EventEmitter<number>();

  constructor() {
    this.resistencia = 100;
  }


  realizaJugada(nivelCansancio: number) {

    if (nivelCansancio >= this.resistencia) {
      this.resistencia = 0;
    } else {
      this.resistencia -= nivelCansancio;
    }

    this.resistenciaCambia.emit(this.resistencia);
  }
}
