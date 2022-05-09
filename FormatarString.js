//  Escreva uma função que recebe uma string
// como parametro.
//  A string é um título de um filme com os
// caracteres formatados incorretamente.
//  As palavras do título do filme deve conter
// as primeiras letras maíusculas e as demais
// minúsculas.

function formatarString(titulo){
    const arrayDePalavras = titulo.toLowerCase().split(" ");
    let tituloFormatado = "";

    arrayDePalavras.forEach(palavra => {
        const primeiraLetra = palavra[0].toUpperCase();
        const restoPalavra = palavra.substring(1);

        tituloFormatado = tituloFormatado + primeiraLetra + restoPalavra + " ";
    });

    return tituloFormatado;
}


console.log(formatarString("o pOderoso CHEFÃO"));
console.log(formatarString("O mágiCO DE OZ"));
console.log(formatarString("o silêncio DOS INOCENTES"));
