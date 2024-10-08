function somaArray(numeros) {
  return numeros.reduce((soma, num) => soma + num, 0);
}

const numeros12 = [1, 2, 3, 4];

console.log(somaArray(numeros12));
