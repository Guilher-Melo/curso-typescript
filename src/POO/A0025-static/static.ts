// Static permite acessar métodos e atributos sem instanciar uma classe

export class Pessoa {
  static idadePadrao: number = 0;
  static cpfPadrao: string = '000.000.000-00';

  constructor(
    public nome: string,
    public sobrenome: string,
    public idade: number,
    public cpf: string,
  ) {}

  metodoNormal(): void {
    console.log(Pessoa.idadePadrao, Pessoa.cpfPadrao);
  }

  static criaPessoa(nome: string, sobrenome: string): Pessoa {
    return new Pessoa(nome, sobrenome, Pessoa.idadePadrao, Pessoa.cpfPadrao);
  }
}

const pessoa = new Pessoa('Diego', 'Souza', 39, '111-111-111-11');
const pessoa2 = Pessoa.criaPessoa('Maria', 'José');

console.log(pessoa);
console.log(pessoa2);
pessoa2.metodoNormal();
