//  Escreva uma função que recebe uma string
// como parâmetro.
//  Retorne a primeira letra da string que não se
// repete.

function encontrarCaracter(palavra){
    let contagemCaracter = {};

    for (let i = 0; i < palavra.length; i++){
        contagemCaracter[palavra[i]] = (contagemCaracter[palavra[i]] || 0) + 1;
    }

    let keys = Object.keys(contagemCaracter);
    let letra = "";

    keys.forEach((key) => {
        if (contagemCaracter[key] === 1 && letra === "") {
            letra = key;
        };
    })

    return letra
}

console.log(encontrarCaracter("string"));
console.log(encontrarCaracter("return"));
console.log(encontrarCaracter("moonmen"));
console.log(encontrarCaracter("correct"));
