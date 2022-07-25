// Escreva uma função que recebe 6 parâmetros
// (a, b, c, d, e, f).
// Faça a soma de acom b.
// O resultado da soma, subtraia o valor de c.
// O resultado da subtração, multiplique por d e
// faça a divisão por e.
// E para finalizar, faça o resultado elevado à
// podencia de f.

const operacoesMatematicas = (a, b, c, d, e, f) => {    
    return (((((a + b) - c) * d) / e) ** f);
}

console.log(operacoesMatematicas(6, 5, 4, 3, 2, 1));
// 10.5

console.log(operacoesMatematicas(6, 2, 1, 4, 2, 3));
// 2744

console.log(operacoesMatematicas(2, 3, 6, 4, 2, 3));
// -8
