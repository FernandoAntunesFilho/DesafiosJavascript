// Escreva uma função que recebe uma string
// como parâmetro. A função deve fazer a
// contagem de caracteres, palavras e linhas,
// retornando um objeto com esses valores.

const phraseParser = (frase) => {
    const characteres = contaCaracteres(frase);
    const words = contaPalavras(frase) + 1;
    const lines = contaLinhas(frase) + 1;

    const contagem = {
        characteres,
        words,
        lines
    }

    return contagem;
}

const contaCaracteres = (frase) => {
    let contador = 0;

    for (let i = 0; i < frase.length; i++) {
        contador++;
    }

    return contador;
}

const contaPalavras = (frase) => {
    let contador = 0;

    for (let i = 0; i < frase.length; i++) {
        if (frase[i] == ' ' || frase[i] == '\n'){
            contador++;
        }
    }

    return contador;
}

const contaLinhas = (frase) => {
    let contador = 0;

    for (let i = 0; i < frase.length; i++) {
        if (frase[i] == '\n'){
            contador++;
        }
    }

    return contador;
}

console.log(phraseParser("Once upon a time"));
// { characteres: 16, words: 4, lines: 1 }

console.log(phraseParser("Happily Ever After"));
// { characteres: 18, words: 3, lines: 1 }

console.log(phraseParser("True courage is in facing danger when you are afraid.\nThe wizard of Oz"));
// { characteres: 70, words: 14, lines: 2 }
