// Escreva uma função que recebe um array por
// parâmetro e remove os 3 primeiros elementos
// do array.
// Caso o array tenha menos de 3 elementos,
// retornar um array vazio.

const removeElementos = (array) => {
    return array.splice(3, array.length - 2);
}

console.log(removeElementos([1, 2, 3, 4, 5]));
// [4, 5]

console.log(removeElementos([5, 4, 3, 2, 1, 0]));
// [2, 1, 0]

console.log(removeElementos([10, 20, 30]));
// []

console.log(removeElementos([99, 100]));
// []
