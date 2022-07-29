// Escreva uma função que recebe um array a e
// um valor b como parâmetros. A função deve
// remover todas as ocorrencias de b e retornar
// o array filtrado.

const filtraValor = (array, valor) => {
    return array.filter((valorArray) => {
        return valorArray != valor;
    })
}

console.log(filtraValor([1, 2, 3], 2));
// [1, 3]

console.log(filtraValor([1, 2, "3"], "3"));
// [1, 2]

console.log(filtraValor(["1", false, 2, "3"], false));
// ['1', 2, '3']

console.log(filtraValor([5, 1, 2, 5, 3, 5], 5));
// [1, 2, 3]
