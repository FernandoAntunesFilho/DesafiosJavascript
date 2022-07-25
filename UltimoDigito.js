// Escreva uma função que recebe dois números
// positivos como parâmetro. A função deve
// calcular o parâmetro 1 elevado à potência do
// parâmetro 2 e retornar o último dígito do valor
//  resultante.

const lastDigit = (base, expoente) => {
    const result = BigInt(base) ** BigInt(expoente);
    const stringResult = result.toString().slice(-1);
    return stringResult;
}

console.log(lastDigit(4, 2));
// 6

console.log(lastDigit(9, 7));
// 9

console.log(lastDigit(10, 100000));
// 0

console.log(lastDigit(164, 20378));
// 6
