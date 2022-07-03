// Escreva um função que recebe um número
// como parâmetro. Se o número for par, divida
// em dois números ímpares próximos (que
// somados resultam no número par), por
// exemplo 8 vira 3 e 5 (números próximos! 1 e 7
// também resultam em 8, mas são números
// distantes entre si) e retorne os números em
// um array. Caso o número passado por
// parâmetro for ímpar, retorne o próprio número
// dentro de um array de uma posição.

const divideParEmImpares = (numero) => {
  if (numero % 2 != 0) {
    return [numero];
  }

  const metade = numero / 2;
  let divisor2 = metade;

  while(divisor2 % 2 == 0) {
    divisor2 += 1;
  }

  return [(numero - divisor2), divisor2];
}

console.log(divideParEmImpares(8));
// [3, 5]

console.log(divideParEmImpares(10));
// [5, 5]

console.log(divideParEmImpares(7));
// [7]