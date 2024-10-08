function multiploDeTres(numeros) {
  const multiplos = numeros.filter(num => num % 3 === 0);
  console.log(multiplos.join(', '));
  console.log(`Total: ${multiplos.length}`);
}

const numeros8 = [1, 3, 5, 6, 9, 12];
multiploDeTres(numeros8);
