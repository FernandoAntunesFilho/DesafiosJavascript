// Escreva uma função que recebe um parâmetro do
// tipo number. Conte quantos 9 são possíveis extrair
// do número antes de chegar a zero.
// Retorne o valor encontrado.

const quantosNove = (numero) => {
    return Math.floor(numero / 9);
}

console.log(quantosNove(8));
// 0

console.log(quantosNove(9));
// 1

console.log(quantosNove(100));
// 11
