// Escreva uma função que recebe uma frase
// como parâmetro e retorna a maior palavra
// encontrada. Caso duas ou mais palavras
// tenham o mesmo tamanho, retorne a primeira.

const palavraMaisLonga = (frase) => {
    const palavras = frase.split(" ");
    let palavraMaisLonga = "";

    palavras.forEach(palavra => {
        if (palavra.length > palavraMaisLonga.length) {palavraMaisLonga = palavra};
    });

    return palavraMaisLonga;
}

console.log(palavraMaisLonga("Learning JavaScript"));
// JavaScript

console.log(palavraMaisLonga("It's time for coding"));
// coding
