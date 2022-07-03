// Escreva um função que recebe um número
// como parâmetro. Faça a soma de todos os
// números positivos, menores do que o número
// passado, que forem múltiplos de 3 e 5.

const somaMultiplos = (numero) => {
  let somaDosMultiplos = 0;

  for (let i = 1; i < numero; i++){
    if (i % 3 == 0 || i % 5 == 0){
      somaDosMultiplos += i;
    }
  }

  return somaDosMultiplos;
}

console.log(somaMultiplos(10));
// 23

console.log(somaMultiplos(23));
// 119

console.log(somaMultiplos(43));
// 450