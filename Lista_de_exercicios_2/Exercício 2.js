
// Importa o módulo prompt-sync para leitura de dados via terminal
const prompt = require('prompt-sync')();

const numero = Math.floor(Math.random() * 100) + 1; // gera um número aleátorio, arredonda para baixo e soma 1

let tentativa;
let tentativas = 0;

while (tentativa !== numero){
    tentativa = parseInt(prompt("Advinhe o número(entre 1 e 100):")); // parseInt() converte a string em número inteiro
    tentativas++;
    if (tentativa < numero) {
    console.log("Mais alto...");
  } else if (tentativa > numero) {
    console.log("Mais baixo...");
  } else {
    console.log(`Parabéns! Você acertou em ${tentativas} tentativa(s)!`);
  }
}
