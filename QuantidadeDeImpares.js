// Escreva uma função que recebe um número
// como parâmetro. Retorne a quantidade de
// números ímpares positivos, menores do que 
// valor passado por parâmetro.

let quantidadeImpares = (numero) => {
    let contaImpares = 0;

    for (let i = 0; i < numero; i++){
        if (i % 2 != 0) contaImpares++;
    }
    return contaImpares;
}

console.log(quantidadeImpares(7));
// 3
console.log(quantidadeImpares(15));
// 7
console.log(quantidadeImpares(15023));
// 7511
