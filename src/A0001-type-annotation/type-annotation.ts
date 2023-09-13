/*eslint-disable*/

let nome: string = 'GUGU'; // Qualquer tipo de String

let idade: number = 30; // Qualquer numero

let adulto: boolean = true; // true ou false

let simbolo: symbol = Symbol('qualquer-símbolo');

// let big: bigint = 10n; //Big int

//Arrays
let numberArrays: Array<number> = [1, 2, 3]
let numberArrays2: number[] = [1, 2, 3]
let stringArray: Array<string> = ["a", 'b']
let stringArray2: string[] = ["", "2", '3'];

//Objetos
let pessoa: {nome: string, idade: number, adulto ?: boolean} = {
  idade: 20,
  nome: 'Juca'
}

// funções
function soma(x: number, y:number) : number {
  return x + y;
}

const soma2: (x: number, y: number) => number = (x, y) => x +y;

