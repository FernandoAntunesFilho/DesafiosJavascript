//  Escreva uma função que recebe uma string
// como parâmetro e retorna um array de
// caracteres removendo repetições próximas.

function removeRepetido(dados){
    let dadosArray = [];
    let arrayTratado = [];
    if (typeof dados != "object") {
        dadosArray = dados.split("");
    } else {
        dadosArray = dados;
    }

    for (let i = 0; i < dadosArray.length; i++){
        if (dadosArray[i] !== dadosArray[i + 1]){
            arrayTratado.push(dadosArray[i]);
        }
    }

    return arrayTratado;
}

console.log(removeRepetido("AAAABBBCCDAABBB"));
console.log(removeRepetido("ABBCcAD"));
console.log(removeRepetido([1, 2, 2, 3, 3]));
