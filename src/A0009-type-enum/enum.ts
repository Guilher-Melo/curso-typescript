enum Cores {
  VERMELHO,
  VERDE,
  AZUL = 10,
}

enum Cores {
  ROSA = 5,
  ROXO,
  CINZA = 'CINZA',
}

//console.log(Cores);

function escolhaCor(cor: Cores): void {
  console.log(Cores[cor]);
}

escolhaCor(Cores.ROSA);
