// Escreva uma função que aceite uma matriz de
// intervalos e retorne a soma de todos os
// comprimentos de intervalo.
// Intervalos sobrepostos devem ser contados
// apenas uma vez.
// Os intervalos são representados por um par de
// inteiros na forma de uma matriz. O primeiro valor
// do intervalo sempre será menor que o segundo
// valor. Exemplo de intervalo: [1,5] é intervalo de
// 1 a 5. O comprimento desse intervalo é 4.

const somaIntervalos = (intervalos) => {
    let somaIntervalos = 0;
    let somaSobrepostos = 0;

    // Soma todos os intervalos.
    intervalos.forEach(intervalo => {
        somaIntervalos += intervalo[1] - intervalo[0];
    });

    // Encontra e soma todos os sobrepostos.
    intervalos.forEach(intervalo => {
        for (let i = 0; i < intervalos.length; i++) {
            const primeiroNumeroA = intervalo[0];
            const primeiroNumeroB = intervalos[i][0];
            const segundoNumeroB = intervalos[i][1];

            if (primeiroNumeroA < segundoNumeroB && primeiroNumeroA > primeiroNumeroB) {
                somaSobrepostos += segundoNumeroB - primeiroNumeroA
            }
        }
    });

    // Subtrai os sobrepostos dos intervalos.
    return somaIntervalos - somaSobrepostos;
}

console.log(somaIntervalos([
    [1, 4],
    [7, 10],
    [3, 5]
]));
// 7

console.log(somaIntervalos([
    [1, 2],
    [6, 10],
    [11, 15]
]));
// 9

console.log(somaIntervalos([
    [0, 20],
    [-100000000, 10],
    [30, 40]
]));
// 100000030
