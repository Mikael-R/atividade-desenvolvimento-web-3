# Lista de Questões JavaScript - Professor José Neto

## Questões

1. **Escreva um programa que receba dois números como entrada, some-os e exiba o resultado.**
   - Em seguida, faça com que o programa exiba:
     - O maior número entre eles.
     - Se a soma é par ou ímpar.

2. **Crie uma função que receba um número inteiro como argumento e retorne a soma de todos os números inteiros de 1 até esse número. Utilize um laço for para isso.**
   - Exemplo:
     ```javascript
     somaAteN(5); // Retorna 15 (1 + 2 + 3 + 4 + 5)
     ```

3. **Escreva uma função que receba a idade de uma pessoa e retorne uma mensagem indicando:**
   - "Menor de idade" se a idade for menor que 18.
   - "Maior de idade" se a idade for 18 ou mais.

4. **Crie uma função chamada `fatorial` que calcule e retorne o fatorial de um número dado.**
   - Exemplo:
     ```javascript
     fatorial(5); // Retorna 120 (5 * 4 * 3 * 2 * 1)
     ```

5. **Dado um array de números, escreva uma função que:**
   - Use `filter` para retornar apenas os números pares.
   - Use `map` para dobrar os números filtrados.
   - Exemplo:
     ```javascript
     const numeros = [1, 2, 3, 4, 5, 6];
     dobrarPares(numeros); // Retorna [4, 8, 12]
     ```

6. **Crie um programa que implemente uma fila (FIFO - First In, First Out) utilizando um array. O programa deve:**
   - Adicionar itens à fila usando `push`.
   - Remover itens da fila usando `pop`.

7. **Escreva uma função que receba um array de strings e as ordene em ordem alfabética. Não use `localeCompare`.**
   - Exemplo:
     ```javascript
     const frutas = ['maçã', 'laranja', 'banana'];
     ordenarFrutas(frutas); // Retorna ['banana', 'laranja', 'maçã']
     ```

8. **Escreva um programa que percorra um array de números e exiba na tela:**
   - Os números que são múltiplos de 3.
   - O total de números múltiplos de 3 encontrados.
   - Exemplo:
     ```javascript
     const numeros = [1, 3, 5, 6, 9, 12];
     multiploDeTres(numeros); // Saída: 3, 6, 9, 12; Total: 4
     ```

9. **Dado um array de objetos representando alunos, cada um com nome e nota, escreva uma função que exibe o nome de cada aluno e se ele foi aprovado (nota maior ou igual a 7) ou reprovado.**
   - Exemplo:
     ```javascript
     const alunos = [
       { nome: 'Ana', nota: 8 },
       { nome: 'Carlos', nota: 5 },
       { nome: 'João', nota: 7 }
     ];
     resultadoAlunos(alunos); // Saída: Ana: Aprovado, Carlos: Reprovado, João: Aprovado
     ```

10. **Escreva uma função chamada `numeroPrimo` que receba um número e retorne se ele é primo ou não.**
    - Um número primo é aquele que só pode ser dividido por 1 e por ele mesmo.

11. **Escreva uma função que receba um array de números e retorne um novo array contendo o quadrado dos números que são maiores que 10.**

12. **Crie uma função que utilize o método `reduce` para calcular a soma de todos os elementos de um array de números.**

13. **Dado um array de frutas, escreva uma função que remova a segunda fruta e adicione uma nova fruta no mesmo índice usando o método `splice`.**

14. **Escreva uma função chamada `ehPalindromo` que receba uma string e retorne `true` se for um palíndromo (a palavra pode ser lida da mesma forma de trás para frente) e `false` caso contrário.**

15. **Crie uma função que receba uma matriz bidimensional (array de arrays) e retorne a soma de todos os seus elementos utilizando laços de repetição aninhados.**

---

> “O sucesso nasce do querer, da determinação e persistência em se chegar a um objetivo. Mesmo não atingindo o alvo, quem busca e vence obstáculos, no mínimo fará coisas admiráveis.” - **José de Alencar**
