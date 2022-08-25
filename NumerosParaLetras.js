// Escreva uma função que receba um array de
// números (no formato string) e retorna uma
// frase ou palavra. Os números correspondem
// às letras do alfabeto em ordem inversa: a=26,
// z=1 etc. Você também deve considerar '!', '?', '.'
// e ' ' que são representados por '27', '28', '29' e
// '30' respectivamente.

const numerosParaLetras = (array) => {
    const alfabeto = " .?!abcdefghijklmnopqrstuvwxyz".split('').reverse().join('');
    let frase = "";

    array.forEach(numero => {
        frase += alfabeto[numero - 1];
    });

    return frase;
}

console.log(numerosParaLetras(["17", "8"]));
// "js"

console.log(numerosParaLetras(["17", "26", "5", "26", "8", "24", "9", "18", "11", "7", "30",
                               "24", "19", "26", "15", "15", "22", "13", "20", "22", "8"]));
// "javascript challenges"

console.log(numerosParaLetras(["21", "22", "9", "13", "26", "13", "23", "12",
                               "30", "26", "13", "7", "6", "13", "22", "8"]));
// "fernando antunes"
