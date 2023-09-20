interface TipoNome {
  nome: string;
}
interface TipoSobrenome {
  sobrenome: string;
}
interface TipoNomeCompleto {
  nomeCompleto(): string;
}

//type TipoPessoa = TipoNome & TipoSobrenome & TipoNomeCompleto;
interface TipoPessoa2 extends TipoNome, TipoSobrenome, TipoNomeCompleto {}

export class Pessoa implements TipoPessoa2 {
  constructor(
    public nome: string,
    public sobrenome: string,
  ) {}

  nomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

const pessoa = new Pessoa('Diego', 'Souza');

const pessoa2: TipoPessoa2 = {
  nome: 'Paulo',
  sobrenome: 'Miranda',
  nomeCompleto: function (): string {
    return this.nome + ' ' + this.sobrenome;
  },
};

console.log(pessoa.nomeCompleto());
console.log(pessoa2);
