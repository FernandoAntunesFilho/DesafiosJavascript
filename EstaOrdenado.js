// Escreva um função que recebe um array de
// números como argumento. A função deve
// deve verificar se o array está ordenado e em
// qual ordem e retornar uma das 3 opções abaixo.
// "yes, ascending"
// "yes, descending"
// "no"

const isSortedAndHow = (array) => {
  const arrayAscendente = [... array].sort((a, b) => {
    return (a - b);
  });
  const arrayDescendente = [... array].sort((a, b) => {
    return (b - a);
  });

  if (JSON.stringify(array) == JSON.stringify(arrayAscendente)) {
    return "yes, ascending";
  } else if (JSON.stringify(array) == JSON.stringify(arrayDescendente)) {
    return "yes, descending";
  } else {
    return "no";
  }
}

console.log(isSortedAndHow([4, 5, 9]));
// "yes, ascending"

console.log(isSortedAndHow([36, 22, 1, -1]));
// "yes, descending"

console.log(isSortedAndHow([40, 22, 10, 11]));
// "no"