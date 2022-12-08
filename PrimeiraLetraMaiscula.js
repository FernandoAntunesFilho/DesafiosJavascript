// Escreva uma função quue recebe uma string
// como parâmetro. Retorne a primeira letra em
// maiúsculo e o restante em minúsculo.

let captalize = (string) => {
    if (string == undefined) return;

    const primeiraLetra = string[0].toUpperCase();
    const restoFrase = string.substring(1).toLowerCase();
    const frase = primeiraLetra + restoFrase;
    
    return frase;
}

console.log(captalize('hello World'));
// Hello world
console.log(captalize('practicing programming'));
// Practicing programming
console.log(captalize('Do you wanto to learn more?'));
// Do you wanto to learn more?
console.log(captalize());
// Do you wanto to learn more?
