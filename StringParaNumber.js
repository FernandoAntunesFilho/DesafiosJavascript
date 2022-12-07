// Escreva uma função que recebe um array de
// caracteres (string) como parâmetro. Retorne
// um array de números de acordo com cada
// caractere.
// Se o caractere for um número, faça a
// conversão. Porém, se o caractere for uma
// letra, utilize o valor do índice em que o
// caractere se encontra no array.

let stringParaNumber = (array) => {
  let result = [];

  for (let i = 0; i < array.length; i++) {
    var numero = array[i];
    +numero in [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
      ? result.push(+numero)
      : result.push(i);
  }

  return result;
};

console.log(stringParaNumber(["2", "5", "a", "7", "b", "a"]));
// [2, 5, 2, 7, 4, 5]
console.log(stringParaNumber(["z", "x", "2", "2", "1"]));
// [0, 1, 2, 2, 1]
console.log(stringParaNumber(["2", "4", "x", "4"]));
// [2, 4, 2, 4]
