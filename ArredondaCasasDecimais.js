// Escreva uma função que recebe um number
// (a) como parâmetro.
// Arredonde o número para 2 casas decimais
// após a vírgula.
// Retorne o número arredondado.

const arredondaComDecimais = (numero) => {
    const numeroArredondado = numero.toFixed(2);
    return numeroArredondado;
}

console.log(arredondaComDecimais(2.12345));
// 2.12

console.log(arredondaComDecimais(3.543));
// 3,54

console.log(arredondaComDecimais(1.4567));
// 1.46

console.log(arredondaComDecimais(18.98765));
// 18.99
