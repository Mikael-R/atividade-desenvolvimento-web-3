function substituirFruta(frutas, novaFruta) {
  frutas.splice(1, 1, novaFruta);
  return frutas;
}

const frutas13 = ['maçã', 'banana', 'laranja'];

console.log(substituirFruta(frutas13, 'morango'));
