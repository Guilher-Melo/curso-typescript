// Declaration Merging
export interface Pessoa {
  nome: string;
}

export interface Pessoa {
  sobrenome: string;
  endereço?: string[];
}

const pessoa: Pessoa = {
  nome: 'Fulano',
  sobrenome: 'Silva',
  endereço: ['rua x', 'rua y'],
};

console.log(pessoa);
