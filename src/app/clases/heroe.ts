

export class Heore {
  hp: number;

  constructor() {
    this.hp = 100;
  }


  recibeAtaque(nivelAtaque: number) {

    if (nivelAtaque >= this.hp) {
      this.hp = 0;
    } else {
      this.hp -= nivelAtaque;
    }

    return this.hp;
  }
}
