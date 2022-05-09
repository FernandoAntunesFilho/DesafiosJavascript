//  Escreva uma função que recebe uma string
// como paramentro.
//  A função deve retornar o número de
// caracteres repetidos, mesmo que maiúsculos
// ou minúsculos.

// EXEMPLO
// "aabBcde" : "a" ocorre duas vezes e "b"
// também ocorre duas vezes ("b" e "B"). então
// há duas letras que se repetem, logo o valor a
// ser retornado é 2

function contaDuplicados(frase){
    const arrayDeLetras = frase.toUpperCase().split("");
    let listaLetrasRepetidos = {};
    let totalRepetidos = 0;

    arrayDeLetras.forEach(letra => {
        listaLetrasRepetidos[letra] = (listaLetrasRepetidos[letra] || 0) + 1;
    });

    const letrasUnicas = Object.keys(listaLetrasRepetidos);

    letrasUnicas.forEach(key => {
        if (listaLetrasRepetidos[key] > 1) totalRepetidos++;
    });

    return totalRepetidos;
}



console.log(contaDuplicados("abcde"));
console.log(contaDuplicados("aabbccde"));
console.log(contaDuplicados("aAbbcd"));
console.log(contaDuplicados("parallelepiped"));
