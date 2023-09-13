const player = {
  name: 'Diego' as const,
  lastName: 'Souza',
};

console.log(player);

function chooseColor(cor: 'Red' | 'Blue' | 'Yellow'): string {
  return cor;
}

console.log(chooseColor('Red'));
