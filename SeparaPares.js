// Escreva uma função que recebe uma string como parametro.
// Separe a string em pares dentro da um array.
// Caso o último item fique sem par complete com underscore _.

function formaPares(frase){
    let listaDePares = [];
    let par = "";

    for (let i = 0; i < frase.length; i += 2){
        const primeiraLetra = frase[i];
        let segundaLetra;
        frase[i + 1] == undefined ? segundaLetra = "_" : segundaLetra = frase[i + 1]
        par = primeiraLetra + segundaLetra;
        listaDePares.push(par);
    }

    return listaDePares;
}


console.log(formaPares("abc"));
console.log(formaPares("abcdefgh"));
console.log(formaPares("abcdefg"));
