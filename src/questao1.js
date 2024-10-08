function processarNumeros(num1, num2) {
  const soma = num1 + num2;
  console.log(`Soma: ${soma}`);

  const maior = num1 > num2 ? num1 : num2;
  console.log(`Maior número: ${maior}`);

  const parOuImpar = soma % 2 === 0 ? 'Par' : 'Ímpar';
  console.log(`A soma é ${parOuImpar}`);
}

processarNumeros(5, 8);
