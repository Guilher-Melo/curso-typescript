// Array<T> - T[]

export function multiplicaArgs(...args: Array<number>): number {
  return args.reduce((ac, valor) => ac * valor, 1);
}
export function concatenaArgs(...args: string[]): string {
  return args.reduce((ac, valor) => ac + valor);
}

const result = multiplicaArgs(2, 2, 4);
const concatenado = concatenaArgs('a', 'b', 'c');

console.log(result);
console.log(concatenado);
