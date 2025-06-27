
const pessoa = { nome: "Felipe", idade: 18 };

function paresParaObjeto(pares) {
  const obj = {};

  for (let i = 0; i < pares.length; i++) {
    const [chave, valor] = pares[i]; // desestruturação
    obj[chave] = valor;
  }

  return obj;
}

function objetoParaPares(obj) {
  const pares = [];

  for (let chave in obj) {
    pares.push([chave, obj[chave]]);
  }

  return pares;
}


console.log(objetoParaPares(pessoa))

const pares = [["cidade", "São Paulo"], ["estado", "SP"]];
const obj = paresParaObjeto(pares);
console.log(obj); 