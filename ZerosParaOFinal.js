// Escreva uma função que recebe um array de
// números como argumento. A função deve
// mover todos os zeros para o final do array,
// mantendo a ordem do restante dos números.
// Retorne o array modificado.

function moveZeros(numeros) {
  let zerosAoFinal = numeros.filter((numero) => {
    return numero != 0;
  });

  for (let i = zerosAoFinal.length; i < numeros.length - 1; i++) {
    zerosAoFinal.push(0);
  }

  return zerosAoFinal;
}

let array1 = [7, 2, 0, 0, 0, 13, 0, 78, 0, 0, 19];
let array2 = [1, 0, 2, 0, 11, 5, 0, 4, 1];

console.log(moveZeros(array1));
// 7, 2, 13, 78, 19, 0, 0, 0, 0, 0, 0

console.log(moveZeros(array2));
// 1, 2, 11, 5, 4, 1, 0, 0, 0
