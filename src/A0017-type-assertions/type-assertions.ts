// Condicional
const body1 = document.querySelector('body');
if (body1) body1.style.background = 'red';

// Type Assertion
const body2 = document.querySelector('body') as HTMLBodyElement;
body2.style.background = 'red';

//HTMLElement
const input = document.querySelector('.input') as HTMLInputElement;
input.value = 'qualquer';
input.focus();
