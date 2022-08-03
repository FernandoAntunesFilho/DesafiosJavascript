// Escreva uma função que recebe um array A e
// um número B como parâmetros.
// Faça a soma de todos os elementos do array
// com valor maior do que B.
// Retorne a soma.

const somaSeMaior = (array, valor) => {
    return array.filter((num) => {
        return num > valor;
    }).reduce((total, num) => {
        return total += num;
    });
}

console.log(somaSeMaior([1, 2, 3, 4, 5, 6, 7, 8], 3));
// 30

console.log(somaSeMaior([-14, -12, -5, 4, -4], -5));
// 0

console.log(somaSeMaior([33, 45, 88, 105, 111], 99));
// 216
