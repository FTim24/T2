
const produtos = [
  { nome: "Teclado", preco: 120 },
  { nome: "Monitor", preco: 800 },
  { nome: "Mouse", preco: 60 },
  {nome: "SSD", preco: 300}
];

function nomesOrdenadosPorPreco(produtos) {
  return produtos
    .slice() 
    .sort((a, b) => a.preco - b.preco)
    .map(p => p.nome);
}

console.log(nomesOrdenadosPorPreco(produtos));
