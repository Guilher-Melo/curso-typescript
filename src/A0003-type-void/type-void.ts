function noReturn(...args: string[]): void {
  console.log(args.join(' '));
}

noReturn('Hey', 'Wait');

const pessoa = {
  nome: 'Diego',
  sobrenome: 'Souza',

  obterNome(): void {
    console.log(this.nome + ' ' + this.sobrenome);
  },
};

pessoa.obterNome();

export { pessoa };
