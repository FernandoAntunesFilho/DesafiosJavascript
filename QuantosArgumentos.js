// No JavaScript, assim como em outras
// linguagens de programação, existe a
// possibilidade de ter uma função que recebe
// uma quantidade não específica de
// argumentos.
// Então, escreva uma função, que não
// determina os argumentos, e retorna a
// quantidade de argumentos recebidos.

let contaArgumentos = (...argumentos) => {
    return argumentos.length;
}

console.log(contaArgumentos('a', 'b'));
// 2
console.log(contaArgumentos(['z', 'x', '1']));
// 1
console.log(contaArgumentos());
// 0
