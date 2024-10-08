function quadradoMaioresQue10(numeros) {
  return numeros.filter(num => num > 10).map(num => num * num);
}

const numeros11 = [5, 12, 18, 9];
console.log(quadradoMaioresQue10(numeros11));
