const vendas = [
  { cliente: "Ana", total: 100 },
  { cliente: "Bruno", total: 200 },
  { cliente: "Ana", total: 150 },
  {cliente: "Bruno", total: 300},
  {cliente: "Bruno", total: 500}
];

const totaisPorCliente = vendas.reduce((acc, venda) => {
  if (!acc[venda.cliente]) {
    acc[venda.cliente] = 0;
  }
  acc[venda.cliente] += venda.total;
  return acc;
}, {});

console.log(totaisPorCliente);

