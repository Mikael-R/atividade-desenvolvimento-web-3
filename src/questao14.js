function ehPalindromo(palavra) {
  const palavraInvertida = palavra.split('').reverse().join('');
  return palavra === palavraInvertida;
}

console.log(ehPalindromo('ana'));
