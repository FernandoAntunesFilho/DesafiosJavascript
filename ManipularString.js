// Escreva uma função que recebe dois
// parâmetros (text, flag).
// Se a flag for igual a "start", deve retornar os 3
// primeiros caracteres do parâmetro text.
// Se a flag for igual a "end", deve retornar os 3
// últimos caracteres do parâmetro text.
// Se o parâmetro text tiver menos de 3
// caracteres, apenas retornar o text.

const manipulaString = (texto, flag) => {
    const idCaractereInicial = 0;
    const quantidadeCaracteres = 3;

    if (flag === "start" || flag == null) return texto.substring(idCaractereInicial, quantidadeCaracteres);
    if (flag === "end") return texto.substring(texto.length - quantidadeCaracteres, texto.length);
    return texto + ". Flag é " + flag;
}

console.log(manipulaString("abcdefg", "start"));
// abc

console.log(manipulaString("abcdefg", "end"));
// efg

console.log(manipulaString("ab", "end"));
// ab

console.log(manipulaString("abcdefg"));
// abc
