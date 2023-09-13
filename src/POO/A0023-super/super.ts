export class Pessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
    private idade: number,
    protected cpf: string,
  ) {}

  getIdade(): number {
    return this.idade;
  }

  getCpf(): string {
    return this.cpf;
  }

  getNomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

export class Aluno extends Pessoa {
  constructor(
    nome: string,
    sobrenome: string,
    idade: number,
    cpf: string,
    public sala: string,
  ) {
    super(nome, sobrenome, idade, cpf);
  }
  getNomeCompleto(): string {
    console.log('Fazendo algo antess...');
    const result = super.getNomeCompleto();
    return `Aluno: ${result}`;
  }
}

const pessoa = new Pessoa('Diego', 'Souza', 39, '111-111-111-11');
const aluno = new Aluno('Diego', 'Souza', 39, '111-111-111-11', '001');

console.log(pessoa.getNomeCompleto());
console.log(aluno);
