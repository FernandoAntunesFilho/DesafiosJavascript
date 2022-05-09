// Escreva uma função que recebe uma string como parametro.
// Retorne a quantidade de vogais contidas na string.


function ContaVogais(frase){
    const vogais = ["a", "e", "i", "o", "u"];
    let totalVogais = 0;

    for (let i = 0; i < frase.length; i++){
        if (vogais.includes(frase[i])) {
            totalVogais++;
        }
    }
    return totalVogais;
}

let frase = "Fernando";
console.log(frase);
console.log(ContaVogais(frase));

frase = "Javascript para aprender"
console.log(frase);
console.log(ContaVogais(frase));
