const frase = "Hello word word"

const palavras = frase.split(" "); // é usado para dividir uma string em partes, com base em um separador, e retornar essas partes como um array.
const unicas = [];

for (let i = 0; i < palavras.length; i++) {
  let palavra = palavras[i];
  let contador = 0;

 // Conta quantas vezes a palavra aparece
  for (let j = 0; j < palavras.length; j++) {
    if (palavras[j] === palavra) {
      contador++;
    }
  }

  // Se aparecer só uma vez, adiciona ao array de únicas
  if (contador === 1) {
    unicas.push(palavra);
  }
}

console.log(`As palavras únicas são "${unicas}"`); // exibe apenas as que não se repetem

