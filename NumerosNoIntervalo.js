// Escreva uma função que recebe dois
// parâmetros, MIN e MAX (mínimo e maxímo), e
// retorna um array de números de acordo com
// o intervalo.
// Caso seja informado (1, 5) o array será:
// [1, 2, 3, 4, 5]

const numerosNoIntervalo = (min, max) => {
    const intervalo = [];

    for (let i = min; i <= max; i++) {
        intervalo.push(i);
    }

    return intervalo;
}

console.log(numerosNoIntervalo(1, 5));
// [1, 2, 3, 4, 5]

console.log(numerosNoIntervalo(11, 18));
// [11, 12, 13, 14, 15, 16, 17, 18]

console.log(numerosNoIntervalo(-5, 5));
// [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5]
