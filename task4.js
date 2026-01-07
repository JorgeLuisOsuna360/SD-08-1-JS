export class Player {
  constructor(name, level) {
    this.name = name;
    this.level = level;
  }

  info() {
    console.log(`${this.name} has reached Level ${this.level}!`);
  }

  levelUp() {
    this.level++;
  }

}

const jugador1 = new Player("Mario", 5);
jugador1.info();

jugador1.levelUp();
jugador1.info();

const jugador2 = new Player("Tara", 6);
jugador2.info();