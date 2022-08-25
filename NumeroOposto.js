// Um desafio simples, mas importante para
// quem está iniciando. Escreva uma função que
// recebe um número e retorna o valor oposto
// (se positivo, retorna negativo e se negativo,
// retorna positivo).

const numeroOposto = (numero) => {
    return parseFloat((-1) * numero);
}

console.log(numeroOposto(1));
// -1

console.log(numeroOposto(0));
// 0

console.log(numeroOposto(11.11));
// -11.11
