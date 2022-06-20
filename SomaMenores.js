// Escreva uma função que receba um array de
// números como pârametro. Retorne a soma
// dos dois menores números do array.

function somaMenores(numeros) {
    numeros.sort((a, b) => a - b);
    return numeros[0] + numeros[1];
}

console.log(somaMenores([1, 2, 7, 20, 11]));
// 3

console.log(somaMenores([21, 2233, 5432, 99]));
// 120

console.log(somaMenores([2022, 1, 2025, 3100]));
// 2023
