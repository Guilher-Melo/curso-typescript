let x: unknown;

x = 'a';
x = 10;
const y = 100;

// Precisar checar o tipo antes

if (typeof x === 'number') console.log(x + y);
