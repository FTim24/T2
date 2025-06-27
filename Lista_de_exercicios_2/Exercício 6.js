
function memoize(fn){

        const cache = [];
         return function (...args) {
    const chave = JSON.stringify(args);
    if (cache[chave] !== undefined) {
      console.log("Valor vindo do cache!");
      return cache[chave];
    }

    const resultado = fn(...args);
    cache[chave] = resultado;
    return resultado;
  };
}

function lentoFatorial(n) {
  console.log("Calculando...");
  if (n === 0) return 1;
  return n * lentoFatorial(n - 1);
}

const fatorialMemo = memoize(lentoFatorial);

console.log(fatorialMemo(100)); // cache!
console.log(fatorialMemo(100)); // calcula

