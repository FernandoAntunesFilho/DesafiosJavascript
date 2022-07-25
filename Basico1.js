// Escreva uma função que recebe dois valores
// a e b, como parâmetros. Essa função deve
// retirnar true se os dois valores forem iguais e
// do mesmo tipo. Caso contrário, false.

const ehIgual = (a, b) => {
    if (a === b) return true;
    return false;
}

console.log(ehIgual(2, 3));
// false

console.log(ehIgual(3, 3));
// true

console.log(ehIgual(1, "1"));
// false

console.log(ehIgual("10", "10"));
// true
