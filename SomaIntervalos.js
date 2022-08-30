// Dada uma lista de inteiros A, para cada par de
// inteiros (primeiro, último) em intervalos de
// lista, calcule a soma dos valores em A entre
// os índices primeiro e último (ambos inclusive)
// e retorne a maior soma resultante.

const somaIntervalos = (array, range) => {
    let soma = 0;

    range.forEach(limites => {
        const [primeiro, ultimo] = limites;
        const numerosParaSomar = array.slice(primeiro, ultimo + 1);
        const somaAtual = numerosParaSomar.reduce((total, numero) => {
            return total + numero;
        });

        if (somaAtual > soma) soma = somaAtual;
    });

    return soma;
}

console.log(somaIntervalos(
    [1, -2, 3, 4, -5, -4, 3, 2, 1],
    [[1, 3], [0, 4], [6, 8]]
));
// 6

console.log(somaIntervalos(
    [1, -2, 3, 4, -5, -4, 3, 2, 1],
    [[1, 3]]
));
// 5

console.log(somaIntervalos(
    [1, -2, 3, 4, -5, -4, 3, 2, 1],
    [[1, 4], [2, 5]]
));
// 0
