type TemNome = { nome: string };
type TemSobrenome = { sobrenome: string };
type TemIdade = { idade: number };

type Pessoa = TemNome & TemSobrenome & TemIdade;

const person: Pessoa = {
  nome: 'Luiza',
  sobrenome: 'Mel',
  idade: 20,
};

console.log(person);

type AB = 'A' | 'B';
type AC = 'A' | 'C';
type AD = 'A' | 'D';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type intersection = AB & AC & AD;
