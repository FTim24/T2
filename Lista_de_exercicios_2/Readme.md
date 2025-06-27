# 💻 Projeto: Exercícios de JavaScript – Controle, Funções, Arrays e Objetos

## 📚 Descrição Geral

Este repositório contém a implementação de **9 exercícios práticos** em JavaScript, desenvolvidos com o objetivo de consolidar conhecimentos sobre **estruturas de controle**, **funções (inclusive recursivas)**, **funções de ordem superior**, além de manipulação avançada de **arrays**, **objetos** e **padrões de otimização**, como *memoization* e *debounce*.

Os exercícios foram organizados em três seções temáticas:

- **Seção 1:** Estruturas de Controle Avançadas  
- **Seção 2:** Funções e Recursão  
- **Seção 3:** Arrays e Objetos Complexos

---

## 📌 Lista de Exercícios

### 🔹 Seção 1 – Estruturas de Controle Avançadas

1. **Validação de Datas**
   - Função `ehDataValida(dia, mes, ano)` que verifica se uma data é válida considerando anos bissextos e dias permitidos por mês.

2. **Jogo de Adivinhação**
   - Gera um número aleatório de 1 a 100 e solicita que o usuário adivinhe via terminal, informando se deve chutar "mais alto" ou "mais baixo".

3. **Palavras Únicas**
   - A partir de uma string, extrai e retorna apenas as palavras que aparecem uma única vez, utilizando `for` e `if/else`.

---

### 🔹 Seção 2 – Funções e Recursão

4. **Fatorial Recursivo**
   - Função `fatorial(n)` que implementa cálculo de fatorial recursivamente. Lança erro para valores negativos e retorna 1 quando `n === 0`.

5. **Debounce**
   - Função `debounce(fn, delay)` que retorna uma versão controlada de `fn`, garantindo que a execução só ocorra se não houver novas chamadas dentro do intervalo `delay`.

6. **Memoization**
   - Função `memoize(fn)` que armazena em cache os resultados anteriores de `fn`, retornando-os instantaneamente em chamadas repetidas com os mesmos argumentos.

---

### 🔹 Seção 3 – Arrays e Objetos Complexos

7. **Mapeamento e Ordenação**
   - Função que recebe um array de objetos `{ nome, preco }`, ordena por `preco` crescente e retorna apenas os nomes.

8. **Agrupamento por Propriedade**
   - Dado um array de vendas `{ cliente, total }`, utiliza `reduce` para gerar um objeto onde cada chave é um cliente, e o valor é a soma total de suas compras.

9. **Conversão Entre Formatos**
   - Função `paresParaObjeto(pares)` que transforma um array de pares `[ [chave, valor], ... ]` em objeto.
   - Função `objetoParaPares(obj)` que realiza a operação inversa.

---

## ⚙️ Tecnologias e Ambiente

- Linguagem: **JavaScript (ES6+)**
- Ambiente de execução: **Node.js**
- Leitura via terminal: **[prompt-sync](https://www.npmjs.com/package/prompt-sync)** (utilizada no exercício 2)

---

## 🚀 Como Executar

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/exercicios-javascript.git
   cd exercicios-javascript

2. Instale o módulo prompt-sync (caso utilize o exercício 2):
npm install prompt-sync

3. Execute o arquivo desejado:
node nome-do-arquivo.js




