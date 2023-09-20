export abstract class Personagem {
  protected abstract emoji: string;

  constructor(
    protected nome: string,
    protected ataque: number,
    protected vida: number,
  ) {}

  atacar(personagem: Personagem): void {
    this.bordao();
    personagem.perderVida(this.ataque);
  }

  perderVida(forcaAtaque: number): void {
    this.vida -= forcaAtaque;
    console.log(`${this.emoji} -> ${this.nome} agora tem ${this.vida} de vida`);
  }

  abstract bordao(): void;
}

export class Guerreira extends Personagem {
  protected emoji: string = '\u{1f9dd}';
  bordao(): void {
    console.log(this.emoji + ' ATACARRRR');
  }
}
export class Monstro extends Personagem {
  protected emoji: string = '\u{1f9df}';
  bordao(): void {
    console.log(this.emoji + ' UOOOOOOOR');
  }
}

const gurreira = new Guerreira('Guerreira', 100, 500);
const monstro = new Monstro('Monstro', 60, 1000);

gurreira.atacar(monstro);
monstro.atacar(gurreira);
