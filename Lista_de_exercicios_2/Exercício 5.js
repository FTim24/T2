
function debounce(fn, delay){
    let timerId;

    return function (...args) {// ...args permite que fn receba qualquer quantidade de argumentos.
    // Se já tiver um timer ativo, cancela ele
    clearTimeout(timerId); // cancela o agendamento anterior, se o usuário disparar novamente.

    // Cria um novo timer
    timerId = setTimeout(() => {fn(...args);}, delay); //  agenda a função fn para rodar após delay milissegundos.
  };
}

function enviarBusca(texto) {
  console.log("Buscando:", texto);
}
const debouncedBusca = debounce(enviarBusca, 10500);
debouncedBusca("apalavrafinal");