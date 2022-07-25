// Escreva uma função que recebe um número
// como parâmetro.
// Se o número for par, retorna true e se for
// ímpar, retorna false.

const ehPar = (numero) => {
    if (numero % 2 == 0) return true;
    return false;
}

console.log(ehPar(8));
// true

console.log(ehPar(-10));
// true

console.log(ehPar(7));
// false

console.log(ehPar(-41));
// false
