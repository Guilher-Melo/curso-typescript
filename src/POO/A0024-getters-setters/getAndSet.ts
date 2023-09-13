export class Pessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
    private idade: number,
    private _cpf: string,
  ) {
    this.cpf = _cpf;
  }

  set cpf(cpf: string) {
    this._cpf = cpf;
  }

  get cpf(): string {
    return this._cpf;
  }
}

const pessoa = new Pessoa('Diego', 'Souza', 39, '111-111-111-11');
pessoa.cpf = '222.211.111-22';

console.log(pessoa.cpf);
