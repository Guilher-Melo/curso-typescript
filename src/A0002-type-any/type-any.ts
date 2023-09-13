// Type any nao é recomendado

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function showMsg(msg: any) {
  return msg;
}

console.log(showMsg('oi'));
console.log(showMsg([123, 12]));
console.log(showMsg(222));
