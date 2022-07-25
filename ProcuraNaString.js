// Escreva uma função que recebe duas strings
// (a, b) como pârametros e retorna o número de
// vezes que a string a é utilizada dentro de b.

const procuraNaString = (a, b) => {
    a = a.toLowerCase();
    b = b.toLowerCase();

    return b.split(a).length - 1;;
}

console.log(procuraNaString("a", "Quantas vezes o valor de 'a' ocorre aqui?"));
// 5

console.log(procuraNaString("as", "Quantas vezes o valor de 'a' ocorre aqui?"));
// 1

console.log(procuraNaString("q", "Quantas vezes o valor de 'a' ocorre aqui?"));
// 2
