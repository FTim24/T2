function ehDataValida(dia, mes, ano) {
  if (mes < 1 || mes > 12) {
    return false; // mês inválido
  }

  let diasNoMes;

  switch (mes) {
    case 4: case 6: case 9: case 11:
      diasNoMes = 30;
      break;
    case 2:
      // Vamos verificar se é ano bissexto
      if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
        diasNoMes = 29;
      } else {
        diasNoMes = 28;
      }
      break;
    default:
      diasNoMes = 31;
  }

  // Agora, verificamos se o dia está no intervalo válido
  if (dia < 1 || dia > diasNoMes) {
    return false;
  }

  return true;
}
console.log(ehDataValida(29, 2, 2024)); // true (ano bissexto)
console.log(ehDataValida(29, 2, 2023)); // false
console.log(ehDataValida(31, 4, 2023)); // false (abril tem 30)
console.log(ehDataValida(31, 12, 2023)); // true
