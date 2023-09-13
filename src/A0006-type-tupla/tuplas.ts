// Define o tamanho e os tipos
const dadosCLientes: [number, string] = [1, 'Guilherme'];
const dadosCLientes2: readonly [number, string] = [1, 'Souza'];

console.log(dadosCLientes);
console.log(dadosCLientes2);

// ReadOnly array
const array: ReadonlyArray<string> = ['lala', 'pou', 'papa'];

console.log(array);
